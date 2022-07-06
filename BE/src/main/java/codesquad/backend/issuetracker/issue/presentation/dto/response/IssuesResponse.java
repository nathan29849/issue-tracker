package codesquad.backend.issuetracker.issue.presentation.dto.response;

import java.util.List;
import lombok.Getter;

@Getter
public class IssuesResponse {

	private List<IssueDetailResponse> issues;
}
