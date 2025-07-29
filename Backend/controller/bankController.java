package com.example.demo.bankController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.bankEntity.CustomerAccount;
import com.example.demo.bankEntity.User;
import com.example.demo.bankRepository.UserRepository;
import com.example.demo.bankService.CustomerAccountService;
import com.example.demo.bankService.TransactionService;
import com.example.demo.bankService.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bank")
@CrossOrigin(origins = "http://localhost:4200")
public class bankController {

	@Autowired
	private UserService userService;

	@Autowired
	private CustomerAccountService bankService;

	@Autowired
	private TransactionService transactionService;

	@Autowired
	private UserRepository userRepository;

	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user) {
		if (user.getUsername() == null || user.getPassword() == null) {
			return ResponseEntity.badRequest().body("Username or password is missing");
		}

		if (userRepository.findByUsername(user.getUsername()) != null) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists");
		}

		user.setRole("ADMIN");
		User savedUser = userRepository.save(user);
		return ResponseEntity.ok(savedUser);
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
		User existing = userRepository.findByUsername(user.getUsername());
		if (existing == null || !existing.getPassword().equals(user.getPassword())) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
		}

		return ResponseEntity.ok("Login successful");
	}

	@PostMapping("/create")
	public ResponseEntity<?> createAccount(@RequestBody CustomerAccount account) {
		CustomerAccount saved = bankService.createAccount(account);
		return ResponseEntity.ok(saved);
	}

	@PostMapping("/deposit")
	public ResponseEntity<?> deposit(@RequestParam Long accountId, @RequestParam Double amount) {
		CustomerAccount updated = bankService.deposit(accountId, amount);
		transactionService.logTransaction(accountId, "deposit", amount);
		return ResponseEntity.ok(updated);
	}

	@PostMapping("/withdraw")
	public ResponseEntity<?> withdraw(@RequestParam Long accountId, @RequestParam Double amount) {
		try {
			CustomerAccount updated = bankService.withdraw(accountId, amount);
			transactionService.logTransaction(accountId, "withdrawal", amount);
			return ResponseEntity.ok(updated);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Withdraw failed: " + e.getMessage());
		}
	}

	@PostMapping("/transfer")
    public ResponseEntity<?> transfer(@RequestParam Long fromId, @RequestParam Long toId, @RequestParam Double amount) {
		try {
			bankService.transfer(fromId, toId, amount);
			transactionService.logTransaction(fromId, "transfer-out", amount);
			transactionService.logTransaction(toId, "transfer-in", amount);
			return ResponseEntity.ok("Transfer successful");
			} catch (Exception e) {
			    String errorMessage = e.getMessage() != null ? e.getMessage() : "Unknown error occurred";
			    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Transfer failed: " + errorMessage);
			}

    }

	@GetMapping("/transactions")
	public ResponseEntity<?> transactions(@RequestParam Long accountId) {
		List<?> list = transactionService.getTransactions(accountId);
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/balance")
	public ResponseEntity<?> getBalance(@RequestParam Long accountId) {
		Optional<CustomerAccount> account = bankService.findById(accountId);
		if (account.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Account not found");
			}
		return ResponseEntity.ok(account.get().getBalance());
	}
	

	@GetMapping("/accounts")
	public ResponseEntity<?> getAllAccounts() {
	List<CustomerAccount> accounts = bankService.findAll();
	return ResponseEntity.ok(accounts);
	}



}
