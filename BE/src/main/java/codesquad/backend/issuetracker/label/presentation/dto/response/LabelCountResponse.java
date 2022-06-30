package codesquad.backend.issuetracker.label.presentation.dto.response;

import lombok.Getter;

@Getter
public class LabelCountResponse {

	private Long labelCount;

	public LabelCountResponse(Long labelCount) {
		this.labelCount = labelCount;
	}

	public static LabelCountResponse of(long count) {
		return new LabelCountResponse(count);
	}
}
