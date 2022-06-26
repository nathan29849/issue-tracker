package codesquad.backend.issuetracker.issue.presentation.dto;

import lombok.Getter;

@Getter
public class
FilterCondition {

	private IssueStatus status;
	private Long labelId;
	private Long milestoneId;
	private Long assigneeId;
}
