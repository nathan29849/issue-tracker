package codesquad.backend.issuetracker.oauth.presentation.controller;

import codesquad.backend.issuetracker.oauth.application.OAuthService;
import codesquad.backend.issuetracker.oauth.domain.JwtFactory;
import codesquad.backend.issuetracker.oauth.domain.github.GithubOAuthClient;
import codesquad.backend.issuetracker.oauth.domain.github.GithubToken;
import codesquad.backend.issuetracker.oauth.domain.github.GithubUser;
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

	private static final int EXPIRED_TIME = 86_400;


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
		GithubToken githubToken = authClient.getToken(code);
		GithubUser githubUser = authClient.getUser(githubToken.getAccessToken());
		User user = authService.upsertUser(githubUser.toEntity());

		String accessToken = JwtFactory.create(user, EXPIRED_TIME);
		ResponseCookie cookie = ResponseCookie.from("access_token", accessToken)
			.maxAge(EXPIRED_TIME)
			.path("/")
			.build();

		return ResponseEntity.status(HttpStatus.MOVED_PERMANENTLY)
			.header(HttpHeaders.SET_COOKIE, cookie.toString())
			.header(HttpHeaders.LOCATION, "/")
			.build();
	}
}
