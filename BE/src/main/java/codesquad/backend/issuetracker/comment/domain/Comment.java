package codesquad.backend.issuetracker.comment.domain;

import codesquad.backend.issuetracker.issue.domain.Issue;
import codesquad.backend.issuetracker.user.domain.User;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String content;

	@ManyToOne(fetch = FetchType.LAZY)
	private Issue issue;

	@ManyToOne(fetch = FetchType.LAZY)
	private User user;
}
