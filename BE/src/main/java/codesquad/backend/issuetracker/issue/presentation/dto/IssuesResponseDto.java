package codesquad.backend.issuetracker.issue.presentation.dto;

import java.util.List;
import lombok.Getter;

@Getter
public class IssuesResponseDto {

	private List<SingleIssueDto> issues;
}
