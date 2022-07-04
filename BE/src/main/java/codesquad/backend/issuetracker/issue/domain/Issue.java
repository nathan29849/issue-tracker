package codesquad.backend.issuetracker.issue.domain;

import codesquad.backend.issuetracker.comment.domain.Comment;
import codesquad.backend.issuetracker.milestone.domain.Milestone;
import codesquad.backend.issuetracker.user.domain.User;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Issue {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String title;

	private String content;

	@Enumerated(EnumType.STRING)
	private IssueStatus status;

	@ManyToOne(fetch = FetchType.LAZY)
	private User user;

//	@JoinColumn 없애도 자동으로 외래키를 통해 연관관계를 맺는다.
	@ManyToOne(fetch = FetchType.LAZY)
	private Milestone milestone;

	@OneToMany(mappedBy = "issue", cascade = CascadeType.PERSIST, orphanRemoval = true)
	private List<IssueAssignee> assignees = new ArrayList<>();

	@OneToMany(mappedBy = "issue", cascade = CascadeType.PERSIST, orphanRemoval = true)
	private List<IssueLabel> labels = new ArrayList<>();

	@OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
	private List<Comment> comments = new ArrayList<>();
}
