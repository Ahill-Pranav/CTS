package com.library.springrest.service;

import com.library.springrest.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private final List<Country> countryList;

    @SuppressWarnings("unchecked")
    public CountryService() {
        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");
        countryList = (List<Country>) context.getBean("countryList");
    }

    public List<Country> getAllCountries() {
        return countryList;
    }

    public Country getCountry(String code) {
        return countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);
    }

}