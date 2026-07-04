package com.library.springrest;

import com.library.springrest.model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringRestTask2Application {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringRestTask2Application.class);

    public static void main(String[] args) {

        SpringApplication.run(SpringRestTask2Application.class, args);

        displayCountry();
    }

    public static void displayCountry() {

        LOGGER.info("START");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country =
                context.getBean("country", Country.class);

        LOGGER.debug("Country : {}", country);

        LOGGER.info("END");
    }
}