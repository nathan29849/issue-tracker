package codesquad.backend.issuetracker.user.domain;

import codesquad.backend.issuetracker.issue.domain.Issue;
import codesquad.backend.issuetracker.issue.domain.IssueAssignee;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.ToString;

@Getter
@Entity
@ToString
@NoArgsConstructor
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String authId;
	private String username;
	private String nodeId;
	private String imageUrl;

	@OneToMany(mappedBy = "author", cascade = CascadeType.PERSIST, orphanRemoval = true)
	private List<Issue> issues = new ArrayList<>();

	@OneToMany(mappedBy = "assignee", cascade = CascadeType.PERSIST, orphanRemoval = true)
	private List<IssueAssignee> assignees = new ArrayList<>();


	public User(String authId, String username, String nodeId, String imageUrl) {
		this.authId = authId;
		this.username = username;
		this.nodeId = nodeId;
		this.imageUrl = imageUrl;
	}

	public User update(@NonNull User user) {
		/*
		update 시에도 검증 필요
		 */
		this.authId = user.getAuthId();
		this.username = user.getUsername();
		this.imageUrl = user.getImageUrl();
		return this;
	}
}
