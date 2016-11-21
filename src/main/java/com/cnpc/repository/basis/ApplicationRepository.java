package com.cnpc.repository.basis;

import com.cnpc.domain.basis.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Xue on 11/06/16.
 */
@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

    List<Application> findBySystemLike(String system);
}
