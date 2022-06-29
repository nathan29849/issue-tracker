package codesquad.backend.issuetracker.milestone.presentation.dto.response;

import lombok.Getter;

@Getter
public class MilestoneCountResponse {

	private Integer milestoneCount;

	public MilestoneCountResponse(Integer milestoneCount) {
		this.milestoneCount = milestoneCount;
	}

	public static MilestoneCountResponse of(Integer milestoneCount) {
		return new MilestoneCountResponse(milestoneCount);
	}

}
