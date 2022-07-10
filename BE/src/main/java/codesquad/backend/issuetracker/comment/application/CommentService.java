package codesquad.backend.issuetracker.comment.application;

import codesquad.backend.issuetracker.comment.domain.Comment;
import codesquad.backend.issuetracker.comment.infrastructure.CommentRepository;
import codesquad.backend.issuetracker.comment.presentation.dto.request.CommentCreateRequest;
import codesquad.backend.issuetracker.comment.presentation.dto.response.CommentIdResponse;
import codesquad.backend.issuetracker.issue.domain.Issue;
import codesquad.backend.issuetracker.issue.infrastructure.IssueRepository;
import codesquad.backend.issuetracker.user.domain.User;
import codesquad.backend.issuetracker.user.infrastructure.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CommentService {

	private CommentRepository commentRepository;
	private IssueRepository issueRepository;
	private UserRepository userRepository;


	@Transactional
	public CommentIdResponse add(
		Long userId,
		Long issueId,
		CommentCreateRequest commentCreateRequest) {
		Issue issue = issueRepository.findById(issueId)
			.orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 이슈입니다."));

		User author = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 유저입니다."));

		Comment comment = new Comment(commentCreateRequest.getContent(), issue, author);
		Comment savedComment = commentRepository.save(comment);
		return CommentIdResponse.createBy(savedComment.getId());
	}
}
