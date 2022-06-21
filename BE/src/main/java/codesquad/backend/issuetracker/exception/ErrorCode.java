package codesquad.backend.issuetracker.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {

	ACCESS_TOKEN_EXPIRED(HttpStatus.UNAUTHORIZED, "Access token expired"),
	REFRESH_TOKEN_EXPIRED(HttpStatus.UNAUTHORIZED, "Refresh token expired"),
	UNAUTHORIZED_USER(HttpStatus.FORBIDDEN, "Unauthorized User"),
	UNAVAILABLE_TOKEN(HttpStatus.FORBIDDEN, "Unavailable Token");

	private final HttpStatus httpStatus;
	private final String message;

}
