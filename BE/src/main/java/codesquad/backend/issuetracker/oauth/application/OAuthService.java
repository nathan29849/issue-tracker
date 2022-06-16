package codesquad.backend.issuetracker.oauth.application;

import codesquad.backend.issuetracker.user.domain.User;
import codesquad.backend.issuetracker.user.infrastructure.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@RequiredArgsConstructor
@Service
public class OAuthService {

	private final UserRepository userRepository;

	@Transactional
	public User upsertUser(User user) {
		log.debug("Auth ID = {}", user.getAuthId());

		User findUser = userRepository.findByAuthId(user.getAuthId())
			.orElse(user);
		findUser.update(user);
		userRepository.save(findUser);
		return user;
	}
}
