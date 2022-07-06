package codesquad.backend.issuetracker.issue.application;

import codesquad.backend.issuetracker.issue.domain.Issue;
import codesquad.backend.issuetracker.issue.domain.IssueAssignee;
import codesquad.backend.issuetracker.issue.domain.IssueLabel;
import codesquad.backend.issuetracker.issue.domain.IssueStatus;
import codesquad.backend.issuetracker.issue.infrastructure.IssueRepository;
import codesquad.backend.issuetracker.issue.presentation.dto.FilterCondition;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueCreateRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueDetailResponse;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueIdResponse;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssuesResponse;
import codesquad.backend.issuetracker.label.domain.Label;
import codesquad.backend.issuetracker.label.infrastructure.LabelRepository;
import codesquad.backend.issuetracker.milestone.domain.Milestone;
import codesquad.backend.issuetracker.milestone.infrastructure.MilestoneRepository;
import codesquad.backend.issuetracker.user.domain.User;
import codesquad.backend.issuetracker.user.infrastructure.UserRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class IssueService {

	private final IssueRepository issueRepository;
	private final UserRepository userRepository;
	private final MilestoneRepository milestoneRepository;
	private final LabelRepository labelRepository;

	@Transactional(readOnly = true)
	public IssueDetailResponse findById(Long id) {
		Issue issue = issueRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("해당 ID의 이슈가 존재하지 않습니다."));
		return IssueDetailResponse.createBy(issue);
	}

	@Transactional(readOnly = true)
	public IssuesResponse findByFilter(FilterCondition condition) {
		return null;
	}

	@Transactional
	public IssueIdResponse add(Long userId, IssueCreateRequest issueCreateRequest) {
		 User author = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("올바른 유저가 아닙니다."));

		Issue issue = Issue.createBy(issueCreateRequest.getTitle(),
			issueCreateRequest.getContent(), author);

		if (issueCreateRequest.getMilestoneId() != null) {
			Milestone milestone = milestoneRepository.findById(issueCreateRequest.getMilestoneId())
				.orElseThrow(() -> new IllegalArgumentException("올바른 마일스톤이 아닙니다."));
			issue.updateMilestone(milestone);
		}

		if (issueCreateRequest.getAssigneesId() != null) {
			List<User> assignees = issueCreateRequest.getAssigneesId().stream()
				.map(a -> userRepository.findById(a)
					.orElseThrow(() -> new IllegalArgumentException("올바른 유저가 아닙니다."))
				).collect(Collectors.toList());

			List<IssueAssignee> issueAssignees = assignees.stream()
				.map(assignee -> new IssueAssignee(assignee, issue))
				.collect(Collectors.toList());

			issue.updateAssignees(issueAssignees);
		}

		if (issueCreateRequest.getLabelsId() != null) {
			List<Label> labels = issueCreateRequest.getLabelsId().stream()
				.map(l -> labelRepository.findById(l)
					.orElseThrow(() -> new IllegalArgumentException("올바른 라벨이 아닙니다."))
				).collect(Collectors.toList());

			List<IssueLabel> issueLabels = labels.stream()
				.map(label -> new IssueLabel(issue, label))
				.collect(Collectors.toList());

			issue.updateLabels(issueLabels);
		}

		Issue savedIssue = issueRepository.save(issue);
		return new IssueIdResponse(savedIssue.getId());
	}
}
