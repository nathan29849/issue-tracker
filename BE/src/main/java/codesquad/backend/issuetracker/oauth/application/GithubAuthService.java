package codesquad.backend.issuetracker.oauth.application;

import codesquad.backend.issuetracker.oauth.config.OAuthProperties;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubToken;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubUser;
import java.net.URI;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;

@Slf4j
@RequiredArgsConstructor
@Service
public class GithubAuthService implements AuthService<GithubToken, GithubUser> {

	private final OAuthProperties authProperties;

	@Override
	public URI getLocation() {
		return UriComponentsBuilder
			.fromPath(authProperties.getAuthorizePath())
			.queryParam("client_id", authProperties.getClientId())
			.build()
			.toUri();
	}

	@Override
	public GithubToken getToken(String code) {
		return WebClient.create()
			.post()
			.uri(URI.create(authProperties.getAccessTokenPath()))
			.contentType(MediaType.APPLICATION_FORM_URLENCODED)
			.accept(MediaType.APPLICATION_JSON)
			.bodyValue(
				createTokenBody(code, authProperties.getClientId(), authProperties.getClientSecret())
			)
			.retrieve()
			.bodyToMono(GithubToken.class)
			.block();
	}

	@Override
	public GithubUser getUser(String code, String accessToken) {

		return WebClient.create()
			.get()
			.uri(URI.create(authProperties.getResourcePath()))
			.header(HttpHeaders.ACCEPT, "application/vnd.github.v3+json")
			.header(HttpHeaders.AUTHORIZATION, "token " + accessToken)
			.retrieve()
			.bodyToMono(GithubUser.class)
			.block();
	}

	private MultiValueMap<String, Object> createTokenBody(String code, String clientId, String clientSecret) {
		MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
		body.add("client_id", clientId);
		body.add("client_secret", clientSecret);
		body.add("code", code);
		return body;
	}
}
