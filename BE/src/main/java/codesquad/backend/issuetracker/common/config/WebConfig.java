package codesquad.backend.issuetracker.common.config;

import codesquad.backend.issuetracker.oauth.application.OAuthService;
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

	private final OAuthService oAuthService;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {

		registry.addInterceptor(new AuthInterceptor(oAuthService))
			.order(1)
			.addPathPatterns("/**")
			.excludePathPatterns("/error/**", "/oauth/**");

		registry.addInterceptor(new RefreshInterceptor(oAuthService))
			.order(2)
			.addPathPatterns("/oauth/github/refresh/**");
	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {

		registry.addMapping("/**")
			.allowedOrigins("http://localhost:3000", "http://3.36.69.201");
	}
}
