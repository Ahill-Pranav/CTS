package com.library.service;

import org.springframework.stereotype.Service;

@Service
public class BookService {

    public void issueBook() {

        System.out.println("Issuing Book...");

    }

    public void returnBook() {

        System.out.println("Returning Book...");

    }

}