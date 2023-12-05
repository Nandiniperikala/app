package com.medisure.app.web.rest.comm;

import static org.mockito.Mockito.when;

import com.medisure.app.config.webClient.AccessToken;
import com.medisure.app.config.webClient.WebClientConfig;
import java.util.Map;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;
import org.mockito.quality.Strictness;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@ExtendWith(MockitoExtension.class)
@MockitoSettings(strictness = Strictness.LENIENT)
class ClientResourcePoliciesUT {

    @Mock
    private AccessToken oAuth;

    @Mock
    private WebClientConfig webClientConfig;

    private ClientResourcePolicies clientResourcePolicies;

    @BeforeEach
    void init() {
        clientResourcePolicies = new ClientResourcePolicies(webClientConfig, oAuth);
    }

    @Test
    void getClientNullCheck() {
        when(oAuth.getToken()).thenReturn("");
        Mono<ResponseEntity<Map<String, String>>> result = clientResourcePolicies.getClient();
        ResponseEntity<Map<String, String>> statusCode = result.block();
        Assertions.assertEquals(statusCode.getStatusCode(), HttpStatusCode.valueOf(202));
    }

    @Test
    void getClient() {
        when(oAuth.getToken()).thenReturn("access_token");
        when(webClientConfig.serviceWebClient()).thenReturn(mockServiceWebClient());
        Mono<ResponseEntity<Map<String, String>>> response = clientResourcePolicies.getClient();
        ResponseEntity<Map<String, String>> statusCode = response.block();
        Assertions.assertEquals(statusCode.getStatusCode(), HttpStatusCode.valueOf(200));
    }

    WebClient.Builder mockServiceWebClient() {
        return WebClient.builder();
    }
}
