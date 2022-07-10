package codesquad.backend.issuetracker.issue.domain;

import codesquad.backend.issuetracker.user.domain.User;
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
public class IssueAssignee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	private User assignee;

	@ManyToOne(fetch = FetchType.LAZY)
	private Issue issue;

	public IssueAssignee(User assignee, Issue issue) {
		this.assignee = assignee;
		this.issue = issue;
	}
}
