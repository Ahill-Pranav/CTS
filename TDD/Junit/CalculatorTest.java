import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    Calculator ca;
    @BeforeEach
    public void setup(){
        // Arrange (Setup method)
        ca = new Calculator();
    }

    @AfterEach
    public void tearDown(){
        // Teardown method
        ca = null;
    }

    @Test
    void testAdd(){
        // Arrange (done in setup)
        
        // Act
        int result = ca.add(3,3);
        
        // Assert
        assertEquals(6, result);
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

    @Test
    void divideByZero(){
        assertThrows(ArithmeticException.class,()->ca.divide(0,0));
    }
}