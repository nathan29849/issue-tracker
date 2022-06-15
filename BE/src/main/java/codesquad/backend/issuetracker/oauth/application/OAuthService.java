package codesquad.backend.issuetracker.oauth.application;

import codesquad.backend.issuetracker.user.domain.User;
import codesquad.backend.issuetracker.user.infrastructure.UserRepository;
import java.util.Optional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
public class OAuthService {

	private final UserRepository userRepository;

	public OAuthService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Transactional
	public User upsertUser(User user) {
		log.info("Auth ID = {}", user.getAuthId());

		Optional<User> optionalUser = userRepository.findByAuthId(user.getAuthId());

		if (optionalUser.isPresent()) {
			User findUser = optionalUser.get();
			user = findUser.update(user);
		}
		userRepository.save(user);
		return user;
	}
}
