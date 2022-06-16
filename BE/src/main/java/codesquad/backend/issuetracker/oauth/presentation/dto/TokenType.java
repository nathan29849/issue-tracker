package codesquad.backend.issuetracker.oauth.presentation.dto;

import lombok.Getter;

@Getter
public enum TokenType {
	ACCESS("access_token"),
	REFRESH("refresh_token");

	private final String type;

	TokenType(String type) {
		this.type = type;
	}
}
