package codesquad.backend.issuetracker.milestone.presentation.dto;

import lombok.Getter;

@Getter
public class MilestoneCountDto {

	private Integer milestoneCount;

	public MilestoneCountDto(Integer milestoneCount) {
		this.milestoneCount = milestoneCount;
	}

	public static MilestoneCountDto of(Integer milestoneCount) {
		return new MilestoneCountDto(milestoneCount);
	}

}
