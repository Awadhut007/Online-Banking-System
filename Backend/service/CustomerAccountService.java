package com.example.demo.bankService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.bankEntity.CustomerAccount;
import com.example.demo.bankRepository.CustomerAccountRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerAccountService {

    @Autowired
    private CustomerAccountRepository bankAccountRepository;

    public CustomerAccount createAccount(CustomerAccount account) {
        return bankAccountRepository.save(account);
    }

    public CustomerAccount deposit(Long id, Double amount) {
    	CustomerAccount account = bankAccountRepository.findById(id).orElseThrow();
        account.setBalance(account.getBalance() + amount);
        return bankAccountRepository.save(account);
    }
    
    public CustomerAccount withdraw(Long id , Double amount) {
    	CustomerAccount account = bankAccountRepository.findById(id).orElseThrow(() -> new RuntimeException("Account not found"));
    	if (account.getBalance() < amount) {
    		throw new RuntimeException("Insufficient balance");
    	}
    	account.setBalance(account.getBalance() - amount);
    	return bankAccountRepository.save(account);
    }

	public void transfer(Long fromId, Long toId, Double amount) {
		CustomerAccount fromAccount = bankAccountRepository.findById(fromId).orElseThrow(() -> new RuntimeException("Sender account not found"));
		CustomerAccount toAccount = bankAccountRepository.findById(toId).orElseThrow(() -> new RuntimeException("Receiver account not found"));
		if (fromAccount.getBalance() < amount) {
	    	throw new RuntimeException("Insufficient balance");
	    }
		fromAccount.setBalance(fromAccount.getBalance() - amount);
    	toAccount.setBalance(toAccount.getBalance() + amount);

    	bankAccountRepository.save(fromAccount);
    	bankAccountRepository.save(toAccount);
	}
	
	
    public Optional<CustomerAccount> findById(Long id) {
        return bankAccountRepository.findById(id);
    }
    
    public List<CustomerAccount> findAll() {
    	return bankAccountRepository.findAll();
    	}

}
