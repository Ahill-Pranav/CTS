package com.cognizent.loan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cognizent.loan.dto.Loan;
import com.cognizent.loan.service.LoanService;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @GetMapping("/{number}")
    public Loan getLoan(@PathVariable String number) {

        return loanService.getLoan(number);
    }
}