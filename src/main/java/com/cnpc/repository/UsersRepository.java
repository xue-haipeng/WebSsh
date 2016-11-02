package com.cnpc.repository;

import com.cnpc.domain.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Xue on 11/02/16.
 */
@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
    Users findByUsername(String username);
}
