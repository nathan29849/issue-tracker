package codesquad.backend.issuetracker.label.application;

import codesquad.backend.issuetracker.label.infrastructure.LabelRepository;
import codesquad.backend.issuetracker.label.presentation.dto.LabelDto;
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
}
