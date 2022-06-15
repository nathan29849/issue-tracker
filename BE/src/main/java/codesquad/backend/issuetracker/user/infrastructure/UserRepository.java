package codesquad.backend.issuetracker.user.infrastructure;

import codesquad.backend.issuetracker.user.domain.User;
import java.util.Optional;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

	@PersistenceContext
	private EntityManager em;

	public void save(User user) {
		em.persist(user);
	}

	public Optional<User> findByAuthId(String authId){
		return Optional.empty();
	};
}
