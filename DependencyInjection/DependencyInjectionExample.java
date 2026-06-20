interface CustomerRepository{
    void findCustomerById(int id, String[] arr);
    void balance(int id, long[] arr);
} 

class CustomerRepositoryImpl implements CustomerRepository{
       public void findCustomerById(int id, String[] arr){
        System.out.print(arr[id]);
        }
        public void balance(int id, long[] arr){
            System.out.print(arr[id]);
        }
}
