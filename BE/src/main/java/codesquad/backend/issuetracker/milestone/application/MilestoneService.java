package codesquad.backend.issuetracker.milestone.application;

import codesquad.backend.issuetracker.milestone.infrastructure.MilestoneRepository;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneDto;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestonesResponseDto;
import java.time.LocalDate;
import java.time.chrono.ChronoLocalDate;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class MilestoneService {

	private final MilestoneRepository milestoneRepository;

	@Transactional(readOnly = true)
	public MilestonesResponseDto findAllByDueDate(LocalDate now) {
		List<MilestoneDto> milestones = milestoneRepository.findAll()
			.stream()
			.map(MilestoneDto::createBy)
			.collect(Collectors.toList());

		List<MilestoneDto> currentMilestones = milestones.stream()
			.filter(m -> m.getDueDate().isBefore(now))
			.collect(Collectors.toList());

		List<MilestoneDto> expiredMilestones = milestones.stream()
			.filter(m -> m.getDueDate().isAfter(now))
			.collect(Collectors.toList());

		return MilestonesResponseDto.of(currentMilestones, expiredMilestones);
	}
}
