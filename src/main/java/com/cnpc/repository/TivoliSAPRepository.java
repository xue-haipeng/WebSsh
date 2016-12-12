package com.cnpc.repository;

import com.cnpc.domain.weblogic.TivoliSAPStatus;
import com.cnpc.domain.weblogic.TivoliSAPStatus;
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
@CacheConfig(cacheNames = {"countSapHosts", "countSapInstances", "countSapRunning", "countSapIllness", "countSapShutdown"})
public interface TivoliSAPRepository extends JpaRepository<TivoliSAPStatus, Timestamp> {

    List<TivoliSAPStatus> findByHostnameLike(String hostname);

    @Query("select count(distinct t.hostname) from TivoliSAPStatus t")
    @Cacheable(value = "countSapHosts")
    Long countSapHosts();

    @Query("select count(t) from TivoliSAPStatus t")
    @Cacheable(value = "countSapInstances")
    Long countSapInstances();

    @Query("select count(t) from TivoliSAPStatus t where t.status='1'")
    @Cacheable(value = "countSapRunning")
    Long countSapRunning();

    @Query("select count(t) from TivoliSAPStatus t where t.status='3'")
    @Cacheable(value = "countSapIllness")
    Long countSapIllness();

    @Query("select count(t) from TivoliSAPStatus t where t.status='100'")
    @Cacheable(value = "countSapShutdown")
    Long countSapShutdown();

}