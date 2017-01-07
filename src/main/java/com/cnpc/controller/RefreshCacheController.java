package com.cnpc.controller;

import com.cnpc.repository.CacheEvictRepo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
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
    @Autowired
    AscsCpuInfoRepoEvict ascsCpuInfoRepoEvict;
    @Autowired
    AscsCpuCurrRepoEvict ascsCpuCurrRepoEvict;

    @RequestMapping("/refreshF5Cache")
    @Scheduled(fixedDelay = 420000)
    public String refreshCache() {
        cpuInfoRepoEvict.cpuBySystem();

        tivoliSAPRepositoryEvict.countSapHosts();
        tivoliSAPRepositoryEvict.countSapInstances();
        tivoliSAPRepositoryEvict.countSapRunning();
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

        ascsCpuInfoRepoEvict.findAll();
        ascsCpuInfoRepoEvict.average6_emp();
        ascsCpuInfoRepoEvict.average6_osp();
        ascsCpuInfoRepoEvict.average6_cop();
        ascsCpuInfoRepoEvict.average6_ep9();
        ascsCpuInfoRepoEvict.average6_zyp();
        ascsCpuInfoRepoEvict.average6_ep1();
        ascsCpuInfoRepoEvict.average6_ep4();
        ascsCpuInfoRepoEvict.average6_tkm();
        ascsCpuInfoRepoEvict.average6_ep6();
        ascsCpuInfoRepoEvict.average6_ep7();
        ascsCpuInfoRepoEvict.average6_cp6();
        ascsCpuInfoRepoEvict.average6_cpf();
        ascsCpuInfoRepoEvict.average6_cpo();
        ascsCpuInfoRepoEvict.average6_ep8();
        ascsCpuInfoRepoEvict.average6_cp8();
        ascsCpuInfoRepoEvict.average6_ep3();
        ascsCpuInfoRepoEvict.average6_cp3();
        ascsCpuInfoRepoEvict.average6_ep2();
        ascsCpuInfoRepoEvict.average6_cp2();
        ascsCpuInfoRepoEvict.average6_hp1();

        ascsCpuInfoRepoEvict.max6_emp();
        ascsCpuInfoRepoEvict.max6_osp();
        ascsCpuInfoRepoEvict.max6_cop();
        ascsCpuInfoRepoEvict.max6_ep9();
        ascsCpuInfoRepoEvict.max6_zyp();
        ascsCpuInfoRepoEvict.max6_ep1();
        ascsCpuInfoRepoEvict.max6_ep4();
        ascsCpuInfoRepoEvict.max6_tkm();
        ascsCpuInfoRepoEvict.max6_ep6();
        ascsCpuInfoRepoEvict.max6_ep7();
        ascsCpuInfoRepoEvict.max6_cp6();
        ascsCpuInfoRepoEvict.max6_cpf();
        ascsCpuInfoRepoEvict.max6_cpo();
        ascsCpuInfoRepoEvict.max6_ep8();
        ascsCpuInfoRepoEvict.max6_cp8();
        ascsCpuInfoRepoEvict.max6_ep3();
        ascsCpuInfoRepoEvict.max6_cp3();
        ascsCpuInfoRepoEvict.max6_ep2();
        ascsCpuInfoRepoEvict.max6_cp2();
        ascsCpuInfoRepoEvict.max6_hp1();
        ascsCpuCurrRepoEvict.findAll();
        return "OK";
    }
}
