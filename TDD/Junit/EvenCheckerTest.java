import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.junit.jupiter.api.BeforeEach;
import static org.junit.jupiter.api.Assertions.*;

public class EvenCheckerTest {
    EvenChecker evenChecker;
    @BeforeEach
   public void setUp(){
        evenChecker = new EvenChecker();
    }

    @ParameterizedTest
    @ValueSource(ints = {12,78,96,106})
    public void testEvenCheck(int n) {
        assertTrue(evenChecker.isEven(n));
    }
    @ParameterizedTest
    @ValueSource(ints={11,13,15,89,69,57,7,9,17})
    public void testOddCheck(int n){
        assertFalse(evenChecker.isEven(n));
    }
}
