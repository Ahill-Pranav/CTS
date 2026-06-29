import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class MyServiceTest {

    @Test
    public void test(){
        ExternalApi mockApi = mock(ExternalApi.class);

        when(mockApi.returnData()).thenReturn("Mock data");

        MyService ms = new MyService(mockApi);
        ms.twiceData();
        verify(mockApi,times(2)).returnData();

        when(mockApi.getUser(anyInt())).thenReturn("Mock user");


    }


}
