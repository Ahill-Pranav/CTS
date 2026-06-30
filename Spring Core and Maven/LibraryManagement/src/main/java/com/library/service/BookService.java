package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository repository;

  /*public BookService(BookRepository repository) {

        System.out.println("BookService Bean Created");

        this.repository = repository;
    }
    */
    /*Spring calls this constructor while creating the BookService bean.
      The BookRepository dependency is provided at the time of object creation.  */
    public void setRepository(BookRepository repository){
        this.repository=repository; //Spring first creates the BookService object. Then it calls this setter method to inject the BookRepository dependency.
    }

    public void issueBook() {

        repository.fetchBook();

        System.out.println("Book Issued Successfully");

    }

}