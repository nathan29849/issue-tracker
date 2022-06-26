package codesquad.backend.issuetracker.issue.presentation.controller;

import codesquad.backend.issuetracker.issue.presentation.dto.IssueAssigneeEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.IssueCreateRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.FilterCondition;
import codesquad.backend.issuetracker.issue.presentation.dto.IssueDetailDto;
import codesquad.backend.issuetracker.issue.presentation.dto.IssueLabelEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.IssuesResponseDto;
import io.swagger.v3.oas.annotations.Operation;
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
public class IssueController {

	@Operation(summary = "이슈 상세 정보 조회")
	@GetMapping("/{id}")
	public IssueDetailDto retrieveDetail(
		@PathVariable Long id
	){
		return null;
	}

	@Operation(summary = "이슈 목록 전체 조회")
	@GetMapping
	public IssuesResponseDto retrieveIssues(
		FilterCondition condition
	){
		return null;
	}

	@Operation(summary = "이슈 작성")
	@PostMapping
	public ResponseEntity<Void> create(
		@RequestBody IssueCreateRequest issueCreateRequest
	){
		return null;
	}

	@Operation(summary = "이슈 제목 편집")
	@PatchMapping("/{id}/title")
	public IssueDetailDto editTitle(
		@PathVariable Long id,
		@RequestBody String title
	) {
		return null;
	}

	@Operation(summary = "이슈 내용 편집")
	@PatchMapping("/{id}/content")
	public IssueDetailDto editContent(
		@PathVariable Long id,
		@RequestBody String content
	) {
		return null;
	}

	@Operation(summary = "이슈 마일스톤 편집")
	@PatchMapping("/{id}/milestone")
	public IssueDetailDto editMilestone(
		@PathVariable Long id,
		@RequestBody(required = false) Long milestoneId
	) {
		return null;
	}

	@Operation(summary = "이슈 라벨 편집")
	@PatchMapping("/{id}/label")
	public IssueDetailDto editLabel(
		@PathVariable Long id,
		@RequestBody(required = false) IssueLabelEditRequest issueLabelEditRequest
	) {
		return null;
	}

	@Operation(summary = "이슈 assignee 편집")
	@PatchMapping("/{id}/assignee")
	public IssueDetailDto editAssignee(
		@PathVariable Long id,
		@RequestBody(required = false) IssueAssigneeEditRequest issueAssigneeEditRequest
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
