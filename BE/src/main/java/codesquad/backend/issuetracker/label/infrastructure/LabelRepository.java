package codesquad.backend.issuetracker.label.infrastructure;

import codesquad.backend.issuetracker.label.domain.Label;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LabelRepository extends JpaRepository<Label, Long> {

}
