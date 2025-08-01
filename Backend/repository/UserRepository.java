package com.example.demo.bankRepository;

import com.example.demo.bankEntity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username);
    User findByUsernameAndPassword(String username, String password);
    User findByUsername(String username);
}
