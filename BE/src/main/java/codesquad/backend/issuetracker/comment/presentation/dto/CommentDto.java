package codesquad.backend.issuetracker.comment.presentation.dto;

import codesquad.backend.issuetracker.user.domain.User;
import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class CommentDto {

	private String content;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	private User author;
}
