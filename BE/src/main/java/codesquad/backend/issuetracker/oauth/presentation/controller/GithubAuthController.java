package codesquad.backend.issuetracker.oauth.presentation.controller;

import codesquad.backend.issuetracker.exception.AuthException;
import codesquad.backend.issuetracker.exception.ErrorCode;
import codesquad.backend.issuetracker.oauth.application.OAuthService;
import codesquad.backend.issuetracker.oauth.application.JwtFactory;
import codesquad.backend.issuetracker.oauth.application.GithubOAuthClient;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubToken;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubUser;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubLoginUserDto;
import codesquad.backend.issuetracker.oauth.presentation.dto.TokenType;
import codesquad.backend.issuetracker.user.domain.User;
import java.net.URI;
import java.util.Optional;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

@Slf4j
@RestController
@RequestMapping("/oauth/github")
public class GithubAuthController {

	private final String clientId;
	private final String githubAuthPath;
	private final GithubOAuthClient authClient;
	private final OAuthService oAuthService;

	public GithubAuthController(
		@Value("${oauth.github.client-id}") String clientId,
		@Value("${oauth.github.authorize-path}") String githubAuthPath,
		GithubOAuthClient authClient,
		OAuthService oAuthService
	) {
		this.clientId = clientId;
		this.githubAuthPath = githubAuthPath;
		this.authClient = authClient;
		this.oAuthService = oAuthService;
	}

	@GetMapping
	public ResponseEntity<Void> login() {
		log.debug("AuthPath = {}", githubAuthPath);
		URI location = UriComponentsBuilder
			.fromPath(githubAuthPath)
			.queryParam("client_id", clientId)
			.build()
			.toUri();

		log.debug("Location = {}", location);
		return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY)
			.header(HttpHeaders.LOCATION, location.toString())
			.build();
	}

	@GetMapping("/callback")
	public ResponseEntity<GithubLoginUserDto> callback(
		@RequestParam(value = "code", required = false) String code
	) {
		log.debug("Auth Code = {}", code);
		GithubToken githubToken = authClient.getToken(code);
		GithubUser githubUser = authClient.getUser(githubToken.getAccessToken());

		log.debug("User Secret = {}", githubUser.getUserSecret());
		User user = oAuthService.upsertUser(githubUser);

		return tokenResponse(user);
	}

	private ResponseEntity<GithubLoginUserDto> tokenResponse(User user) {
		return ResponseEntity.status(HttpStatus.OK)
			.header(HttpHeaders.SET_COOKIE, getCookie(user, TokenType.ACCESS))
			.header(HttpHeaders.SET_COOKIE, getCookie(user, TokenType.REFRESH))
			.header(HttpHeaders.LOCATION, "/")
			.body(new GithubLoginUserDto(user.getAuthId(), user.getUsername(), user.getImageUrl()));
	}

	private String getCookie(User user, TokenType type) {
		String token = JwtFactory.create(user, type);
		return ResponseCookie
			.from(type.getType(), token)
			.maxAge(type.getTime())
			.path("/")
			.build()
			.toString();
	}

	@GetMapping("/refresh")
	public ResponseEntity<GithubLoginUserDto> refresh(
		HttpServletRequest request
	) {
		String nodeId = (String) request.getAttribute("nodeId");
		User user = oAuthService.findByNodeId(nodeId)
			.orElseThrow(() -> new AuthException(ErrorCode.UNAUTHORIZED_USER));
		log.debug("user: {}", user);
		return tokenResponse(user);
	}
}
