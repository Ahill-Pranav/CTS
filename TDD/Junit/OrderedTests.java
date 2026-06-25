import org.junit.jupiter.api.*;
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)

public class OrderedTests {
    @Test
    @Order(1)
    public void login(){
        System.out.println("Login successful");
    }
    @Test
    @Order(2)
    public void addProduct(){
        System.out.println("Product added Successfully");
    }
    @Test
    @Order(3)
    public void payment(){
        System.out.println("Payment successful");
    }
}
