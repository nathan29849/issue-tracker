package codesquad.backend.issuetracker.milestone.presentation.dto;

import lombok.Getter;

@Getter
public class MilestoneIdDto {

	private final Long milestoneId;

	public MilestoneIdDto(Long milestoneId) {
		this.milestoneId = milestoneId;
	}
}
