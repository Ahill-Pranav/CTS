package com.cognizent.account.service;

import org.springframework.stereotype.Service;
import com.cognizent.account.dto.Account;

@Service
public class AccountService {

    public Account getAccount(String number) {

        return new Account(
                number,
                "Savings",
                234343
        );
    }
}