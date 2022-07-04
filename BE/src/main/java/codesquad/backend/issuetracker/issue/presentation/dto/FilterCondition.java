package codesquad.backend.issuetracker.issue.presentation.dto;

import codesquad.backend.issuetracker.issue.domain.IssueStatus;
import lombok.Getter;

@Getter
public class
FilterCondition {

	private IssueStatus status;
	private Long labelId;
	private Long milestoneId;
	private Long assigneeId;
}
