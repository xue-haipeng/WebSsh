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
                "countWasHosts", "countWasInstances", "countWasRunning", "countWasIllness", "countWasShutdown", "countDbHosts", "countDbInstances", "countDbRunning", "countDbShutdown", "xoapsCpuBySystem", "topCpuHostFindAll", "ascsFindAll");
    }
}
