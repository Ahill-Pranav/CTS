import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals
        assertEquals(5, 2 + 3, "2 + 3 should equal 5");

        // Assert true
        assertTrue(5 > 3, "5 is greater than 3");

        // Assert false
        assertFalse(5 < 3, "5 is not less than 3");

        // Assert null
        String nullString = null;
        assertNull(nullString, "The string should be null");

        // Assert not null
        Object notNullObject = new Object();
        assertNotNull(notNullObject, "The object should not be null");
    }
}
