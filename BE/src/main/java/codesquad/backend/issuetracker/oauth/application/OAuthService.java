package codesquad.backend.issuetracker.oauth.application;

import codesquad.backend.issuetracker.oauth.presentation.dto.GithubUser;
import codesquad.backend.issuetracker.user.domain.User;
import codesquad.backend.issuetracker.user.infrastructure.UserRepository;
import java.util.Optional;
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
	public User upsertUser(GithubUser githubUser) {
		log.debug("Auth ID = {}", githubUser.getGithubId());

		User user = new User(
			githubUser.getGithubId(),
			githubUser.getUsername(),
			githubUser.getUserSecret(),
			githubUser.getImageUrl()
		);

		User findUser = findByUserSecret((user.getUserSecret()))
			.orElse(user);
		findUser.update(user);
		userRepository.save(findUser);
		return user;
	}

	public Optional<User> findByUserSecret(String userSecret) {
		return userRepository.findByUserSecret((userSecret));
	}
}
