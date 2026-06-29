public class MyService {
    private final ExternalApi ea;
    MyService(ExternalApi ea){
        this.ea = ea;
    }
    public String fetchData(){
        return ea.returnData();
    }

    public void twiceData(){
        ea.returnData();
        ea.returnData();
    }

    public void fetchUser(int id){
        ea.getUser(id);
    }
}
