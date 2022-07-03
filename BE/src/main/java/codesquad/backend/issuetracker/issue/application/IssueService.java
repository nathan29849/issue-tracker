package codesquad.backend.issuetracker.issue.application;

import codesquad.backend.issuetracker.issue.infrastructure.IssueRepository;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueDetailResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class IssueService {

	private final IssueRepository issueRepository;

	public IssueDetailResponse findById(Long id) {
		return null;
	}
}
