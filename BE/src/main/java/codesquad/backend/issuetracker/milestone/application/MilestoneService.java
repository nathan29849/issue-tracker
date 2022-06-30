package codesquad.backend.issuetracker.milestone.application;

import codesquad.backend.issuetracker.milestone.domain.Milestone;
import codesquad.backend.issuetracker.milestone.infrastructure.MilestoneRepository;
import codesquad.backend.issuetracker.milestone.presentation.dto.response.MilestoneCountResponse;
import codesquad.backend.issuetracker.milestone.presentation.dto.request.MilestoneCreateRequest;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneDto;
import codesquad.backend.issuetracker.milestone.presentation.dto.request.MilestoneEditRequest;
import codesquad.backend.issuetracker.milestone.presentation.dto.response.MilestoneIdResponse;
import codesquad.backend.issuetracker.milestone.presentation.dto.response.MilestonesResponse;
import java.time.LocalDate;
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
	public MilestonesResponse findAllByDueDate(LocalDate now) {
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

		return MilestonesResponse.of(currentMilestones, expiredMilestones, nullDueDateMilestones);
	}

	@Transactional(readOnly = true)
	public MilestoneCountResponse findCount(LocalDate now) {
		return MilestoneCountResponse.of(
			milestoneRepository.countMilestoneByDueDateAfterOrDueDateIsNull(now)
		);
	}

	@Transactional
	public MilestoneIdResponse add(MilestoneCreateRequest milestoneCreateRequest) {
		Milestone milestone = Milestone.createBy(
			milestoneCreateRequest.getTitle(),
			milestoneCreateRequest.getDescription(),
			milestoneCreateRequest.getDueDate());

		Milestone savedMilestone = milestoneRepository.save(milestone);
		return new MilestoneIdResponse(savedMilestone.getId());
	}

	@Transactional
	public MilestoneDto edit(Long id, MilestoneEditRequest mileStoneEditRequest){
		Milestone milestone = findById(id);

		milestone.edit(mileStoneEditRequest.getTitle(),
			mileStoneEditRequest.getDescription(),
			mileStoneEditRequest.getDueDate());

		return MilestoneDto.createBy(milestone);
	}

	@Transactional
	public void remove(Long id) {
		Milestone milestone = findById(id);
		milestoneRepository.delete(milestone);
	}

	public MilestoneDto find(Long id) {
		Milestone milestone = findById(id);
		return MilestoneDto.createBy(milestone);
	}

	private Milestone findById(Long id) {
		return milestoneRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("해당 ID의 마일스톤이 존재하지 않습니다."));
	}
}
