package codesquad.backend.issuetracker.label.presentation.dto;

import lombok.Getter;

@Getter
public class LabelEditRequest {

	private String title;
	private String backgroundColor;
	private TextColor textColor;
}
