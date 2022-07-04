package codesquad.backend.issuetracker.oauth.presentation.controller;

import codesquad.backend.issuetracker.exception.AuthException;
import codesquad.backend.issuetracker.exception.ErrorCode;
import codesquad.backend.issuetracker.oauth.application.GithubAuthService;
import codesquad.backend.issuetracker.oauth.application.JwtFactory;
import codesquad.backend.issuetracker.oauth.application.LoginService;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubLoginUserDto;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubToken;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubUser;
import codesquad.backend.issuetracker.oauth.presentation.dto.TokenType;
import codesquad.backend.issuetracker.user.domain.User;
import java.net.URI;
import javax.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.server.Cookie.SameSite;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/oauth/github")
public class GithubAuthController {

	private final GithubAuthService authService;
	private final LoginService loginService;

	public GithubAuthController(
		GithubAuthService authService, LoginService loginService
	) {
		this.authService = authService;
		this.loginService = loginService;
	}

	@GetMapping
	public ResponseEntity<Void> login() {

		URI location = authService.getLocation();
		log.debug("Location = {}", location);

		return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY)
			.header(HttpHeaders.LOCATION, location.toString())
			.build();
	}

	@GetMapping("/callback")
	public ResponseEntity<GithubLoginUserDto> callback(
		@RequestParam String code
	) {
		log.debug("Auth Code = {}", code);
		GithubToken githubToken = authService.getToken(code);
		GithubUser githubUser = authService.getUser(code, githubToken.getAccessToken());

		log.debug("Node Id = {}", githubUser.getNodeId());
		User user = loginService.upsertUser(githubUser);

		return tokenResponse(user);
	}

	private ResponseEntity<GithubLoginUserDto> tokenResponse(User user) {
		return ResponseEntity.status(HttpStatus.OK)
			.header(HttpHeaders.SET_COOKIE, getCookie(user, TokenType.ACCESS))
			.header(HttpHeaders.SET_COOKIE, getCookie(user, TokenType.REFRESH))
			.body(new GithubLoginUserDto(
				user.getAuthId(), user.getUsername(), user.getImageUrl(),
				getToken(user, TokenType.ACCESS), getToken(user, TokenType.REFRESH)
			));
	}

	private String getToken(User user, TokenType type){
		return JwtFactory.create(user, type);
	}

	private String getCookie(User user, TokenType type) {
		String token = getToken(user, type);
		return ResponseCookie
			.from(type.getType(), token)
			.maxAge(type.getTime())
			.domain("localhost")
			.sameSite(SameSite.NONE.toString())
			.secure(true)
			.path("/")
			.build()
			.toString();
	}

	@GetMapping("/refresh")
	public ResponseEntity<GithubLoginUserDto> refresh(
		HttpServletRequest request
	) {
		String nodeId = (String) request.getAttribute("nodeId");
		User user = loginService.findByNodeId(nodeId)
			.orElseThrow(() -> new AuthException(ErrorCode.UNAUTHORIZED_USER));
		log.debug("user: {}", user);
		return tokenResponse(user);
	}
}
