package codesquad.backend.issuetracker.issue.presentation.dto.response;

import lombok.Getter;

@Getter
public class IssueIdResponse {

	private Long issueId;

	public IssueIdResponse(Long issueId) {
		this.issueId = issueId;
	}
}
