package codesquad.backend.issuetracker.issue.presentation.dto;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;

@Getter
public class IssueDetailDto {

	private Long id;
	private String title;
	private String content;
	private LocalDateTime createdAt;
	private List<IssueLabelDto> labels;
	private IssueMilestoneDto milestone;
	private UserDto author;
	private List<UserDto> assignees;
	private List<IssueCommentDto> comments;
}
