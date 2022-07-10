package codesquad.backend.issuetracker.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class UserValidationException extends RuntimeException{

	private final ErrorCode errorCode;

}
