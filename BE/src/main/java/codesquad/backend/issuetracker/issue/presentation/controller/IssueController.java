package codesquad.backend.issuetracker.issue.presentation.controller;

import codesquad.backend.issuetracker.issue.application.IssueService;
import codesquad.backend.issuetracker.issue.presentation.dto.FilterCondition;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueAssigneeEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueContentEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueCreateRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueLabelEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueMilestoneEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueStatusEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueTitleEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueDetailResponse;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueIdResponse;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueStatusResponse;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssuesResponse;
import io.swagger.v3.oas.annotations.Operation;
import javax.servlet.http.HttpServletRequest;
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
		return issueService.findDetailById(id);
	}

	@Operation(summary = "이슈 목록 전체 조회")
	@GetMapping
	public IssuesResponse retrieveIssues(
		FilterCondition condition
	){
		return issueService.findByFilter(condition);
	}

	@Operation(summary = "이슈 작성")
	@PostMapping
	public IssueIdResponse create(
		HttpServletRequest request,
		@RequestBody IssueCreateRequest issueCreateRequest
	){
		Long userId = (Long) request.getAttribute("userId");
		return issueService.add(userId, issueCreateRequest);
	}

	@Operation(summary = "이슈 제목 편집")
	@PatchMapping("/{id}/title")
	public IssueDetailResponse editTitle(
		@PathVariable Long id,
		@RequestBody IssueTitleEditRequest request
	) {
		return issueService.editTitle(id, request.getTitle());
	}

	@Operation(summary = "이슈 내용 편집")
	@PatchMapping("/{id}/content")
	public IssueDetailResponse editContent(
		@PathVariable Long id,
		@RequestBody IssueContentEditRequest request
	) {
		return issueService.editContent(id, request.getContent());
	}

	@Operation(summary = "이슈 마일스톤 편집")
	@PatchMapping("/{id}/milestone")
	public IssueDetailResponse editMilestone(
		@PathVariable Long id,
		@RequestBody IssueMilestoneEditRequest request
	) {
		return issueService.editMilestone(id, request.getMilestoneId());
	}

	@Operation(summary = "이슈 라벨 편집")
	@PatchMapping("/{id}/label")
	public IssueDetailResponse editLabel(
		@PathVariable Long id,
		@RequestBody IssueLabelEditRequest issueLabelEditRequest
	) {
		return issueService.editLabel(id, issueLabelEditRequest);
	}

	@Operation(summary = "이슈 assignee 편집")
	@PatchMapping("/{id}/assignee")
	public IssueDetailResponse editAssignee(
		@PathVariable Long id,
		@RequestBody IssueAssigneeEditRequest issueAssigneeEditRequest
	) {
		return issueService.editAssignee(id, issueAssigneeEditRequest);
	}

	@Operation(summary = "이슈 삭제")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> remove(
		@PathVariable Long id
	) {
		issueService.remove(id);
		return ResponseEntity.ok().build();
	}

	@Operation(summary = "이슈 상태 변경")
	@PatchMapping("/{id}/status")
	public IssueStatusResponse editStatus(
		@PathVariable(name = "id") Long issueId,
		HttpServletRequest request,
		@RequestBody IssueStatusEditRequest issueStatusEditRequest
	) {
		Long userId = (Long) request.getAttribute("userId");
		return issueService.editStatus(issueId, userId, issueStatusEditRequest);
	}

}
