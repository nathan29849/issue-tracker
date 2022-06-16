package codesquad.backend.issuetracker.oauth.presentation.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class GithubToken {

	@JsonProperty("access_token")
	private String accessToken;

	private String scope;

	@JsonProperty("token_type")
	private String tokenType;

}
