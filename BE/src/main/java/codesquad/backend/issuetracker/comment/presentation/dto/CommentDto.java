package codesquad.backend.issuetracker.comment.presentation.dto;

import codesquad.backend.issuetracker.comment.domain.Comment;
import codesquad.backend.issuetracker.issue.presentation.dto.UserDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class CommentDto {

	private Long id;
	private String content;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime createdAt;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime updatedAt;

	private UserDto author;

	public CommentDto(Long id, String content, LocalDateTime createdAt, LocalDateTime updatedAt,
		UserDto author) {
		this.id = id;
		this.content = content;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.author = author;
	}

	public static  CommentDto createBy(Comment comment) {
		return new CommentDto(comment.getId(), comment.getContent(),
			comment.getCreatedAt(), comment.getUpdatedAt(),
			UserDto.createBy(comment.getAuthor()));
	}
}
