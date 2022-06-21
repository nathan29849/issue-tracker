package codesquad.backend.issuetracker.common.config;

import codesquad.backend.issuetracker.oauth.interceptor.AuthInterceptor;
import codesquad.backend.issuetracker.oauth.interceptor.RefreshInterceptor;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

	private final AuthInterceptor authInterceptor;
	private final RefreshInterceptor refreshInterceptor;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {

		registry.addInterceptor(authInterceptor)
			.order(1)
			.addPathPatterns("/**")
			.excludePathPatterns("/oauth/**", "/error/**");

		registry.addInterceptor(refreshInterceptor)
			.order(2)
			.addPathPatterns("/oauth/github/refresh/**");
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {

		registry.addMapping("/**")
			.allowedOrigins("http://localhost:3000")
			.allowedMethods("*");
	}
}
