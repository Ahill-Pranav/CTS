package com.cognizent.account.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cognizent.account.dto.Account;
import com.cognizent.account.service.AccountService;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/{number}")
    public Account getAccount(@PathVariable String number) {
        return accountService.getAccount(number);
    }
}