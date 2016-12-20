package com.cnpc.repository;

import com.cnpc.domain.ASCSCpuInfo;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by Xue on 12/11/16.
 */
@Repository
public interface AscsCpuInfoRepository extends JpaRepository<ASCSCpuInfo, Timestamp> {

    @Cacheable(value = "ascsFindAll")
    List<ASCSCpuInfo> findAll();
}
