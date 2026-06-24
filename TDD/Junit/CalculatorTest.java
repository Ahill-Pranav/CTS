import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    Calculator ca;
    @BeforeEach
    public void setup(){
        ca = new Calculator();
    }

    @Test
    void testAdd(){
        assertEquals(6, ca.add(3,3));
    }

    @Test
    void testSubtract(){
        assertEquals(3, ca.subtract(5,2));
    }

    @Test
    void testMultiply(){
        assertEquals(10, ca.multiply(5,2));
    }

    @Test
    void testDivide(){
        assertEquals(2, ca.divide(5,2));
    }
}