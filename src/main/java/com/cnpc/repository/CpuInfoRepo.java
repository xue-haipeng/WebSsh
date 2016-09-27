package com.cnpc.repository;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.cnpc.domain.CpuInfo;

public interface CpuInfoRepo extends JpaRepository<CpuInfo, Timestamp>{
	
	@Query("select c from CpuInfo c")
	List<CpuInfo> cpuBySystem();

}
