package codesquad.backend.issuetracker.common.domain;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
@Getter
public abstract class BaseEntity {

	@Column(columnDefinition = "TIMESTAMP", nullable = false)
	@CreatedDate
	private LocalDateTime createdAt;

	@Column(columnDefinition = "TIMESTAMP", nullable = false)
	@LastModifiedDate
	private LocalDateTime updatedAt;
}
