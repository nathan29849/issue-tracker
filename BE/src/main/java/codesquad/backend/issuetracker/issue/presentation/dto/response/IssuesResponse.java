package codesquad.backend.issuetracker.issue.presentation.dto.response;

import codesquad.backend.issuetracker.issue.presentation.dto.IssueDto;
import java.util.List;
import lombok.Getter;

@Getter
public class IssuesResponse {

	private List<IssueDto> issues;
}
