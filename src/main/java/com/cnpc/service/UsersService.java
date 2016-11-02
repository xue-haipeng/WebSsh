package com.cnpc.service;

/**
 * Created by Xue on 11/02/16.
 */
import com.cnpc.domain.Users;
import com.cnpc.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


public class UsersService implements UserDetailsService {
    @Autowired
    UsersRepository repo;

    @Override
    public UserDetails loadUserByUsername(String username) {
        Users user = repo.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User Not Exists");
        }
        return user;
    }
}