package codesquad.backend.issuetracker.label.presentation.dto;

import lombok.Getter;

@Getter
public class LabelCreateRequest {

	private String title;
	private String description;
	private String backgroundColor;
	private TextColor textColor;
}
