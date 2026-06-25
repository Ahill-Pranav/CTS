import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ExceptionThrowerTest {
    ExceptionThrower ex = new ExceptionThrower();

    @Test
    void testException(){
        assertThrows(IllegalArgumentException.class,
                ()->ex.throwException());
    }
}
