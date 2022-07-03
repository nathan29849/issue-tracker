package codesquad.backend.issuetracker.issue.infrastructure;

import codesquad.backend.issuetracker.issue.domain.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue, Long> {

}
