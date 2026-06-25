import org.junit.jupiter.api.Test;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTimeout;

public class TimeoutTest {
    Timeout t = new Timeout();

    @Test
    public void testSleep(){
    assertTimeout(
            Duration.ofMillis(2500),
            () -> t.sleepFor2Seconds()
    );
    }
}
