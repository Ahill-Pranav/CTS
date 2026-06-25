import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasses(
        {
                EvenChecker.class,
                CalculatorTest.class
        }
)

public class AllTests {
}
