package codesquad.backend.issuetracker.oauth;

import codesquad.backend.issuetracker.oauth.application.OAuthService;
import codesquad.backend.issuetracker.oauth.application.GithubOAuthClient;
import codesquad.backend.issuetracker.oauth.presentation.controller.GithubAuthController;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@WebMvcTest(GithubAuthController.class)
@ActiveProfiles("local")
public class AuthControllerTest {

	private MockMvc mvc;

	@MockBean
	private GithubOAuthClient githubOAuthClient;

	@MockBean
	private OAuthService authService;

	@Value("${oauth.github.client-id}")
	private String clientId;

	@Value("${oauth.github.authorize-path}")
	private String authorizePath;

	@BeforeEach
	public void setUp() {
		mvc = MockMvcBuilders.standaloneSetup(
				new GithubAuthController(clientId, authorizePath, githubOAuthClient, authService))
			.build();
	}

	@Test
	void login_요청시_301과_함께_uri를_반환() throws Exception {

		//given
		MockHttpServletRequestBuilder requestBuilder = MockMvcRequestBuilders.get("/oauth/github");

		//when
		ResultActions actions = mvc.perform(requestBuilder);

		//then
		actions
			.andExpect(MockMvcResultMatchers.status().is3xxRedirection())
			.andExpect(MockMvcResultMatchers.header().stringValues(HttpHeaders.LOCATION,
				"https:/github.com/login/oauth/authorize?client_id=817844c46a4b764a838e"));
	}

}


