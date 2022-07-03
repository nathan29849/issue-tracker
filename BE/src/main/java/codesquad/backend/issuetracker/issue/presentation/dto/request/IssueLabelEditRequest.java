package codesquad.backend.issuetracker.issue.presentation.dto.request;

import java.util.List;
import lombok.Getter;

@Getter
public class IssueLabelEditRequest {

	private List<Long> labelsId;
}
