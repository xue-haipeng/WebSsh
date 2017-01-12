package com.cnpc.service;

import io.fabric8.kubernetes.api.model.*;
import io.fabric8.kubernetes.client.Config;
import io.fabric8.kubernetes.client.ConfigBuilder;
import io.fabric8.kubernetes.client.DefaultKubernetesClient;
import io.fabric8.kubernetes.client.KubernetesClient;
import io.fabric8.openshift.api.model.BuildConfigList;
import io.fabric8.openshift.api.model.DeploymentConfigList;
import io.fabric8.openshift.api.model.ImageStreamList;
import io.fabric8.openshift.api.model.RouteList;
import io.fabric8.openshift.client.DefaultOpenShiftClient;
import io.fabric8.openshift.client.OpenShiftClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 01/12/17.
 */
@Component
public class OscpObjectCountService {
    private static final Logger logger = LoggerFactory.getLogger(OscpObjectCountService.class);

    public static Map<String, Integer> objectCount() throws InterruptedException {
        Map<String, Integer> map = new HashMap<>();

        Config config = new ConfigBuilder().withMasterUrl("https://lb.cloud.cnpc:8443")
                .withUsername("xuehaipeng").withPassword("ramily").build();
        KubernetesClient kubernetesClient = new DefaultKubernetesClient(config);   //设计成连接池
        OpenShiftClient client = new DefaultOpenShiftClient(config);

        List<Namespace> namespaceList = client.namespaces().list().getItems();
        NodeList nodeList = client.nodes().list();

        int namespaces = namespaceList.size();
        int nodes = nodeList.getItems().size();
        int routes = 0;
        int services = 0;
        int dcs = 0;
        int bcs = 0;
        int iss = 0;
        int pods = 0;

        for (Namespace ns : namespaceList) {
            RouteList routeList = client.routes().inNamespace(ns.getMetadata().getName()).list();
            routes += routeList.getItems().size();
            ServiceList serviceList = client.services().inNamespace(ns.getMetadata().getName()).list();
            services += serviceList.getItems().size();
            DeploymentConfigList dcList = client.deploymentConfigs().inNamespace(ns.getMetadata().getName()).list();
            dcs += dcList.getItems().size();
            BuildConfigList bcList = client.buildConfigs().inNamespace(ns.getMetadata().getName()).list();
            bcs += bcList.getItems().size();
            ImageStreamList imageStreamList = client.imageStreams().inNamespace(ns.getMetadata().getName()).list();
            iss += imageStreamList.getItems().size();
            PodList podList = client.pods().inNamespace(ns.getMetadata().getName()).list();
            pods += podList.getItems().size();
        }

        map.put("namespaces", namespaces);
        map.put("nodes", nodes);
        map.put("routes", routes);
        map.put("services", services);
        map.put("dcs", dcs);
        map.put("bcs", bcs);
        map.put("iss", iss);
        map.put("pods", pods);

        return map;
    }

}
