package codesquad.backend.issuetracker.issue.presentation.dto.response;

import codesquad.backend.issuetracker.comment.presentation.dto.CommentDto;
import codesquad.backend.issuetracker.issue.presentation.dto.UserDto;
import codesquad.backend.issuetracker.label.presentation.dto.LabelDto;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneDto;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;

@Getter
public class IssueDetailResponse {

	private Long id;
	private String title;
	private String content;
	private LocalDateTime createdAt;
	private List<LabelDto> labels;
	private MilestoneDto milestone;
	private UserDto author;
	private List<UserDto> assignees;
	private List<CommentDto> comments;
}
