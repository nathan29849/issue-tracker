package codesquad.backend.issuetracker.issue.presentation.dto;

import codesquad.backend.issuetracker.issue.domain.IssueStatus;
import codesquad.backend.issuetracker.label.presentation.dto.LabelDto;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneDto;
import java.time.LocalDateTime;
import java.util.List;
import lombok.Getter;

@Getter
public class IssueDto {

	private Long id;
	private String title;
	private LocalDateTime createdAt;
	private IssueStatus status;
	private List<LabelDto> labels;
	private MilestoneDto milestone;
	private UserDto author;
	private List<UserDto> assignees;

}
