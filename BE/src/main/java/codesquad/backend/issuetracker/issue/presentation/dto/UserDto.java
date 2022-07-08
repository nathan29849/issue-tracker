package codesquad.backend.issuetracker.issue.presentation.dto;

import codesquad.backend.issuetracker.issue.domain.IssueAssignee;
import codesquad.backend.issuetracker.user.domain.User;
import lombok.Getter;

@Getter
public class UserDto {

	private Long id;
	private String authId;
	private String username;
	private String profileImageUrl;

	public UserDto(Long id, String authId, String username, String profileImageUrl) {
		this.id = id;
		this.authId = authId;
		this.username = username;
		this.profileImageUrl = profileImageUrl;
	}

	public static UserDto createBy(User user) {
		return new UserDto(user.getId(), user.getAuthId(), user.getUsername(), user.getProfileImageUrl());
	}

	public static UserDto createBy(IssueAssignee issueAssignee){
		return createBy(issueAssignee.getAssignee());
	}
}
