package codesquad.backend.issuetracker.milestone.presentation.dto;

import java.util.List;
import lombok.Getter;

@Getter
public class MilestonesResponseDto {

	private final List<MilestoneDto> currentMilestones;
	private final List<MilestoneDto> expiredMilestones;

	public MilestonesResponseDto(
		List<MilestoneDto> currentMilestones,
		List<MilestoneDto> expiredMilestones) {
		this.currentMilestones = currentMilestones;
		this.expiredMilestones = expiredMilestones;
	}

	public static MilestonesResponseDto of(List<MilestoneDto> currentMilestones, List<MilestoneDto> expiredMilestones) {
		return new MilestonesResponseDto(currentMilestones, expiredMilestones);
	}
}
