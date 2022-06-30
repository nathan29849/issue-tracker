package codesquad.backend.issuetracker.issue.domain;

import codesquad.backend.issuetracker.issue.presentation.dto.IssueStatus;
import codesquad.backend.issuetracker.milestone.domain.Milestone;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import lombok.Getter;

@Getter
@Entity
public class Issue {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@JoinColumn
	@ManyToOne(fetch = FetchType.LAZY)
	private Milestone milestone;

	@Enumerated(EnumType.STRING)
	private IssueStatus status;
}
