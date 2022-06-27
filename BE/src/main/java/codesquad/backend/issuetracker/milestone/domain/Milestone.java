package codesquad.backend.issuetracker.milestone.domain;

import codesquad.backend.issuetracker.issue.domain.Issue;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@EntityListeners(AuditingEntityListener.class)
@Getter
@Entity
public class Milestone {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false)
	private String title;
	private String description;

	@NotNull
	@Column(columnDefinition = "TIMESTAMP")
	@CreatedDate
	private LocalDateTime createdAt;

	@NotNull
	@Column(columnDefinition = "TIMESTAMP")
	@LastModifiedDate
	private LocalDateTime updatedAt;

	private LocalDate dueDate;
	private Integer progressRate;

	@OneToMany(mappedBy = "milestone")
	private List<Issue> issues = new ArrayList<>();

	public Milestone(String title, String description, LocalDate dueDate, Integer progressRate) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.progressRate = progressRate;
	}

	public static Milestone createBy(String title, String description, LocalDate dueDate){
		return new Milestone(title, description, dueDate, 0);
	}
}
