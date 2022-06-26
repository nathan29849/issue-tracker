package codesquad.backend.issuetracker.issue.presentation.dto;

import lombok.Getter;

@Getter
public class IssueMilestoneDto {

	private Long id;
	private String title;
	private String description;
	private Integer progressRate;

}
