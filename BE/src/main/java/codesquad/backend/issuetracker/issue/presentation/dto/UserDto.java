package codesquad.backend.issuetracker.issue.presentation.dto;

import codesquad.backend.issuetracker.issue.domain.IssueAssignee;
import codesquad.backend.issuetracker.user.domain.User;
import lombok.Getter;

@Getter
public class UserDto {

	private Long id;
	private String username;
	private String imageUrl;

	public UserDto(Long id, String username, String imageUrl) {
		this.id = id;
		this.username = username;
		this.imageUrl = imageUrl;
	}

	public static UserDto createBy(User user) {
		return new UserDto(user.getId(), user.getUsername(), user.getImageUrl());
	}

	public static UserDto createBy(IssueAssignee issueAssignee){
		return createBy(issueAssignee.getAssignee());
	}
}
