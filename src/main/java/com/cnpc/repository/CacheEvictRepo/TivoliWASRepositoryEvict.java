package com.cnpc.repository.CacheEvictRepo;

import com.cnpc.domain.weblogic.TivoliWAStatus;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CachePut;
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
public interface TivoliWASRepositoryEvict extends JpaRepository<TivoliWAStatus, Timestamp> {

    List<TivoliWAStatus> findByHostnameLike(String hostname);

    @Query("select count(distinct t.hostname) from TivoliWAStatus t")
    @CachePut(value = "countWasHosts")
    Long countWasHosts();

    @Query("select count(t) from TivoliWAStatus t")
    @CachePut(value = "countWasInstances")
    Long countWasInstances();

    @Query("select count(t) from TivoliWAStatus t where t.status='1'")
    @CachePut(value = "countWasRunning")
    Long countWasRunning();

    @Query("select count(t) from TivoliWAStatus t where t.status='3'")
    @CachePut(value = "countWasIllness")
    Long countWasIllness();

    @Query("select count(t) from TivoliWAStatus t where t.status='100'")
    @CachePut(value = "countWasShutdown")
    Long countWasShutdown();

}