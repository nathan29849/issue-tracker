package codesquad.backend.issuetracker.milestone.infrastructure;

import codesquad.backend.issuetracker.milestone.domain.Milestone;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MilestoneRepository extends JpaRepository<Milestone, Long> {

}
