package com.cnpc.repository;

import com.cnpc.domain.ASCSCpuCurr;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by Xue on 12/11/16.
 */
@Repository
public interface AscsCpuCurrRepository extends JpaRepository<ASCSCpuCurr, Timestamp> {

    @Cacheable(value = "ascsCpuCurrFindAll")
    List<ASCSCpuCurr> findAll();

}
