package codesquad.backend.issuetracker.milestone.domain;

import codesquad.backend.issuetracker.issue.domain.Issue;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Getter;

@Getter
@Entity
public class Milestone {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String title;
	private String description;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	private LocalDate dueDate;
	private Integer progressRate;

	@OneToMany(mappedBy = "milestone")
	private List<Issue> issues = new ArrayList<>();
}
