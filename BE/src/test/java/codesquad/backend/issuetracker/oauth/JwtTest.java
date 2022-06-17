package codesquad.backend.issuetracker.oauth;

import static org.assertj.core.api.Assertions.*;
import codesquad.backend.issuetracker.oauth.application.JwtFactory;
import codesquad.backend.issuetracker.user.domain.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.jupiter.api.Test;

public class JwtTest {

	@Test
	void jwt_복호화가_정상적으로_진행된다() {
		User user = new User(
			"nathan29849",
			null,
			"AS2DFA5SDF4DSF3AS2DF",
			"https://avatars.githubusercontent.com/u/67811880?v=4");

		String jws = JwtFactory.create(user, 86400);
		Claims claims = Jwts.parserBuilder()
			.setSigningKey(JwtFactory.getKey())
			.build()
			.parseClaimsJws(jws)
			.getBody();

		String authId = (String) claims.get("authId");
		assertThat("nathan29849").isEqualTo(authId);
	}

}
