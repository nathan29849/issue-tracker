package codesquad.backend.issuetracker.milestone.presentation.dto;

import codesquad.backend.issuetracker.milestone.domain.Milestone;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class MilestoneDto {

	private final Long id;
	private final String title;
	private final String description;
	private final LocalDateTime createdAt;
	private final LocalDateTime updatedAt;
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
			milestone.getProgressRate()
		);
	}

}
