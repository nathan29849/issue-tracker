package codesquad.backend.issuetracker.issue.application;

import codesquad.backend.issuetracker.issue.domain.Issue;
import codesquad.backend.issuetracker.issue.infrastructure.IssueRepository;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueDetailResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class IssueService {

	private final IssueRepository issueRepository;

	public IssueDetailResponse findById(Long id) {
		Issue issue = issueRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("해당 ID의 이슈가 존재하지 않습니다."));
		return IssueDetailResponse.createBy(issue);
	}
}
