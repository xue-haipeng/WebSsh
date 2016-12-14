package com.cnpc.repository;

import com.cnpc.domain.weblogic.TivoliDBStatus;
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
@CacheConfig(cacheNames = {"countDbHosts", "countDbInstances", "countDbRunning", "countDbIllness", "countDbShutdown"})
public interface TivoliDBRepository extends JpaRepository<TivoliDBStatus, Timestamp> {

    List<TivoliDBStatus> findByHostnameLike(String hostname);

    @Query("select count(distinct t.hostname) from TivoliDBStatus t")
    @Cacheable(value = "countDbHosts")
    Long countDbHosts();

    @Query("select count(t) from TivoliDBStatus t")
    @Cacheable(value = "countDbInstances")
    Long countDbInstances();

    @Query("select count(t) from TivoliDBStatus t where t.status='Active'")
    @Cacheable(value = "countDbRunning")
    Long countDbRunning();

    @Query("select count(t) from TivoliDBStatus t where t.status='Inactive'")
    @Cacheable(value = "countDbShutdown")
    Long countDbShutdown();
}