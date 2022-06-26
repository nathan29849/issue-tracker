package codesquad.backend.issuetracker.issue.presentation.dto;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;

@Getter
public class SingleIssueDto {

	private Long id;
	private String title;
	private LocalDateTime createdAt;
	private IssueStatus status;
	private List<IssueLabelDto> labels;
	private IssueMilestoneDto milestone;
	private UserDto author;
	private List<UserDto> assignees;

}
