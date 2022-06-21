package codesquad.backend.issuetracker.oauth.interceptor;

import codesquad.backend.issuetracker.exception.AuthException;
import codesquad.backend.issuetracker.exception.ErrorCode;
import codesquad.backend.issuetracker.oauth.application.OAuthService;
import codesquad.backend.issuetracker.user.domain.User;
import io.jsonwebtoken.Claims;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.HandlerInterceptor;

@Slf4j
@RequiredArgsConstructor
public abstract class CommonInterceptor implements HandlerInterceptor {

	private final OAuthService oAuthService;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
		Object handler) throws Exception {

		String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
		tokenValidationCheck(authorizationHeader);
		Claims claims = getClaims(authorizationHeader);
		User user = userValidationCheck(claims);
		request.setAttribute("user", user);

		return true;
	}

	protected void tokenValidationCheck(String authorizationHeader) {
		if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")){
			throw new AuthException(ErrorCode.UNAVAILABLE_TOKEN);
		}
	}

	protected User userValidationCheck(Claims claims) {
		String userSecret = (String) claims.get("nodeId");
		return oAuthService.findByNodeId(userSecret)
			.orElseThrow(() -> new AuthException(ErrorCode.UNAUTHORIZED_USER));
	}

	protected Claims getClaims(String authorizationHeader){
		throw new AuthException(ErrorCode.ACCESS_TOKEN_EXPIRED);
	};
}