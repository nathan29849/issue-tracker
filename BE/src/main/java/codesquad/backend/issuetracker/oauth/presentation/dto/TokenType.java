package codesquad.backend.issuetracker.oauth.presentation.dto;

import lombok.Getter;

@Getter
public enum TokenType {
	ACCESS("access_token", TokenType.ACCESS_EXPIRED_SECOND),
	REFRESH("refresh_token", TokenType.REFRESH_EXPIRED_SECOND);

	private static final int ACCESS_EXPIRED_SECOND = 60 * 60;
	private static final int REFRESH_EXPIRED_SECOND = 24 * 60 * 60;

	private final String type;
	private final int time;

	TokenType(String type, int time) {
		this.type = type;
		this.time = time;
	}
}
