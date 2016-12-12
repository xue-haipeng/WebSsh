package com.cnpc.repository;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.cnpc.domain.CpuInfo;
import org.springframework.stereotype.Repository;

@Repository
@CacheConfig(cacheNames = {"xoapsCpuBySystem"})
public interface CpuInfoRepo extends JpaRepository<CpuInfo, Timestamp>{
	
	@Query("select c from CpuInfo c")
	@Cacheable(value = "xoapsCpuBySystem")
	List<CpuInfo> cpuBySystem();

}
