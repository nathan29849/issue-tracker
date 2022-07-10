package codesquad.backend.issuetracker.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class UserValidationExceptionHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(UserValidationException.class)
	public ResponseEntity<String> handleException(UserValidationException e) {
		ErrorCode errorCode = e.getErrorCode();
		return ResponseEntity.status(errorCode.getHttpStatus())
			.body(errorCode.getMessage());
	}
}
