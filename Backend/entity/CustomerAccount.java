package com.example.demo.bankEntity;

import jakarta.persistence.*;

@Entity
@Table(name = "CtAccount")
public class CustomerAccount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String accountHolderName;
    private String accountType;
    private Double balance;
	public CustomerAccount() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CustomerAccount(Long id, String accountHolderName, String accountType, Double balance) {
		super();
		this.id = id;
		this.accountHolderName = accountHolderName;
		this.accountType = accountType;
		this.balance = balance;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getAccountHolderName() {
		return accountHolderName;
	}
	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}
	public String getAccountType() {
		return accountType;
	}
	public void setAccountType(String accountType) {
		this.accountType = accountType;
	}
	public Double getBalance() {
		return balance;
	}
	public void setBalance(Double balance) {
		this.balance = balance;
	}
    
    
}

