package codesquad.backend.issuetracker.label.presentation.dto;

import codesquad.backend.issuetracker.label.domain.Label;
import lombok.Getter;

@Getter
public class LabelDto {

	private Long id;
	private String title;
	private String description;
	private String backgroundColor;
	private TextColor textColor;

	public LabelDto(Long id, String title, String description, String backgroundColor,
		TextColor textColor) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.backgroundColor = backgroundColor;
		this.textColor = textColor;
	}

	public static LabelDto createBy(Label label) {
		return new LabelDto(label.getId(), label.getTitle(), label.getDescription(),
			label.getBackgroundColor(), label.getTextColor());
	}
}
