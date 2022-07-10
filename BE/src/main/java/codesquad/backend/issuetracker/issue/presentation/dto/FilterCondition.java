package codesquad.backend.issuetracker.issue.presentation.dto;

import codesquad.backend.issuetracker.issue.domain.IssueStatus;
import java.util.List;
import lombok.Getter;

@Getter
public class
FilterCondition {

	private IssueStatus status;
	private List<Long> labelId;
	private List<Long> milestoneId;
	private List<Long> assigneeId;
}
