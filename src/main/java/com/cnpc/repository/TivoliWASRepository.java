package com.cnpc.repository;

import com.cnpc.domain.weblogic.TivoliWAStatus;
import com.cnpc.domain.weblogic.TivoliWAStatus;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by Xue on 12/01/16.
 */
@Repository
@CacheConfig(cacheNames = {"countWasHosts", "countWasInstances", "countWasRunning", "countWasIllness", "countWasShutdown"})
public interface TivoliWASRepository extends JpaRepository<TivoliWAStatus, Timestamp> {

    List<TivoliWAStatus> findByHostnameLike(String hostname);

    @Query("select count(distinct t.hostname) from TivoliWAStatus t")
    @Cacheable(value = "countWasHosts")
    Long countWasHosts();

    @Query("select count(t) from TivoliWAStatus t")
    @Cacheable(value = "countWasInstances")
    Long countWasInstances();

    @Query("select count(t) from TivoliWAStatus t where t.status='1'")
    @Cacheable(value = "countWasRunning")
    Long countWasRunning();

    @Query("select count(t) from TivoliWAStatus t where t.status='3'")
    @Cacheable(value = "countWasIllness")
    Long countWasIllness();

    @Query("select count(t) from TivoliWAStatus t where t.status='100'")
    @Cacheable(value = "countWasShutdown")
    Long countWasShutdown();

}