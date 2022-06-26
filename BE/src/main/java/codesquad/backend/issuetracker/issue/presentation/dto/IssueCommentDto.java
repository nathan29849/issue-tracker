package codesquad.backend.issuetracker.issue.presentation.dto;

import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class IssueCommentDto {

	private Long id;
	private String content;
	private LocalDateTime createdAt;
	private UserDto author;
}
