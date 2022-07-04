package codesquad.backend.issuetracker.issue.domain;

import codesquad.backend.issuetracker.label.presentation.dto.TextColor;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class IssueLabel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;
	private String backgroundColor;
	private TextColor textColor;

	@ManyToOne(fetch = FetchType.LAZY)
	private Issue issue;
}
