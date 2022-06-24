package codesquad.backend.issuetracker.oauth.application;

import codesquad.backend.issuetracker.oauth.presentation.dto.GithubToken;
import codesquad.backend.issuetracker.oauth.presentation.dto.GithubUser;
import java.net.URI;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class GithubOAuthClient implements OAuthClient<GithubToken, GithubUser> {

	@Override
	public GithubToken getToken(String code, String accessTokenPath, String clientId, String clientSecret) {
		return WebClient.create()
			.post()
			.uri(URI.create(accessTokenPath))
			.contentType(MediaType.APPLICATION_FORM_URLENCODED)
			.accept(MediaType.APPLICATION_JSON)
			.bodyValue(createTokenBody(code, clientId, clientSecret))
			.retrieve()
			.bodyToMono(GithubToken.class)
			.block();
	}

	@Override
	public GithubUser getUser(String accessToken, String resourcePath) {
		return WebClient.create()
			.get()
			.uri(URI.create(resourcePath))
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
