package codesquad.backend.issuetracker.oauth.config;

import javax.validation.constraints.NotEmpty;
import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;
import org.springframework.validation.annotation.Validated;

@Getter
@Validated
@ConstructorBinding
@ConfigurationProperties("oauth.github")
public class OAuthProperties {

	@NotEmpty
	private final String clientId;

	@NotEmpty
	private final String clientSecret;

	@NotEmpty
	private final String redirectUri;

	@NotEmpty
	private final String authorizePath;

	@NotEmpty
	private final String accessTokenPath;

	@NotEmpty
	private final String resourcePath;

	public OAuthProperties(String clientId, String clientSecret, String redirectUri,
		String authorizePath, String accessTokenPath, String resourcePath) {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.redirectUri = redirectUri;
		this.authorizePath = authorizePath;
		this.accessTokenPath = accessTokenPath;
		this.resourcePath = resourcePath;
	}
}
