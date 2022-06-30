package codesquad.backend.issuetracker.label.presentation.dto.response;

import lombok.Getter;

@Getter
public class LabelIdResponse {

	private Long labelId;

	public LabelIdResponse(Long labelId) {
		this.labelId = labelId;
	}
}
