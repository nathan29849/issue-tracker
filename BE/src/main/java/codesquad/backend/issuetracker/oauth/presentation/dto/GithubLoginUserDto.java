package codesquad.backend.issuetracker.oauth.presentation.dto;

import lombok.Getter;

@Getter
public class GithubLoginUserDto {

	private String userId;
	private String username;
	private String profileImageUrl;

	public GithubLoginUserDto(String userId, String username, String profileImageUrl) {
		this.userId = userId;
		this.username = username;
		this.profileImageUrl = profileImageUrl;
	}
}
