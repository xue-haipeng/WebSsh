package com.cnpc.repository;

import com.cnpc.domain.BpmCpuInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;

/**
 * Created by Xue on 12/11/16.
 */
@Repository
public interface BpmCpuInfoRepository extends JpaRepository<BpmCpuInfo, Timestamp> {
}
