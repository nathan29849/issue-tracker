package codesquad.backend.issuetracker.comment.infrastructure;

import codesquad.backend.issuetracker.comment.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
