package com.library.springrest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringRestTask1Application {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(SpringRestTask1Application.class);

    public static void main(String[] args) {
        SpringApplication.run(SpringRestTask1Application.class, args);
        LOGGER.info("Inside main");
    }

}