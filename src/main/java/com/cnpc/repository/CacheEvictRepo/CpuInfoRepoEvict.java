package com.cnpc.repository.CacheEvictRepo;

import com.cnpc.domain.CpuInfo;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
@CacheConfig(cacheNames = {"xoapsCpuBySystem"})
public interface CpuInfoRepoEvict extends JpaRepository<CpuInfo, Timestamp>{
	
	@Query("select c from CpuInfo c")
	@CachePut(value = "xoapsCpuBySystem")
	List<CpuInfo> cpuBySystem();

}
