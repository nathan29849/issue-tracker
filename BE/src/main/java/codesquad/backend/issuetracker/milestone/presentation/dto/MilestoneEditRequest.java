package codesquad.backend.issuetracker.milestone.presentation.dto;

import java.time.LocalDate;
import lombok.Getter;

@Getter
public class MilestoneEditRequest {

	private String title;
	private String description;
	private LocalDate dueDate;
}
