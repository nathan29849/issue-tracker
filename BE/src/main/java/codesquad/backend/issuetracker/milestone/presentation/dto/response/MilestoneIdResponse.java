package codesquad.backend.issuetracker.milestone.presentation.dto.response;

import lombok.Getter;

@Getter
public class MilestoneIdResponse {

	private final Long milestoneId;

	public MilestoneIdResponse(Long milestoneId) {
		this.milestoneId = milestoneId;
	}
}
