package codesquad.backend.issuetracker.issue.presentation.dto.response;

import codesquad.backend.issuetracker.comment.presentation.dto.CommentDto;
import codesquad.backend.issuetracker.issue.domain.Issue;
import codesquad.backend.issuetracker.issue.domain.IssueStatus;
import codesquad.backend.issuetracker.issue.presentation.dto.UserDto;
import codesquad.backend.issuetracker.label.presentation.dto.LabelDto;
import codesquad.backend.issuetracker.milestone.presentation.dto.MilestoneDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Getter;

@Getter
public class IssueDetailResponse {

	private Long id;
	private String title;
	private String content;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDateTime createdAt;

	private List<LabelDto> labels;
	private MilestoneDto milestone;
	private UserDto author;
	private List<UserDto> assignees;
	private List<CommentDto> comments;
	private IssueStatus issueStatus;

	public IssueDetailResponse(Long id, String title, String content, LocalDateTime createdAt,
		List<LabelDto> labels,
		MilestoneDto milestone, UserDto author,
		List<UserDto> assignees,
		List<CommentDto> comments, IssueStatus issueStatus) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.createdAt = createdAt;
		this.labels = labels;
		this.milestone = milestone;
		this.author = author;
		this.assignees = assignees;
		this.comments = comments;
		this.issueStatus = issueStatus;
	}

	public static IssueDetailResponse createBy(Issue issue) {
		List<LabelDto> labels = issue.getLabels().stream()
			.map(LabelDto::createBy)
			.collect(Collectors.toList());

		List<UserDto> assignees = issue.getAssignees().stream()
			.map(UserDto::createBy)
			.collect(Collectors.toList());

		List<CommentDto> comments = issue.getComments().stream()
			.map(CommentDto::createBy)
			.collect(Collectors.toList());

		return new IssueDetailResponse(
			issue.getId(), issue.getTitle(), issue.getContent(),
			issue.getCreatedAt(), labels,
			MilestoneDto.createBy(issue.getMilestone()),
			UserDto.createBy(issue.getAuthor()),
			assignees, comments, issue.getStatus()
		);
	}

}
