import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Exercise 1: Mocking and Stubbing
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.returnData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }

    @Test
    public void testVerifyInteraction() {
        // Exercise 2: Verifying Interactions
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi).returnData();
    }
}
