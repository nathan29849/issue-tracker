package codesquad.backend.issuetracker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/hello-spring")
	public String hello() {
		return "ok";
	}
}
