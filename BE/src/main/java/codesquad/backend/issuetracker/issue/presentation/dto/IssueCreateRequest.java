package codesquad.backend.issuetracker.issue.presentation.dto;

import java.util.List;
import lombok.Getter;

@Getter
public class IssueCreateRequest {

	private String title;
	private String content;
	private List<Long> assigneesId;
	private List<Long> labelsId;
	private Long milestoneId;
	// 첨부파일 추후 추가 예정
 }
