package com.cnpc.repository.CacheEvictRepo;

import com.cnpc.domain.TopCpuHost;
import org.springframework.cache.annotation.CachePut;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TopCpuHostRepoEvict extends JpaRepository<TopCpuHost, String>{

    @CachePut(value = "topCpuHostFindAll")
    List<TopCpuHost> findAll();
}
