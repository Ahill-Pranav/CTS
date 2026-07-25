package com.library.aspect;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {

    @Before("execution(* com.library.service.BookService.issueBook(..))")
    public void beforeMethod() {

        System.out.println("==========");
        System.out.println("Logging Started");
        System.out.println("==========");

    }

    @After("execution(* com.library.service.BookService.issueBook(..))")
    public void afterMethod() {

        System.out.println("==========");
        System.out.println("Logging Finished");
        System.out.println("==========");

    }

}