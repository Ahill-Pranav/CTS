package InventoryManagement;

import java.util.*;
class Product{
    private int productId;
    private String productName;
    private int quantity;
    private double price;
    Product(int productId,String productName, int quantity, double price){
    this.productId = productId;
    this.productName = productName;
    this.quantity = quantity;
    this.price = price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public void setProductId(int productId) {
        this.productId = productId;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }
    public int getProductId() {
        return productId;
    }
    public String getProductName() {
        return productName;
    }
    public int getQuantity() {
        return quantity;
    }

}

class InventoryManager{
    private HashMap<Integer, Product> inventory;
     
    InventoryManager(){
        inventory = new HashMap<>();
    }

    public HashMap<Integer, Product> getInventory() {
        return inventory;
    }

    public void addProduct(Product product){
         if(inventory.containsKey(product.getProductId())){
            System.out.print("Product already exists");
         }
         else{
            inventory.put(product.getProductId(),product);
         }
    }

    public void updateQuantity(int productId,int quantity){
            Product p = inventory.get(productId);
            if(p==null){
                System.out.println("Product doesn't exist");
            }
            else{
                p.setQuantity(quantity);
            }
        }

    public void updatePrice(int productId,double price){
            Product p = inventory.get(productId);
            if(p==null){
                System.out.println("Product doesn't exist");
            }
            else{
                p.setPrice(price);
            }
    }

    public void updateProductName(int productId,String productName){
        Product p = inventory.get(productId);
            if(p==null){
                System.out.println("Product doesn't exist");
            }
            else{
                p.setProductName(productName);
            }
    }

    public void updateProductId(int productId, int newProductId){
        Product p = inventory.get(productId);
        inventory.remove(productId);
        p.setProductId(newProductId);
        inventory.put(newProductId,p);
    }

    public void deleteProduct(int productId){
         Product p = inventory.get(productId);
            if(p==null){
                System.out.println("Product doesn't exist");
            }
            else{
                inventory.remove(productId);
            }
    }
}

class InventoryManagement{
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        InventoryManager im = new InventoryManager();
        while(true){
            System.out.println("1.Add Product\n2.Update Product\n3.Delete Product\n4.Exit");
            int option = sc.nextInt();
            if(option==1){
                System.out.println("Enter ProductId, ProductName, Quantity, Price");
                int productId = sc.nextInt();
                String productName = sc.next();
                int quantity = sc.nextInt();
                double price = sc.nextDouble();
                Product p = new Product(productId, productName, quantity, price);
                im.addProduct(p);
            }
            if(option==2){
                System.out.println("1.Update ProductId\n2.Update Quantity\n3.Update Product Name\n4.Update Price");
                int detail = sc.nextInt();
                if(detail==1){
                    System.out.print("Enter old ProductId and then New productId");
                    int oldId = sc.nextInt();
                    int newId = sc.nextInt();
                    im.updateProductId(oldId, newId);
                }
                if(detail==2){
                    System.out.println("Enter ProductId and New quantity");
                    int id = sc.nextInt();
                    int quantity = sc.nextInt();
                    im.updateQuantity(id, quantity);
                }
                if(detail==3){
                     System.out.println("Enter ProductId and New Name");
                    int id = sc.nextInt();
                    String Name = sc.next();
                    im.updateProductName(id, Name);
                }
                if(detail==4){
                    System.out.println("Enter ProductId and New Price");
                    int id = sc.nextInt();
                    double price = sc.nextDouble();
                    im.updatePrice(id, price);
                }
            }
            if(option==3){
                System.out.println("Enter ProductId");
                int id = sc.nextInt();
                im.deleteProduct(id);
            }
             if(option==4){
                break;
            }
        }
       
        sc.close();
    }
}

