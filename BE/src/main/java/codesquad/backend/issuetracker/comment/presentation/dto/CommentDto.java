package codesquad.backend.issuetracker.comment.presentation.dto;

import codesquad.backend.issuetracker.comment.domain.Comment;
import codesquad.backend.issuetracker.user.domain.User;
import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class CommentDto {

	private String content;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	private User author;

	public CommentDto(String content, LocalDateTime createdAt, LocalDateTime updatedAt,
		User author) {
		this.content = content;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.author = author;
	}

	public static  CommentDto createBy(Comment comment) {
		return new CommentDto(comment.getContent(),
			comment.getCreatedAt(), comment.getUpdatedAt(),
			comment.getAuthor());
	}
}
