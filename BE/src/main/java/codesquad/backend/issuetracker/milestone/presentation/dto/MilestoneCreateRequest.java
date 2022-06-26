package codesquad.backend.issuetracker.milestone.presentation.dto;

import java.time.LocalDate;
import lombok.Getter;

@Getter
public class MilestoneCreateRequest {

	private String title;
	private String description; // optional
	private LocalDate dueDate; // optional
}
