package codesquad.backend.issuetracker.oauth.presentation.controller;

import codesquad.backend.issuetracker.oauth.application.OAuthService;
import codesquad.backend.issuetracker.oauth.application.JwtFactory;
import codesquad.backend.issuetracker.oauth.application.GithubOAuthClient;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubToken;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubUser;
import codesquad.backend.issuetracker.oauth.presentation.dto.TokenType;
import codesquad.backend.issuetracker.user.domain.User;
import java.net.URI;
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
	private final OAuthService authService;

	public GithubAuthController(
		@Value("${oauth.github.client-id}") String clientId,
		@Value("${oauth.github.authorize-path}") String githubAuthPath,
		GithubOAuthClient authClient,
		OAuthService authService
	) {
		this.clientId = clientId;
		this.githubAuthPath = githubAuthPath;
		this.authClient = authClient;
		this.authService = authService;
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
	public ResponseEntity<Void> callback(
		@RequestParam(value = "code", required = false) String code
	) {
		log.debug("Auth Code = {}", code);
		GithubToken githubToken = authClient.getToken(code);
		GithubUser githubUser = authClient.getUser(githubToken.getAccessToken());

		log.debug("User Secret = {}", githubUser.getUserSecret());
		User user = authService.upsertUser(
			new User(
				githubUser.getGithubId(),
				githubUser.getUsername(),
				githubUser.getUserSecret(),
				githubUser.getImageUrl()
			));

		return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY) // User 정보도 보내주기 (Client측에서 유저정보를 식별하기 위함)
			.header(HttpHeaders.SET_COOKIE, getCookie(user, TokenType.ACCESS))
			.header(HttpHeaders.SET_COOKIE, getCookie(user, TokenType.REFRESH))
			.header(HttpHeaders.LOCATION, "/")
			.build();
	}

	private String getCookie(User user, TokenType type) {
		String token = JwtFactory.create(user, type.getTime());
		return ResponseCookie
			.from(type.getType(), token)
			.maxAge(type.getTime())
			.path("/")
			.build()
			.toString();
	}
}
