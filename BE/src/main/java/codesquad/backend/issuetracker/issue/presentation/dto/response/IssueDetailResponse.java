package codesquad.backend.issuetracker.issue.presentation.dto.response;

import codesquad.backend.issuetracker.issue.presentation.dto.IssueCommentDto;
import codesquad.backend.issuetracker.issue.presentation.dto.IssueLabelDto;
import codesquad.backend.issuetracker.issue.presentation.dto.IssueMilestoneDto;
import codesquad.backend.issuetracker.issue.presentation.dto.UserDto;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;

@Getter
public class IssueDetailResponse {

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
