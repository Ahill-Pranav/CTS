package com.library.repository;

public class BookRepository {

    public BookRepository() {
        System.out.println("BookRepository Bean Created");
    }

    public void fetchBook() {
        System.out.println("Fetching book from database...");
    }
}