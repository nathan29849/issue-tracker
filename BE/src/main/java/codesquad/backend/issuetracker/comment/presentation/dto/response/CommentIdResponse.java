package codesquad.backend.issuetracker.comment.presentation.dto.response;

import lombok.Getter;

@Getter
public class CommentIdResponse {

	private Long id;

	public CommentIdResponse(Long id) {
		this.id = id;
	}

	public static CommentIdResponse createBy(Long id) {
		return new CommentIdResponse(id);
	}
}
