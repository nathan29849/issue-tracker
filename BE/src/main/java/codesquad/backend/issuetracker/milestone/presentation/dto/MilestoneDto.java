package codesquad.backend.issuetracker.milestone.presentation.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class MilestoneDto {

	private Long id;
	private String title;
	private String description;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	private LocalDate dueDate;
	private Integer progressRate;

}
