package com.cnpc.repository;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.cnpc.domain.TopCpuHost;

import java.util.List;

public interface TopCpuHostRepo extends JpaRepository<TopCpuHost, String>{

    @Cacheable(value = "topCpuHostFindAll")
    List<TopCpuHost> findAll();
}
