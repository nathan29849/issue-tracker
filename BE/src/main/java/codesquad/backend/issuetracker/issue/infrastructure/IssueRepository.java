package codesquad.backend.issuetracker.issue.infrastructure;

import codesquad.backend.issuetracker.issue.domain.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueRepository extends JpaRepository<Issue, Long> {

//	@Query("select i from Issue i join fetch i.author where i.id = :id")
//	Optional<Issue> findBy(@Param("id") Long id);
}
