package com.library.springrest.controller;

import com.library.springrest.model.Country;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountry() {

        return new Country("IN", "India");

    }
}