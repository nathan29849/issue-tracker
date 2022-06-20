package codesquad.backend.issuetracker.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ErrorCode {

	ACCESS_TOKEN_EXPIRED(HttpStatus.NOT_ACCEPTABLE, "Access token expired"),
	REFRESH_TOKEN_EXPIRED(HttpStatus.NOT_ACCEPTABLE, "Refresh token expired"),
	UNAUTHORIZED_USER(HttpStatus.BAD_REQUEST, "Unauthorized User"),
	UNAVAILABLE_TOKEN(HttpStatus.BAD_REQUEST, "Unavailable Token");

	private final HttpStatus httpStatus;
	private final String message;

}
