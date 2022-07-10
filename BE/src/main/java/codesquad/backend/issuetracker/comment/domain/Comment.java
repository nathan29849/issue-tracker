package codesquad.backend.issuetracker.comment.domain;

import codesquad.backend.issuetracker.common.domain.BaseEntity;
import codesquad.backend.issuetracker.issue.domain.Issue;
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
public class Comment extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String content;

	@ManyToOne(fetch = FetchType.LAZY)
	private Issue issue;

	@ManyToOne(fetch = FetchType.LAZY)
	private User author;

	public Comment(String content, Issue issue, User author) {
		this.content = content;
		this.issue = issue;
		this.author = author;
	}
}
