package com.cnpc.repository.CacheEvictRepo;

import com.cnpc.domain.ASCSCpuCurr;
import org.springframework.cache.annotation.CachePut;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by Xue on 12/11/16.
 */
@Repository
public interface AscsCpuCurrRepoEvict extends JpaRepository<ASCSCpuCurr, Timestamp> {

    @CachePut(value = "ascsCpuCurrFindAll")
    List<ASCSCpuCurr> findAll();

}
