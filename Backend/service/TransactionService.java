package com.example.demo.bankService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.bankEntity.Transaction;
import com.example.demo.bankRepository.TransactionRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;
    
    public void logTransaction(Long accountId , String type , Double amount) {
    	Transaction transaction = new Transaction();
    	transaction.setAccountId(accountId);
    	transaction.setType(type);
    	transaction.setAmount(amount);
    	transaction.setTimestamp(LocalDateTime.now());
    	transactionRepository.save(transaction); 
    }
    




    public List<Transaction> getTransactions(Long accountId) {
        return transactionRepository.findByAccountId(accountId);
    }
}
