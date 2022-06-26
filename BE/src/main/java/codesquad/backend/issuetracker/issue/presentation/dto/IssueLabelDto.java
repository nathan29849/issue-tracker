package codesquad.backend.issuetracker.issue.presentation.dto;

import codesquad.backend.issuetracker.label.presentation.dto.TextColor;
import lombok.Getter;

@Getter
public class IssueLabelDto {

	private Long id;
	private String title;
	private String backgroundColor;
	private TextColor textColor;
}
