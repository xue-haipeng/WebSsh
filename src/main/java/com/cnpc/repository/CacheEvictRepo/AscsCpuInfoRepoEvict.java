package com.cnpc.repository.CacheEvictRepo;

import com.cnpc.domain.ASCSCpuInfo;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CachePut;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
@CacheConfig(cacheNames = {"ascsFindAll"})
public interface AscsCpuInfoRepoEvict extends JpaRepository<ASCSCpuInfo, Timestamp>{

	@CachePut(value = "ascsFindAll")
	List<ASCSCpuInfo> findAll();

}
