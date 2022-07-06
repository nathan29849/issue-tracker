package codesquad.backend.issuetracker.issue.presentation.dto;

import codesquad.backend.issuetracker.issue.domain.IssueStatus;
import codesquad.backend.issuetracker.label.domain.Label;
import codesquad.backend.issuetracker.label.presentation.dto.LabelDto;
import codesquad.backend.issuetracker.milestone.domain.Milestone;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneDto;
import codesquad.backend.issuetracker.user.domain.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;

@Getter
public class IssueDto {

	private Long id;
	private String title;
	private String content;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime createdAt;

	private IssueStatus status;
	private List<Label> labels;
	private Milestone milestone;
	private User author;
	private List<User> assignees;

}
