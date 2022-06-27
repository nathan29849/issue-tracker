package codesquad.backend.issuetracker.milestone.infrastructure;

import codesquad.backend.issuetracker.milestone.domain.Milestone;
import java.time.LocalDate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MilestoneRepository extends JpaRepository<Milestone, Long> {

	Integer countMilestoneByDueDateBeforeAndDueDateIsNull(LocalDate now);
}
