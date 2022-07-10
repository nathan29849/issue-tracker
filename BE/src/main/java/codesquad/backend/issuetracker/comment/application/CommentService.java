package codesquad.backend.issuetracker.comment.application;

import codesquad.backend.issuetracker.comment.domain.Comment;
import codesquad.backend.issuetracker.comment.infrastructure.CommentRepository;
import codesquad.backend.issuetracker.comment.presentation.dto.CommentDto;
import codesquad.backend.issuetracker.comment.presentation.dto.request.CommentCreateRequest;
import codesquad.backend.issuetracker.comment.presentation.dto.request.CommentEditRequest;
import codesquad.backend.issuetracker.comment.presentation.dto.response.CommentIdResponse;
import codesquad.backend.issuetracker.issue.domain.Issue;
import codesquad.backend.issuetracker.issue.infrastructure.IssueRepository;
import codesquad.backend.issuetracker.user.domain.User;
import codesquad.backend.issuetracker.user.infrastructure.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class CommentService {

	private final CommentRepository commentRepository;
	private final IssueRepository issueRepository;
	private final UserRepository userRepository;

	@Transactional
	public CommentIdResponse add(
		Long issueId,
		Long userId,
		CommentCreateRequest commentCreateRequest) {
		Issue issue = issueRepository.findById(issueId)
			.orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 이슈입니다."));

		User author = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 유저입니다."));

		Comment comment = new Comment(commentCreateRequest.getContent(), issue, author);
		Comment savedComment = commentRepository.save(comment);
		return CommentIdResponse.createBy(savedComment.getId());
	}

	@Transactional
	public CommentDto editContent(Long issueId, Long commentId, Long userId, CommentEditRequest commentEditRequest) {
		Issue issue = issueRepository.findById(issueId)
			.orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 이슈입니다."));

		User author = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 유저입니다."));

		Comment comment = commentRepository.findById(commentId)
			.orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 댓글입니다."));

		validate(issue, author, comment);
		comment.updateContent(commentEditRequest.getContent());
		return CommentDto.createBy(comment);
	}

	private void validate(Issue issue, User author, Comment comment) {
		if (author != comment.getAuthor()){
			throw new IllegalStateException("댓글 작성자가 아니므로 수정할 수 없습니다.");
		}

		if (issue == comment.getIssue()){
			throw new IllegalStateException("댓글의 이슈가 올바르지 않습니다.");
		}
	}

	@Transactional
	public void remove(Long issueId, Long commentId, Long userId) {
		Issue issue = issueRepository.findById(issueId)
			.orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 이슈입니다."));

		User author = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 유저입니다."));

		Comment comment = commentRepository.findById(commentId)
			.orElseThrow(() -> new IllegalArgumentException("찾을 수 없는 댓글입니다."));

		validate(issue, author, comment);
		commentRepository.delete(comment);
	}
}
