package codesquad.backend.issuetracker.oauth.application;

import java.net.URI;

public interface AuthService<T, U> {

	URI getLocation();

	T getToken(String code);

	U getUser(String code, String accessToken);
}
