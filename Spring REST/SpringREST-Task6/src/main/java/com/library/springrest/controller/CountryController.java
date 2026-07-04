package com.library.springrest.controller;

import com.library.springrest.exception.CountryNotFoundException;
import com.library.springrest.model.Country;
import com.library.springrest.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code)
            throws CountryNotFoundException {

        return countryService.getCountry(code);

    }
}