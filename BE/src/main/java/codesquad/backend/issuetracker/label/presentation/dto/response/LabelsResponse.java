package codesquad.backend.issuetracker.label.presentation.dto.response;

import codesquad.backend.issuetracker.label.presentation.dto.LabelDto;
import java.util.List;
import lombok.Getter;

@Getter
public class LabelsResponse {

	private List<LabelDto> labels;
}
