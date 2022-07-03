package codesquad.backend.issuetracker.issue.presentation.controller;

import codesquad.backend.issuetracker.issue.application.IssueService;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueAssigneeEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueCreateRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.FilterCondition;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueDetailResponse;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueIdResponse;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueLabelEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssuesResponse;
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

@RequestMapping("/issues")
@RestController
@RequiredArgsConstructor
public class IssueController {

	private final IssueService issueService;

	@Operation(summary = "이슈 상세 정보 조회")
	@GetMapping("/{id}")
	public IssueDetailResponse retrieveDetail(
		@PathVariable Long id
	){
		return issueService.findById(id);
	}

	@Operation(summary = "이슈 목록 전체 조회")
	@GetMapping
	public IssuesResponse retrieveIssues(
		FilterCondition condition
	){
		return null;
	}

	@Operation(summary = "이슈 작성")
	@PostMapping
	public IssueIdResponse create(
		@RequestBody IssueCreateRequest issueCreateRequest
	){
		return null;
	}

	@Operation(summary = "이슈 제목 편집")
	@PatchMapping("/{id}/title")
	public IssueDetailResponse editTitle(
		@PathVariable Long id,
		@RequestBody String title
	) {
		return null;
	}

	@Operation(summary = "이슈 내용 편집")
	@PatchMapping("/{id}/content")
	public IssueDetailResponse editContent(
		@PathVariable Long id,
		@RequestBody String content
	) {
		return null;
	}

	@Operation(summary = "이슈 마일스톤 편집")
	@PatchMapping("/{id}/milestone")
	public IssueDetailResponse editMilestone(
		@PathVariable Long id,
		@RequestBody Long milestoneId
	) {
		return null;
	}

	@Operation(summary = "이슈 라벨 편집")
	@PatchMapping("/{id}/label")
	public IssueDetailResponse editLabel(
		@PathVariable Long id,
		@RequestBody IssueLabelEditRequest issueLabelEditRequest
	) {
		return null;
	}

	@Operation(summary = "이슈 assignee 편집")
	@PatchMapping("/{id}/assignee")
	public IssueDetailResponse editAssignee(
		@PathVariable Long id,
		@RequestBody IssueAssigneeEditRequest issueAssigneeEditRequest
	) {
		return null;
	}

	@Operation(summary = "이슈 삭제")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remove(
		@PathVariable Long id
	) {
		return null;
	}

}
