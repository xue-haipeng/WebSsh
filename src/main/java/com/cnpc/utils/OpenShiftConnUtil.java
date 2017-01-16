package com.cnpc.utils;

import io.fabric8.kubernetes.client.Config;
import io.fabric8.kubernetes.client.ConfigBuilder;
import io.fabric8.kubernetes.client.KubernetesClientException;
import io.fabric8.openshift.client.DefaultOpenShiftClient;
import io.fabric8.openshift.client.OpenShiftClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;

/**
 * Created by Xue on 01/15/17.
 */
public class OpenShiftConnUtil {
    private static final Logger logger = LoggerFactory.getLogger(OpenShiftConnUtil.class);
    private static final String masterUrl = "https://lb.cloud.cnpc:8443";
    private static final String username = "xuehaipeng";
    private static final String passwd = "ramily";
    public static OpenShiftClient client;

    public static OpenShiftClient newConnection() {
        Config config = new ConfigBuilder().withMasterUrl(masterUrl)
                .withUsername(username).withPassword(passwd).build();
        OpenShiftClient openShiftClient = new DefaultOpenShiftClient(config);
        return openShiftClient;
    }

    public static OpenShiftClient getOpenShiftClient() {
        if (client != null) {
            logger.info("OpenShiftClient doesn't exist, creating ....");
            return client;
        } else {
            logger.info("OpenShiftClient is available, returning to the invoker ....");
            return newConnection();
        }
    }
    @Scheduled(fixedDelay = 1680000)
    public static void refreshConnection() {
        if (client == null) {
            client = newConnection();
        } else {
            try {
                client.namespaces().list().getItems().size();
            } catch (KubernetesClientException e) {
                logger.error(e.getMessage(), e);
                client = newConnection();
            }
        }
    }
}