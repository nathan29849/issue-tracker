package codesquad.backend.issuetracker.oauth.domain.github;

import codesquad.backend.issuetracker.user.domain.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class GithubUser {

	@JsonProperty("login")
	private String githubId;

	@JsonProperty("name")
	private String username;

	@JsonProperty("avatar_url")
	private String imageUrl;

	public User toEntity() {
		return new User(githubId, username, imageUrl);
	}

}
