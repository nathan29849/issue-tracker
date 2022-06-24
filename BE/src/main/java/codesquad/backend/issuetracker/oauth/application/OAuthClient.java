package codesquad.backend.issuetracker.oauth.application;

public interface OAuthClient<T, U> {

	T getToken(String code, String accessTokenPath, String clientId, String clientSecret);

	U getUser(String accessToken, String resourcePath);
}
