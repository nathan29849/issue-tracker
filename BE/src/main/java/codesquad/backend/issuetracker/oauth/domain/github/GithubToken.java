package codesquad.backend.issuetracker.oauth.domain.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class GithubToken {

	@JsonProperty("access_token")
	private String accessToken;

	private String scope;

	@JsonProperty("token_type")
	private String tokenType;

}
