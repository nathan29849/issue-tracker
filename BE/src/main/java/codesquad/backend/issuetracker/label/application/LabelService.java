package codesquad.backend.issuetracker.label.application;

import codesquad.backend.issuetracker.label.domain.Label;
import codesquad.backend.issuetracker.label.infrastructure.LabelRepository;
import codesquad.backend.issuetracker.label.presentation.dto.LabelDto;
import codesquad.backend.issuetracker.label.presentation.dto.request.LabelCreateRequest;
import codesquad.backend.issuetracker.label.presentation.dto.request.LabelEditRequest;
import codesquad.backend.issuetracker.label.presentation.dto.response.LabelCountResponse;
import codesquad.backend.issuetracker.label.presentation.dto.response.LabelIdResponse;
import codesquad.backend.issuetracker.label.presentation.dto.response.LabelsResponse;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class LabelService {

	private final LabelRepository labelRepository;

	@Transactional(readOnly = true)
	public LabelsResponse findAll() {
		List<LabelDto> labels = labelRepository.findAll().stream()
			.map(LabelDto::createBy)
			.collect(Collectors.toList());

		return LabelsResponse.of(labels);
	}

	@Transactional(readOnly = true)
	public LabelCountResponse count() {
		long count = labelRepository.count();
		return LabelCountResponse.of(count);
	}

	public LabelIdResponse add(LabelCreateRequest labelCreateRequest) {
		Label label = Label.createBy(
			labelCreateRequest.getTitle(),
			labelCreateRequest.getDescription(),
			labelCreateRequest.getBackgroundColor(),
			labelCreateRequest.getTextColor()
		);

		Label savedLabel = labelRepository.save(label);
		return new LabelIdResponse(savedLabel.getId());
	}

	public LabelDto edit(Long id, LabelEditRequest labelEditRequest) {
		Label label = labelRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("해당 ID의 라벨이 존재하지 않습니다."));

		label.edit(
			labelEditRequest.getTitle(),
			labelEditRequest.getDescription(),
			labelEditRequest.getBackgroundColor(),
			labelEditRequest.getTextColor()
		);

		return LabelDto.createBy(label);
	}

	public void remove(Long id) {
		Label label = labelRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("해당 ID의 라벨이 존재하지 않습니다."));
		labelRepository.delete(label);
	}
}
