package codesquad.backend.issuetracker.issue.presentation.dto.response;

import codesquad.backend.issuetracker.issue.domain.IssueStatus;
import codesquad.backend.issuetracker.issue.presentation.dto.UserDto;
import codesquad.backend.issuetracker.user.domain.User;
import lombok.Getter;

@Getter
public class IssueStatusResponse {

	private IssueStatus status;
	private UserDto editor;

	public IssueStatusResponse(IssueStatus status, UserDto editor) {
		this.status = status;
		this.editor = editor;
	}

	public static IssueStatusResponse createBy(IssueStatus status, User editor) {
		return new IssueStatusResponse(status,
			new UserDto(editor.getId(), editor.getAuthId(), editor.getUsername(),
				editor.getProfileImageUrl()));
	}
}
