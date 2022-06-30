package codesquad.backend.issuetracker.label.application;

import codesquad.backend.issuetracker.label.infrastructure.LabelRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LabelService {

	private final LabelRepository labelRepository;
}
