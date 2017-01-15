package com.cnpc.service;

import com.cnpc.utils.OpenShiftConnUtil;
import io.fabric8.kubernetes.api.model.Namespace;
import io.fabric8.kubernetes.api.model.NodeList;
import io.fabric8.kubernetes.api.model.PodList;
import io.fabric8.kubernetes.api.model.ServiceList;
import io.fabric8.openshift.api.model.BuildConfigList;
import io.fabric8.openshift.api.model.DeploymentConfigList;
import io.fabric8.openshift.api.model.ImageStreamList;
import io.fabric8.openshift.api.model.RouteList;
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

        OpenShiftClient client = OpenShiftConnUtil.getOpenShiftClient();

        List<Namespace> namespaceList = client.namespaces().list().getItems();
        NodeList nodeList = client.nodes().list();
        ImageStreamList imageStreamList = client.imageStreams().inAnyNamespace().list();

        int namespaces = namespaceList.size();
        int nodes = nodeList.getItems().size();
        int routes = 0;
        int services = 0;
        int dcs = 0;
        int bcs = 0;
        int iss = imageStreamList.getItems().size();
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
