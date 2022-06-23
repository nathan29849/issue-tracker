package codesquad.backend.issuetracker.oauth.presentation.dto;

import lombok.Getter;

@Getter
public class GithubLoginUserDto {

	private String userId;
	private String username;
	private String profileImageUrl;
	private String accessToken;
	private String refreshToken;

	public GithubLoginUserDto(String userId, String username, String profileImageUrl,
		String accessToken, String refreshToken) {
		this.userId = userId;
		this.username = username;
		this.profileImageUrl = profileImageUrl;
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}
}
