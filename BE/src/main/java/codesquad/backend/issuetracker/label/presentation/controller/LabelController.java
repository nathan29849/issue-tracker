package codesquad.backend.issuetracker.label.presentation.controller;

import codesquad.backend.issuetracker.label.application.LabelService;
import codesquad.backend.issuetracker.label.presentation.dto.response.LabelCountResponse;
import codesquad.backend.issuetracker.label.presentation.dto.request.LabelCreateRequest;
import codesquad.backend.issuetracker.label.presentation.dto.LabelDto;
import codesquad.backend.issuetracker.label.presentation.dto.request.LabelEditRequest;
import codesquad.backend.issuetracker.label.presentation.dto.response.LabelsResponse;
import io.swagger.v3.oas.annotations.Operation;
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

@RequiredArgsConstructor
@RequestMapping("/labels")
@RestController
public class LabelController {

	private final LabelService labelService;

	@Operation(summary = "라벨 전체 조회")
	@GetMapping
	public LabelsResponse retrieveLabels() {
		return labelService.findAll();
	}

	@Operation(summary = "라벨 개수 조회")
	@GetMapping("/count")
	public LabelCountResponse retrieveCount() {
		return labelService.count();
	}

	@Operation(summary = "라벨 생성")
	@PostMapping
	public ResponseEntity<Void> create(
		@RequestBody LabelCreateRequest labelCreateRequest
		){
		return null;
	}

	@Operation(summary = "라벨 수정", description = "일부만 수정이 가능합니다.")
	@PatchMapping("/{id}")
	public LabelDto edit(
		@PathVariable Long id,
		@RequestBody LabelEditRequest labelEditRequest
	) {
		return null;
	}

	@Operation(summary = "라벨 삭제")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remove(
		@PathVariable Long id
	) {
		return null;
	}
}
