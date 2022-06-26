package codesquad.backend.issuetracker.label.presentation.dto;

import java.util.List;
import lombok.Getter;

@Getter
public class LabelsResponseDto {

	private List<LabelDto> labels;
}
