import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class NotificationServiceTest {
    @Mock
    EmailService mockEmail;

    @InjectMocks
    NotificationService service;

    @Test
    void testNotify(){

        doNothing()
                .when(mockEmail)
                .sendEmail(anyString());

        service.notifyUser("abc@gmail.com");

        verify(mockEmail)
                .sendEmail("abc@gmail.com");

    }

}