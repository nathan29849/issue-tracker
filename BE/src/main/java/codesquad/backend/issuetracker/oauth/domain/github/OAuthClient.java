package codesquad.backend.issuetracker.oauth.domain.github;

public interface OAuthClient<T, U> {

	T getToken(String code);

	U getUser(String accessToken);
}
