package codesquad.backend.issuetracker.oauth.interceptor;

import codesquad.backend.issuetracker.exception.AuthException;
import codesquad.backend.issuetracker.exception.ErrorCode;
import codesquad.backend.issuetracker.oauth.application.JwtFactory;
import codesquad.backend.issuetracker.oauth.application.LoginService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RefreshInterceptor extends CommonInterceptor {

	public RefreshInterceptor(LoginService loginService) {
		super(loginService);
	}

	@Override
	protected Claims getClaims(String authorizationHeader) {
		try {
			return JwtFactory.parseClaims(authorizationHeader.substring("Bearer " .length()));
		} catch (ExpiredJwtException e) {
			throw new AuthException(ErrorCode.REFRESH_TOKEN_EXPIRED);
		}
	}
}
