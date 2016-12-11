package com.cnpc.repository;

import com.cnpc.domain.weblogic.TivoliSAPStatus;
import com.cnpc.domain.weblogic.TivoliSAPStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by Xue on 12/01/16.
 */
@Repository
public interface TivoliSAPRepository extends JpaRepository<TivoliSAPStatus, Timestamp> {

    List<TivoliSAPStatus> findByHostnameLike(String hostname);

    @Query("select count(distinct t.hostname) from TivoliSAPStatus t")
    Long countSapHosts();

    @Query("select count(t) from TivoliSAPStatus t")
    Long countSapInstances();

    @Query("select count(t) from TivoliSAPStatus t where t.status='1'")
    Long countSapRunning();

    @Query("select count(t) from TivoliSAPStatus t where t.status='3'")
    Long countSapIllness();

    @Query("select count(t) from TivoliSAPStatus t where t.status='100'")
    Long countSapShutdown();

}