package codesquad.backend.issuetracker.milestone.presentation.dto;

import codesquad.backend.issuetracker.issue.domain.IssueStatus;
import codesquad.backend.issuetracker.milestone.domain.Milestone;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class MilestoneDto {

	private final Long id;
	private final String title;
	private final String description;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	private final LocalDateTime createdAt;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
	private final LocalDateTime updatedAt;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	private final LocalDate dueDate;

	private Integer openIssueCount;
	private Integer closedIssueCount;

	public MilestoneDto(Long id, String title, String description, LocalDateTime createdAt,
		LocalDateTime updatedAt, LocalDate dueDate,
		Integer openIssueCount, Integer closedIssueCount) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.dueDate = dueDate;
		this.openIssueCount = openIssueCount;
		this.closedIssueCount = closedIssueCount;
	}

	public static MilestoneDto createBy(Milestone milestone) {
		if (milestone == null){
			return null;
		}

		Integer openIssueCount = countOpenIssue(milestone);
		return new MilestoneDto(
			milestone.getId(), milestone.getTitle(), milestone.getDescription(),
			milestone.getCreatedAt(), milestone.getUpdatedAt(), milestone.getDueDate(),
			openIssueCount, countClosedIssue(milestone, openIssueCount));
	}

	private static Integer countOpenIssue(Milestone milestone) {
		return (int) milestone.getIssues()
			.stream().filter(i -> i.getStatus() == IssueStatus.OPEN).count();
	}

	private static Integer countClosedIssue(Milestone milestone, Integer openIssueCount) {
		return milestone.getIssues().size() - openIssueCount;
	}

}
