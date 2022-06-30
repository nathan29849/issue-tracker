package codesquad.backend.issuetracker.label.domain;

import codesquad.backend.issuetracker.label.presentation.dto.TextColor;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;


@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Label {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;
	private String description;
	private String backgroundColor;

	@Enumerated(value = EnumType.STRING)
	private TextColor textColor;

	public Label(String title, String description, String backgroundColor,
		TextColor textColor) {
		this.title = title;
		this.description = description;
		this.backgroundColor = backgroundColor;
		this.textColor = textColor;
	}

	public static Label createBy(String title, String description, String backgroundColor, TextColor textColor) {
		return new Label(title, description, backgroundColor, textColor);
	}

	public void edit(String title, String description, String backgroundColor, TextColor textColor) {
		if (title != null) {
			this.title = title;
		}

		if (description != null) {
			this.description = description;
		}

		if (backgroundColor != null) {
			this.backgroundColor = backgroundColor;
		}

		if (textColor != null) {
			this.textColor = textColor;
		}
	}
}
