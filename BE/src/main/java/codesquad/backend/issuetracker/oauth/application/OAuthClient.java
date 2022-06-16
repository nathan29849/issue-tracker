package codesquad.backend.issuetracker.oauth.application;

public interface OAuthClient<T, U> {

	T getToken(String code);

	U getUser(String accessToken);
}
