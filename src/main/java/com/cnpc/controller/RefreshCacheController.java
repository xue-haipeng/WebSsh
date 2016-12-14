package com.cnpc.controller;

import com.cnpc.repository.CacheEvictRepo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Xue on 12/12/16.
 */
@RestController
public class RefreshCacheController {

    @Autowired
    CpuInfoRepoEvict cpuInfoRepoEvict;
    @Autowired
    TivoliSAPRepositoryEvict tivoliSAPRepositoryEvict;
    @Autowired
    TivoliWASRepositoryEvict tivoliWASRepositoryEvict;
    @Autowired
    TivoliWLSRepositoryEvict tivoliWLSRepositoryEvict;
    @Autowired
    TopCpuHostRepoEvict topCpuHostRepoEvict;

    @RequestMapping("/refreshF5Cache")
    public String refreshCache() {
        cpuInfoRepoEvict.cpuBySystem();

        tivoliSAPRepositoryEvict.countSapHosts();
        tivoliSAPRepositoryEvict.countSapInstances();
        tivoliSAPRepositoryEvict.countSapRunning();
        tivoliSAPRepositoryEvict.countSapIllness();
        tivoliSAPRepositoryEvict.countSapShutdown();

        tivoliWASRepositoryEvict.countWasHosts();
        tivoliWASRepositoryEvict.countWasInstances();
        tivoliWASRepositoryEvict.countWasRunning();
        tivoliWASRepositoryEvict.countWasIllness();
        tivoliWASRepositoryEvict.countWasShutdown();

        tivoliWLSRepositoryEvict.findByHostnameLike("EXOAPS0%");
        tivoliWLSRepositoryEvict.findByHostnameLike("EXOAPF0%");
        tivoliWLSRepositoryEvict.findByHostnameLike("EXOAP40%");
        tivoliWLSRepositoryEvict.findByHostnameLike("EXOAPO0%");
        tivoliWLSRepositoryEvict.findByHostnameLike("EXRAPT0%");
        tivoliWLSRepositoryEvict.findByHostnameLike("EXMAPT0%");
        tivoliWLSRepositoryEvict.findByHostnameLike("EXBAPT0%");
        tivoliWLSRepositoryEvict.findByHostnameLike("EXSAPT0%");
        tivoliWLSRepositoryEvict.findByHostnameLike("EXFAPT0%");
        tivoliWLSRepositoryEvict.countWlsHosts();
        tivoliWLSRepositoryEvict.countWlsInstances();
        tivoliWLSRepositoryEvict.countWlsRunning();
        tivoliWLSRepositoryEvict.countWlsIllness();
        tivoliWLSRepositoryEvict.countWlsShutdown();
        tivoliWLSRepositoryEvict.countJcptRunningP();
        tivoliWLSRepositoryEvict.countJcptIllnessP();
        tivoliWLSRepositoryEvict.countJcptShutdownP();
        tivoliWLSRepositoryEvict.countJcptRunningQ();
        tivoliWLSRepositoryEvict.countJcptIllnessQ();
        tivoliWLSRepositoryEvict.countJcptShutdownQ();
        tivoliWLSRepositoryEvict.countJcptRunningD();
        tivoliWLSRepositoryEvict.countJcptIllnessD();
        tivoliWLSRepositoryEvict.countJcptShutdownD();
        tivoliWLSRepositoryEvict.countJcptRunningT();
        tivoliWLSRepositoryEvict.countJcptIllnessT();
        tivoliWLSRepositoryEvict.countJcptShutdownT();

        topCpuHostRepoEvict.findAll();

        return "OK";
    }
}
