package codesquad.backend.issuetracker.oauth.domain.github;

import java.net.URI;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.client.WebClient;

@Component
public class GithubOAuthClient implements OAuthClient<GithubToken, GithubUser> {

	private final String accessTokenPath;
	private final String resourcePath;
	private final String clientId;
	private final String clientSecret;

	public GithubOAuthClient(
		@Value("${oauth.github.access-token-path}") String accessTokenPath,
		@Value("${oauth.github.resource-path}") String resourcePath,
		@Value("${oauth.github.client-id}") String clientId,
		@Value("${oauth.github.client-secret}") String clientSecret
	) {
		this.accessTokenPath = accessTokenPath;
		this.resourcePath = resourcePath;
		this.clientId = clientId;
		this.clientSecret = clientSecret;
	}

	public GithubToken getToken(String code) {
		return WebClient.create()
			.post()
			.uri(URI.create(accessTokenPath))
			.contentType(MediaType.APPLICATION_FORM_URLENCODED)
			.accept(MediaType.APPLICATION_JSON)
			.bodyValue(createTokenBody(code))
			.retrieve()
			.bodyToMono(GithubToken.class)
			.block();
	}

	public GithubUser getUser(String accessToken) {
		return WebClient.create()
			.get()
			.uri(URI.create(resourcePath))
			.header(HttpHeaders.ACCEPT, "application/vnd.github.v3+json")
			.header(HttpHeaders.AUTHORIZATION, "token " + accessToken)
			.retrieve()
			.bodyToMono(GithubUser.class)
			.block();
	}

	private MultiValueMap<String, Object> createTokenBody(String code) {
		MultiValueMap<String, Object> body = new LinkedMultiValueMap<>();
		body.add("client_id", clientId);
		body.add("client_secret", clientSecret);
		body.add("code", code);
		return body;
	}
}
