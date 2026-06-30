import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger =
            LoggerFactory.getLogger(LoggingExample.class);

    public void process(int age){

        if(age < 18){

            logger.warn("User is under age.");

        }
        else{

            logger.info("User is eligible.");

        }

        try{

            int x = 10/0;

        }
        catch(Exception e){

            logger.error("Exception occurred");

        }

    }

}