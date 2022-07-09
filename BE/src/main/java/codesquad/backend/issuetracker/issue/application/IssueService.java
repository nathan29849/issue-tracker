package codesquad.backend.issuetracker.issue.application;

import codesquad.backend.issuetracker.comment.domain.Comment;
import codesquad.backend.issuetracker.issue.domain.Issue;
import codesquad.backend.issuetracker.issue.domain.IssueAssignee;
import codesquad.backend.issuetracker.issue.domain.IssueLabel;
import codesquad.backend.issuetracker.issue.domain.IssueStatus;
import codesquad.backend.issuetracker.issue.infrastructure.IssueRepository;
import codesquad.backend.issuetracker.issue.presentation.dto.FilterCondition;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueAssigneeEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueCreateRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueLabelEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.request.IssueStatusEditRequest;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueDetailResponse;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueIdResponse;
import codesquad.backend.issuetracker.issue.presentation.dto.response.IssueStatusResponse;
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
	public IssueDetailResponse findDetailById(Long id) {
		Issue issue = findById(id);
		return IssueDetailResponse.createBy(issue);
	}

	@Transactional(readOnly = true)
	public IssuesResponse findByFilter(FilterCondition condition) {
		List<IssueDetailResponse> issueDetails = issueRepository.findAll()
			.stream()
			.map(IssueDetailResponse::createBy)
			.collect(Collectors.toList());

		return new IssuesResponse(issueDetails);
	}

	@Transactional
	public IssueIdResponse add(Long userId, IssueCreateRequest issueCreateRequest) {
		 User author = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("올바른 유저가 아닙니다."));

		Issue issue = Issue.createBy(issueCreateRequest.getTitle(), author);

		if (issueCreateRequest.getMilestoneId() != null) {
			Milestone milestone = milestoneRepository.findById(issueCreateRequest.getMilestoneId())
				.orElseThrow(() -> new IllegalArgumentException("올바른 마일스톤이 아닙니다."));
			issue.updateMilestone(milestone);
		}

		if (issueCreateRequest.getAssigneesId() != null) {
			List<IssueAssignee> issueAssignees = getIssueAssigneeById(issue, issueCreateRequest.getAssigneesId());
			issue.updateAssignees(issueAssignees);
		}

		if (issueCreateRequest.getLabelsId() != null) {
			List<IssueLabel> issueLabels = getIssueLabelsById(issue, issueCreateRequest.getLabelsId());
			issue.updateLabels(issueLabels);
		}

		issue.addComment(new Comment(issueCreateRequest.getContent(), issue, author));

		Issue savedIssue = issueRepository.save(issue);
		return new IssueIdResponse(savedIssue.getId());
	}

	@Transactional
	public IssueDetailResponse editTitle(Long id, String title) {
		Issue issue =findById(id);
		issue.updateTitle(title);
		return IssueDetailResponse.createBy(issue);
	}

	@Transactional
	public IssueDetailResponse editContent(Long id, String content) {
//		Issue issue = findById(id);
//		issue.addComment(content);
//		return IssueDetailResponse.createBy(issue);
		return null;
	}

	@Transactional
	public IssueDetailResponse editMilestone(Long id, Long milestoneId) {
		Issue issue = findById(id);
		Milestone milestone = milestoneRepository.findById(milestoneId)
			.orElseThrow(() -> new IllegalArgumentException("해당 ID의 마일스톤이 존재하지 않습니다."));
		issue.updateMilestone(milestone);
		return IssueDetailResponse.createBy(issue);
	}

	@Transactional
	public IssueDetailResponse editLabel(Long id, IssueLabelEditRequest request) {
		Issue issue = findById(id);
		List<IssueLabel> issueLabels = getIssueLabelsById(issue, request.getLabelsId());
		issue.updateLabels(issueLabels);
		return IssueDetailResponse.createBy(issue);
	}

	private List<IssueLabel> getIssueLabelsById(Issue issue, List<Long> labelsId) {
		List<Label> labels = labelsId.stream()
			.map(labelId -> labelRepository.findById(labelId)
				.orElseThrow(() -> new IllegalArgumentException("올바른 라벨이 아닙니다."))
			).collect(Collectors.toList());

		 return labels.stream()
			.map(label -> new IssueLabel(issue, label))
			.collect(Collectors.toList());
	}

	@Transactional
	public IssueDetailResponse editAssignee(Long id, IssueAssigneeEditRequest request) {
		Issue issue = findById(id);
		List<IssueAssignee> issueAssignees = getIssueAssigneeById(issue,
			request.getAssigneesId());
		issue.updateAssignees(issueAssignees);
		return IssueDetailResponse.createBy(issue);
	}

	private List<IssueAssignee> getIssueAssigneeById(Issue issue, List<Long> assigneesId) {
		List<User> assignees = assigneesId.stream()
			.map(assigneeId -> userRepository.findById(assigneeId)
				.orElseThrow(() -> new IllegalArgumentException("올바른 유저가 아닙니다."))
			).collect(Collectors.toList());

		return assignees.stream()
			.map(assignee -> new IssueAssignee(assignee, issue))
			.collect(Collectors.toList());
	}

	@Transactional
	public void remove(Long id) {
		Issue issue = findById(id);
		issueRepository.delete(issue);
	}

	private Issue findById(Long id) {
		return issueRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("해당 ID의 이슈가 존재하지 않습니다."));
	}

	public IssueStatusResponse editStatus(Long issueId, Long userId,
		IssueStatusEditRequest issueStatusEditRequest) {
		User editor = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("올바른 유저가 아닙니다."));

		Issue issue = findById(issueId);
		IssueStatus status = issueStatusEditRequest.getStatus();

		issue.updateStatus(status);

		return IssueStatusResponse.createBy(status, editor);
	}
}
