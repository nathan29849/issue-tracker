package codesquad.backend.issuetracker.oauth.application;

import codesquad.backend.issuetracker.oauth.presentation.dto.TokenType;
import codesquad.backend.issuetracker.user.domain.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class JwtFactory {

	private static final Key KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);

	public static Key getKey() {
		return KEY;
	}

	public static String create(User user, TokenType type) {
		Date now = new Date();
		Calendar cal = Calendar.getInstance();
		cal.setTime(now);
		cal.add(Calendar.SECOND, type.getTime());

		log.debug("JWT EXPIRED TIME = {}", cal.getTime());

		return Jwts.builder()
			.setHeader(createJwtHeader())
			.setClaims(createJwtClaims(user))
			.setExpiration(cal.getTime())
			.signWith(KEY, SignatureAlgorithm.HS256)
			.compact();
	}

	private static Map<String, Object> createJwtHeader() {
		Map<String, Object> header = new HashMap<>();
		header.put("typ", "JWT");
		header.put("alg", "HS256");
		header.put("regDate", System.currentTimeMillis());
		return header;
	}

	private static Map<String, Object> createJwtClaims(User user) {
		Map<String, Object> claims = new HashMap<>();
		claims.put("userSecret", user.getUserSecret());
		return claims;
	}

	public static Claims parseClaims(String token) {
		return Jwts.parserBuilder()
			.setSigningKey(KEY)
			.build()
			.parseClaimsJws(token)
			.getBody();
	}
}
