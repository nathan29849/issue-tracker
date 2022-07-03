package codesquad.backend.issuetracker.issue.presentation.dto.request;

import java.util.List;
import lombok.Getter;

@Getter
public class IssueAssigneeEditRequest {

	private List<Long> assigneesId;
}
