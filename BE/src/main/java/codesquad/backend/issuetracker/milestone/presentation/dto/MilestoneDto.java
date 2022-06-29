package codesquad.backend.issuetracker.milestone.presentation.dto;

import codesquad.backend.issuetracker.issue.presentation.dto.IssueStatus;
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

	private final Integer progressRate;

	public MilestoneDto(Long id, String title, String description, LocalDateTime createdAt,
		LocalDateTime updatedAt, LocalDate dueDate, Integer progressRate) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.dueDate = dueDate;
		this.progressRate = progressRate;
	}

	public static MilestoneDto createBy(Milestone milestone) {
		return new MilestoneDto(
			milestone.getId(), milestone.getTitle(), milestone.getDescription(),
			milestone.getCreatedAt(), milestone.getUpdatedAt(), milestone.getDueDate(),
			calcProgressRate(milestone)
		);
	}

	private static Integer calcProgressRate(Milestone milestone) {
		int issueSize = milestone.getIssues().size();
		int openIssueSize = (int) milestone.getIssues()
			.stream().filter(i -> i.getStatus() == IssueStatus.OPEN).count();
		return (issueSize == 0) ? 0 : openIssueSize/issueSize;
	}

}
