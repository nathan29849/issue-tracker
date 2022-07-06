package codesquad.backend.issuetracker.issue.domain;

import codesquad.backend.issuetracker.label.domain.Label;
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

	@ManyToOne(fetch = FetchType.LAZY)
	private Issue issue;

	@ManyToOne(fetch = FetchType.LAZY)
	private Label label;

	public IssueLabel(Issue issue, Label label) {
		this.issue = issue;
		this.label = label;
	}
}
