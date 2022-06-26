package codesquad.backend.issuetracker.comment.presentation.controller;

import codesquad.backend.issuetracker.comment.presentation.dto.CommentCreateRequest;
import codesquad.backend.issuetracker.comment.presentation.dto.CommentDto;
import codesquad.backend.issuetracker.comment.presentation.dto.CommentEditRequest;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/issues")
@RestController
public class CommentController {

	@Operation(summary = "코멘트 생성")
	@PostMapping("/{id}/comments")
	public CommentDto create(
		@PathVariable Long id,
		@RequestBody CommentCreateRequest commentCreateRequest
	) {
		return null;
	}

	@Operation(summary = "코멘트 수정")
	@PatchMapping("{issueId}/comments/{commentId}")
	public CommentDto edit(
		@PathVariable Long issueId,
		@PathVariable Long commentId,
		@RequestBody CommentEditRequest commentEditRequest
	){
		return null;
	}

	@Operation(summary = "코멘트 삭제")
	@DeleteMapping(("{issueId}/comments/{commentId}"))
	public ResponseEntity<Void> delete(
		@PathVariable Long issueId,
		@PathVariable Long commentId
	){
		return null;
	}

	// TODO Reaction 생성, 조회 추가 예정

}
