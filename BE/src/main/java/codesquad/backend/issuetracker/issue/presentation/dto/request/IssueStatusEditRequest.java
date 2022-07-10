package codesquad.backend.issuetracker.issue.presentation.dto.request;

import codesquad.backend.issuetracker.issue.domain.IssueStatus;
import lombok.Getter;

@Getter
public class IssueStatusEditRequest {

	private IssueStatus status;
}
