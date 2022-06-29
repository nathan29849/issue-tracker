package codesquad.backend.issuetracker.milestone.presentation.dto.response;

import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneDto;
import java.util.List;
import lombok.Getter;

@Getter
public class MilestonesResponse {

	private final List<MilestoneDto> currentMilestones;
	private final List<MilestoneDto> expiredMilestones;
	private final List<MilestoneDto> nullDueDateMilestones;

	public MilestonesResponse(
		List<MilestoneDto> currentMilestones,
		List<MilestoneDto> expiredMilestones,
		List<MilestoneDto> nullDueDateMilestones) {
		this.currentMilestones = currentMilestones;
		this.expiredMilestones = expiredMilestones;
		this.nullDueDateMilestones = nullDueDateMilestones;
	}

	public static MilestonesResponse of(List<MilestoneDto> currentMilestones,
		List<MilestoneDto> expiredMilestones, List<MilestoneDto> nullDueDateMilestones) {
		return new MilestonesResponse(currentMilestones, expiredMilestones, nullDueDateMilestones);
	}
}
