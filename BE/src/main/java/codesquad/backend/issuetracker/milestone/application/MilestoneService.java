package codesquad.backend.issuetracker.milestone.application;

import codesquad.backend.issuetracker.milestone.domain.Milestone;
import codesquad.backend.issuetracker.milestone.infrastructure.MilestoneRepository;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneCountDto;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneCreateRequest;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneDto;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneEditRequest;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneIdDto;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestonesResponseDto;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
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
			.filter(m -> m.getDueDate() != null)
			.filter(m -> m.getDueDate().isAfter(now))
			.collect(Collectors.toList());

		List<MilestoneDto> expiredMilestones = milestones.stream()
			.filter(m -> m.getDueDate() != null)
			.filter(m -> m.getDueDate().isBefore(now))
			.collect(Collectors.toList());

		List<MilestoneDto> nullDueDateMilestones = milestones.stream()
			.filter(m -> m.getDueDate() == null)
			.collect(Collectors.toList());

		return MilestonesResponseDto.of(currentMilestones, expiredMilestones, nullDueDateMilestones);
	}

	@Transactional(readOnly = true)
	public MilestoneCountDto findCount(LocalDate now) {
		return MilestoneCountDto.of(
			milestoneRepository.countMilestoneByDueDateAfterOrDueDateIsNull(now)
		);
	}

	@Transactional
	public MilestoneIdDto add(MilestoneCreateRequest milestoneCreateRequest) {
		Milestone milestone = Milestone.createBy(
			milestoneCreateRequest.getTitle(),
			milestoneCreateRequest.getDescription(),
			milestoneCreateRequest.getDueDate());

		Milestone savedMilestone = milestoneRepository.save(milestone);
		return new MilestoneIdDto(savedMilestone.getId());
	}

	@Transactional
	public MilestoneDto edit(Long id, MilestoneEditRequest mileStoneEditRequest){
		Milestone milestone = milestoneRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("해당 ID의 마일스톤이 존재하지 않습니다."));

		milestone.edit(mileStoneEditRequest.getTitle(),
			mileStoneEditRequest.getDescription(),
			mileStoneEditRequest.getDueDate());

		return MilestoneDto.createBy(milestone);
	}

	@Transactional
	public void remove(Long id) {
		Milestone milestone = milestoneRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("해당 ID의 마일스톤이 존재하지 않습니다."));
		milestoneRepository.delete(milestone);
	}
}
