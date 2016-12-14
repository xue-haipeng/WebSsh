package com.cnpc.repository.CacheEvictRepo;

import com.cnpc.domain.weblogic.TivoliSAPStatus;
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
@CacheConfig(cacheNames = {"countSapHosts", "countSapInstances", "countSapRunning", "countSapIllness", "countSapShutdown"})
public interface TivoliSAPRepositoryEvict extends JpaRepository<TivoliSAPStatus, Timestamp> {

    List<TivoliSAPStatus> findByHostnameLike(String hostname);

    @Query("select count(distinct t.hostname) from TivoliSAPStatus t")
    @CachePut(value = "countSapHosts")
    Long countSapHosts();

    @Query("select count(t) from TivoliSAPStatus t")
    @CachePut(value = "countSapInstances")
    Long countSapInstances();

    @Query("select count(t) from TivoliSAPStatus t where t.status='1'")
    @CachePut(value = "countSapRunning")
    Long countSapRunning();

    @Query("select count(t) from TivoliSAPStatus t where t.status='3'")
    @CachePut(value = "countSapIllness")
    Long countSapIllness();

    @Query("select count(t) from TivoliSAPStatus t where t.status='100'")
    @CachePut(value = "countSapShutdown")
    Long countSapShutdown();

}