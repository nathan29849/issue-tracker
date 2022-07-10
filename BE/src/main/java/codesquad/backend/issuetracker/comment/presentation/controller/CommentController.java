package codesquad.backend.issuetracker.comment.presentation.controller;

import codesquad.backend.issuetracker.comment.application.CommentService;
import codesquad.backend.issuetracker.comment.presentation.dto.request.CommentCreateRequest;
import codesquad.backend.issuetracker.comment.presentation.dto.CommentDto;
import codesquad.backend.issuetracker.comment.presentation.dto.request.CommentEditRequest;
import codesquad.backend.issuetracker.comment.presentation.dto.response.CommentIdResponse;
import io.swagger.v3.oas.annotations.Operation;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/issues")
@RestController
public class CommentController {

	private final CommentService commentService;

	@Operation(summary = "코멘트 생성")
	@PostMapping("/{id}/comments")
	public CommentIdResponse create(
		@PathVariable(name = "id") Long issueId,
		@RequestBody CommentCreateRequest commentCreateRequest,
		HttpServletRequest request
	) {
		Long userId = (Long) request.getAttribute("userId");
		return commentService.add(issueId, userId, commentCreateRequest);
	}

	@Operation(summary = "코멘트 수정")
	@PatchMapping("{issueId}/comments/{commentId}")
	public CommentDto edit(
		@PathVariable Long issueId,
		@PathVariable Long commentId,
		@RequestBody CommentEditRequest commentEditRequest,
		HttpServletRequest request
	){
		Long userId = (Long) request.getAttribute("userId");
		return commentService.editContent(issueId, commentId, userId, commentEditRequest);
	}

	@Operation(summary = "코멘트 삭제")
	@DeleteMapping(("{issueId}/comments/{commentId}"))
	public ResponseEntity<Void> delete(
		@PathVariable Long issueId,
		@PathVariable Long commentId,
		HttpServletRequest request
	){
		Long userId = (Long) request.getAttribute("userId");
		commentService.remove(issueId, commentId, userId);
		return ResponseEntity.ok().build();
	}

	// TODO Reaction 생성, 조회 추가 예정

}
