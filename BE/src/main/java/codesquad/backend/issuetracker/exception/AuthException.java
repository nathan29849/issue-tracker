package codesquad.backend.issuetracker.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class AuthException extends RuntimeException{

	private final ErrorCode errorCode;

}
