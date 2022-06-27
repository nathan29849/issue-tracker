package codesquad.backend.issuetracker.milestone.presentation.dto;

import java.util.List;
import lombok.Getter;

@Getter
public class MilestonesResponseDto {

	private final List<MilestoneDto> currentMilestones;
	private final List<MilestoneDto> expiredMilestones;
	private final List<MilestoneDto> nullDueDateMilestones;

	public MilestonesResponseDto(
		List<MilestoneDto> currentMilestones,
		List<MilestoneDto> expiredMilestones,
		List<MilestoneDto> nullDueDateMilestones) {
		this.currentMilestones = currentMilestones;
		this.expiredMilestones = expiredMilestones;
		this.nullDueDateMilestones = nullDueDateMilestones;
	}

	public static MilestonesResponseDto of(List<MilestoneDto> currentMilestones,
		List<MilestoneDto> expiredMilestones, List<MilestoneDto> nullDueDateMilestones) {
		return new MilestonesResponseDto(currentMilestones, expiredMilestones, nullDueDateMilestones);
	}
}
