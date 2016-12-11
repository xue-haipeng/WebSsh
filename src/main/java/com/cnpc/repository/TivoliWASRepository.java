package com.cnpc.repository;

import com.cnpc.domain.weblogic.TivoliWAStatus;
import com.cnpc.domain.weblogic.TivoliWAStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by Xue on 12/01/16.
 */
@Repository
public interface TivoliWASRepository extends JpaRepository<TivoliWAStatus, Timestamp> {

    List<TivoliWAStatus> findByHostnameLike(String hostname);

    @Query("select count(distinct t.hostname) from TivoliWAStatus t")
    Long countWasHosts();

    @Query("select count(t) from TivoliWAStatus t")
    Long countWasInstances();

    @Query("select count(t) from TivoliWAStatus t where t.status='1'")
    Long countWasRunning();

    @Query("select count(t) from TivoliWAStatus t where t.status='3'")
    Long countWasIllness();

    @Query("select count(t) from TivoliWAStatus t where t.status='100'")
    Long countWasShutdown();

}