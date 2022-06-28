package codesquad.backend.issuetracker.milestone.presentation.controller;

import codesquad.backend.issuetracker.milestone.application.MilestoneService;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneEditRequest;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneCountDto;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneCreateRequest;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneDto;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestonesResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import java.time.LocalDate;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/milestones")
@RestController
@RequiredArgsConstructor
public class MilestoneController {

	private final MilestoneService milestoneService;

	@Operation(summary = "마일스톤 전체 조회")
	@GetMapping
	public MilestonesResponseDto retrieveMilestones() {
		return milestoneService.findAllByDueDate(LocalDate.now());
	}

	@Operation(summary = "마일스톤 개수 조회")
	@GetMapping("/count")
	public MilestoneCountDto retrieveCount(){
		return milestoneService.findCount(LocalDate.now());
	}

	@Operation(summary = "마일스톤 생성")
	@PostMapping
	public ResponseEntity<Long> create(
		@RequestBody MilestoneCreateRequest milestoneCreateRequest
	) {
		Long milestoneId = milestoneService.add(milestoneCreateRequest);
		return ResponseEntity.ok().body(milestoneId);
	}

	@Operation(summary = "마일스톤 수정", description = "일부만 수정이 가능합니다.")
	@PatchMapping("/{id}")
	public MilestoneDto editTitle(
		@PathVariable Long id,
		@RequestBody MilestoneEditRequest mileStoneEditRequest
	){
		return milestoneService.edit(id, mileStoneEditRequest);
	}

	@Operation(summary = "마일스톤 삭제")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remove(
		@PathVariable Long id
	){
		return null;
	}

}
