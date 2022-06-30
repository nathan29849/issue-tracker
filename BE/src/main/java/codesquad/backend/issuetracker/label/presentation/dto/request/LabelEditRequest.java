package codesquad.backend.issuetracker.label.presentation.dto.request;

import codesquad.backend.issuetracker.label.presentation.dto.TextColor;
import lombok.Getter;

@Getter
public class LabelEditRequest {

	private String title;
	private String backgroundColor;
	private TextColor textColor;
}
