package com.cognizent.loan.service;

import org.springframework.stereotype.Service;
import com.cognizent.loan.dto.Loan;

@Service
public class LoanService {

    public Loan getLoan(String number) {

        return new Loan(
                number,
                "Car",
                400000,
                3258,
                18
        );
    }
}