package com.cnpc.repository;

import com.cnpc.domain.weblogic.TivoliWLStatus;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by Xue on 12/01/16.
 */
@Repository
@CacheConfig(cacheNames = {"wls_findByHostnameLike","countWlsHosts","countWlsInstances","countWlsRunning"})
public interface TivoliWLSRepository extends JpaRepository<TivoliWLStatus, Timestamp> {

    @Cacheable(value = "wls_findByHostnameLike")
    List<TivoliWLStatus> findByHostnameLike(String hostname);

    @Query("select count(distinct t.hostname) from TivoliWLStatus t")
    @Cacheable(value = "countWlsHosts")
    Long countWlsHosts();

    @Query("select count(t) from TivoliWLStatus t")
    @Cacheable(value = "countWlsInstances")
    Long countWlsInstances();

    @Query("select count(t) from TivoliWLStatus t where t.status='1'")
    @Cacheable(value = "countWlsRunning")
    Long countWlsRunning();

    @Query("select count(t) from TivoliWLStatus t where t.status='3'")
    @Cacheable(value = "countWlsIllness")
    Long countWlsIllness();

    @Query("select count(t) from TivoliWLStatus t where t.status='100'")
    @Cacheable(value = "countWlsShutdown")
    Long countWlsShutdown();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AP_0%' and t.status='1'")
    @Cacheable(value = "countJcptRunningP")
    Long countJcptRunningP();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AQ_0%' and t.status='1'")
    @Cacheable(value = "countJcptRunningQ")
    Long countJcptRunningQ();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AD_0%' and t.status='1'")
    @Cacheable(value = "countJcptRunningD")
    Long countJcptRunningD();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AT_0%' and t.status='1'")
    @Cacheable(value = "countJcptRunningT")
    Long countJcptRunningT();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AP_0%' and t.status='3'")
    @Cacheable(value = "countJcptIllnessP")
    Long countJcptIllnessP();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AQ_0%' and t.status='3'")
    @Cacheable(value = "countJcptIllnessQ")
    Long countJcptIllnessQ();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AD_0%' and t.status='3'")
    @Cacheable(value = "countJcptIllnessD")
    Long countJcptIllnessD();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AT_0%' and t.status='3'")
    @Cacheable(value = "countJcptIllnessT")
    Long countJcptIllnessT();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AP_0%' and t.status='100'")
    @Cacheable(value = "countJcptShutdownP")
    Long countJcptShutdownP();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AQ_0%' and t.status='100'")
    @Cacheable(value = "countJcptShutdownQ")
    Long countJcptShutdownQ();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AD_0%' and t.status='100'")
    @Cacheable(value = "countJcptShutdownD")
    Long countJcptShutdownD();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AT_0%' and t.status='100'")
    @Cacheable(value = "countJcptShutdownT")
    Long countJcptShutdownT();
}