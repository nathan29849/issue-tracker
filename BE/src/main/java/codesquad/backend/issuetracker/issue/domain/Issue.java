package codesquad.backend.issuetracker.issue.domain;

import codesquad.backend.issuetracker.comment.domain.Comment;
import codesquad.backend.issuetracker.common.domain.BaseEntity;
import codesquad.backend.issuetracker.milestone.domain.Milestone;
import codesquad.backend.issuetracker.user.domain.User;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
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
import javax.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Issue extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String title;

	private String content;

	@Enumerated(EnumType.STRING)
	private IssueStatus status;

	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	private User author;

//	@JoinColumn 없애도 자동으로 외래키를 통해 연관관계를 맺는다.
	@ManyToOne(fetch = FetchType.LAZY)
	private Milestone milestone;

	@OneToMany(mappedBy = "issue", cascade = CascadeType.PERSIST, orphanRemoval = true)
	private List<IssueAssignee> assignees = new ArrayList<>();

	@OneToMany(mappedBy = "issue", cascade = CascadeType.PERSIST, orphanRemoval = true)
	private List<IssueLabel> labels = new ArrayList<>();

	@OneToMany(mappedBy = "issue", cascade = CascadeType.ALL)
	private List<Comment> comments = new ArrayList<>();

	public Issue(String title, String content,
		IssueStatus status, User author) {
		this.title = title;
		this.content = content;
		this.status = status;
		this.author = author;
	}

	public static Issue createBy(String title, String content, User author) {
		return new Issue(title, content, IssueStatus.OPEN, author);
	}

	public void updateTitle(String title) {
		this.title = title;
	}

	public void updateContent(String content){
		this.content = content;
	}

	public void updateMilestone(Milestone milestone) {
		this.milestone = milestone;
	}

	public void updateAssignees(List<IssueAssignee> assignees) {
		this.assignees.clear();
		this.assignees.addAll(assignees);
	}

	public void updateLabels(List<IssueLabel> labels) {
		this.labels.clear();
		this.labels.addAll(labels);
	}

	public void updateComments(List<Comment> comments) {
		this.comments.clear();
		this.comments.addAll(comments);
	}

	public void updateStatus(IssueStatus status) {
		this.status = status;
	}
}
