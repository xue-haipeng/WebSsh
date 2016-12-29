package com.cnpc.configure;

import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Created by Xue on 12/11/16.
 */
@Configuration
@EnableCaching
public class RedisConfig {
    @Bean
    public CacheManager cacheManager() {
        return new ConcurrentMapCacheManager("wls_findByHostnameLike", "countWlsHosts", "countWlsInstances", "countWlsRunning",
                "countWlsIllness", "countWlsShutdown", "countJcptRunningP", "countJcptRunningQ", "countJcptRunningD", "countJcptRunningT",
                "countJcptIllnessP", "countJcptIllnessQ", "countJcptIllnessD", "countJcptIllnessT", "countJcptShutdownP", "countJcptShutdownQ",
                "countJcptShutdownD", "countJcptShutdownT", "countSapHosts", "countSapInstances", "countSapRunning", "countSapShutdown",
                "countWasHosts", "countWasInstances", "countWasRunning", "countWasIllness", "countWasShutdown", "countDbHosts", "countDbInstances",
                "countDbRunning", "countDbShutdown", "xoapsCpuBySystem", "topCpuHostFindAll", "ascsFindAll", "average6_emp", "average6_osp",
                "average6_cop", "average6_ep9", "average6_zyp", "average6_ep1", "average6_ep4", "average6_tkm", "average6_ep6", "average6_ep7",
                "average6_cp6", "average6_cpf", "average6_cpo", "average6_ep8", "average6_cp8", "average6_ep3", "average6_cp3", "average6_ep2",
                "average6_cp2", "average6_hp1", "max6_emp", "max6_osp", "max6_cop", "max6_ep9", "max6_zyp", "max6_ep1", "max6_ep4", "max6_tkm",
                "max6_ep6", "max6_ep7", "max6_cp6", "max6_cpf", "max6_cpo", "ascsCpuCurrFindAll", "max6_ep8", "max6_cp8", "max6_ep3", "max6_cp3",
                "max6_ep2", "max6_cp2", "max6_hp1");
    }
}
