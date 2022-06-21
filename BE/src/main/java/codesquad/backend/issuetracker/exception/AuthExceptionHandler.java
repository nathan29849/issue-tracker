package codesquad.backend.issuetracker.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class AuthExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(AuthException.class)
	public ResponseEntity<String> handleAuthException(AuthException e) {
		ErrorCode errorCode = e.getErrorCode();
		return ResponseEntity.status(errorCode.getHttpStatus())
			.body(errorCode.getMessage());
	}
}
