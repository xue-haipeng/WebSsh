package com.cnpc.repository.CacheEvictRepo;

import com.cnpc.domain.weblogic.TivoliWLStatus;
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
@CacheConfig(cacheNames = {"wls_findByHostnameLike", "countWlsHosts", "countWlsInstances", "countWlsRunning", "countWlsIllness", "countWlsShutdown", "countJcptRunningP", "countJcptRunningQ", "countJcptRunningD", "countJcptRunningT", "countJcptIllnessP", "countJcptIllnessQ", "countJcptIllnessD", "countJcptIllnessT", "countJcptShutdownP", "countJcptShutdownQ", "countJcptShutdownD", "countJcptShutdownT"})
public interface TivoliWLSRepositoryEvict extends JpaRepository<TivoliWLStatus, Timestamp> {

    @CachePut(value = "wls_findByHostnameLike")
    List<TivoliWLStatus> findByHostnameLike(String hostname);

    @Query("select count(distinct t.hostname) from TivoliWLStatus t")
    @CachePut(value = "countWlsHosts")
    Long countWlsHosts();

    @Query("select count(t) from TivoliWLStatus t")
    @CachePut(value = "countWlsInstances")
    Long countWlsInstances();

    @Query("select count(t) from TivoliWLStatus t where t.status='1'")
    @CachePut(value = "countWlsRunning")
    Long countWlsRunning();

    @Query("select count(t) from TivoliWLStatus t where t.status='3'")
    @CachePut(value = "countWlsIllness")
    Long countWlsIllness();

    @Query("select count(t) from TivoliWLStatus t where t.status='100'")
    @CachePut(value = "countWlsShutdown")
    Long countWlsShutdown();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AP_0%' and t.status='1'")
    @CachePut(value = "countJcptRunningP")
    Long countJcptRunningP();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AQ_0%' and t.status='1'")
    @CachePut(value = "countJcptRunningQ")
    Long countJcptRunningQ();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AD_0%' and t.status='1'")
    @CachePut(value = "countJcptRunningD")
    Long countJcptRunningD();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AT_0%' and t.status='1'")
    @CachePut(value = "countJcptRunningT")
    Long countJcptRunningT();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AP_0%' and t.status='3'")
    @CachePut(value = "countJcptIllnessP")
    Long countJcptIllnessP();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AQ_0%' and t.status='3'")
    @CachePut(value = "countJcptIllnessQ")
    Long countJcptIllnessQ();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AD_0%' and t.status='3'")
    @CachePut(value = "countJcptIllnessD")
    Long countJcptIllnessD();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AT_0%' and t.status='3'")
    @CachePut(value = "countJcptIllnessT")
    Long countJcptIllnessT();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AP_0%' and t.status='100'")
    @CachePut(value = "countJcptShutdownP")
    Long countJcptShutdownP();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AQ_0%' and t.status='100'")
    @CachePut(value = "countJcptShutdownQ")
    Long countJcptShutdownQ();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AD_0%' and t.status='100'")
    @CachePut(value = "countJcptShutdownD")
    Long countJcptShutdownD();

    @Query("select count(t) from TivoliWLStatus t where t.hostname like 'EX_AT_0%' and t.status='100'")
    @CachePut(value = "countJcptShutdownT")
    Long countJcptShutdownT();
}