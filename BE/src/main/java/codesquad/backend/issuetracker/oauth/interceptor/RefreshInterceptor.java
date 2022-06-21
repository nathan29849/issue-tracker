package codesquad.backend.issuetracker.oauth.interceptor;

import codesquad.backend.issuetracker.exception.AuthException;
import codesquad.backend.issuetracker.exception.ErrorCode;
import codesquad.backend.issuetracker.oauth.application.JwtFactory;
import codesquad.backend.issuetracker.oauth.application.OAuthService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class RefreshInterceptor extends CommonInterceptor {

	public RefreshInterceptor(OAuthService oAuthService) {
		super(oAuthService);
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
