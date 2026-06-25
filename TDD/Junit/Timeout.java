public class Timeout {
    /*While implementing sleep method it's mentioned to throw InteruptedException
    and it's a checked exception which makes the complier forces us to handle it so were putting
    throws InteruptedException to tell the compiler I know
     */
    public void sleepFor2Seconds() throws InterruptedException{
        Thread.sleep(2000);
    }
}
