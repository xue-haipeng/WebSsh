package com.cnpc.service;

import com.cnpc.utils.OpenShiftConnUtil;
import io.fabric8.kubernetes.api.model.Namespace;
import io.fabric8.kubernetes.api.model.Node;
import io.fabric8.openshift.client.OpenShiftClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 01/12/17.
 */
@Component
public class OscpObjectDetailsService {
    private static final Logger logger = LoggerFactory.getLogger(OscpObjectDetailsService.class);

    public static List<Map<String, String>> getProjectResources() {
        List<Map<String, String>> list = new ArrayList<>();
        OpenShiftClient client = OpenShiftConnUtil.getOpenShiftClient();
        List<Namespace> namespaceList = client.namespaces().list().getItems();
        namespaceList.forEach(namespace -> {
            Map<String, String> map = new HashMap<>();
            map.put("name", namespace.getMetadata().getName());
            map.put("status", namespace.getStatus().getPhase());
            if (namespace.getMetadata().getLabels() != null) {
                map.put("labels", namespace.getMetadata().getLabels().toString());
            } else {
                map.put("labels", "");
            }
            list.add(map);
        });

        logger.info(list.toString());
        return list;
    }

    public static List<Map<String, String>> getNodeResources() {
        List<Map<String, String>> list = new ArrayList<>();
        OpenShiftClient client = OpenShiftConnUtil.getOpenShiftClient();
        List<Node> nodeList = client.nodes().list().getItems();
        nodeList.forEach(node -> {
            Map<String, String> map = new HashMap<>();
            map.put("name", node.getMetadata().getName());
            if (node.getStatus().getPhase() != null) {
                map.put("status", node.getStatus().getPhase());
            } else {
                map.put("status", "");
            }
            if (node.getMetadata().getLabels() != null) {
                map.put("labels", node.getMetadata().getLabels().toString());
            } else {
                map.put("labels", "");
            }
            list.add(map);
        });

        logger.info(list.toString());
        return list;
    }

    public static List<Map<String, String>> getRouteResources() {
        List<Map<String, String>> list = new ArrayList<>();
        OpenShiftClient client = OpenShiftConnUtil.getOpenShiftClient();
        List<Namespace> namespaceList = client.namespaces().list().getItems();
        namespaceList.forEach(namespace -> {
            client.routes().inNamespace(namespace.getMetadata().getName()).list().getItems().forEach(route -> {
                Map<String, String> map = new HashMap<>();
                map.put("project", route.getMetadata().getNamespace());
                map.put("name", route.getMetadata().getName());
                map.put("route", route.getSpec().getHost());
                list.add(map);
            });
        });
        logger.info(list.toString());
        return list;
    }

    public static List<Map<String, String>> getSvcResources() {
        List<Map<String, String>> list = new ArrayList<>();
        OpenShiftClient client = OpenShiftConnUtil.getOpenShiftClient();
        client.namespaces().list().getItems().forEach(namespace -> {
            client.services().inNamespace(namespace.getMetadata().getName()).list().getItems().forEach(service -> {
                Map<String, String> map = new HashMap<>();
                map.put("project", service.getMetadata().getNamespace());
                map.put("name", service.getMetadata().getName());
                if (service.getSpec().getSelector() != null) {
//                    int len = service.getSpec().getSelector().toString().length();
                    map.put("selector", service.getSpec().getSelector().toString());
                } else {
                    map.put("selector", "");
                }
                list.add(map);
            });
        });

        logger.info(list.toString());
        return list;
    }

    public static List<Map<String, String>> getDcResources() {
        List<Map<String, String>> list = new ArrayList<>();
        OpenShiftClient client = OpenShiftConnUtil.getOpenShiftClient();
        client.namespaces().list().getItems().forEach(namespace -> {
            client.deploymentConfigs().inNamespace(namespace.getMetadata().getName()).list().getItems().forEach(dc -> {
                Map<String, String> map = new HashMap<>();
                map.put("project", dc.getMetadata().getNamespace());
                map.put("name", dc.getMetadata().getName());
                map.put("replica", dc.getSpec().getReplicas().toString());
                list.add(map);
            });
        });

        logger.info(list.toString());
        return list;
    }

    public static List<Map<String, String>> getBcResources() {
        List<Map<String, String>> list = new ArrayList<>();
        OpenShiftClient client = OpenShiftConnUtil.getOpenShiftClient();
        client.namespaces().list().getItems().forEach(namespace -> {
            client.buildConfigs().inNamespace(namespace.getMetadata().getName()).list().getItems().forEach(bc -> {
                Map<String, String> map = new HashMap<>();
                map.put("project", bc.getMetadata().getNamespace());
                map.put("name", bc.getMetadata().getName());
                map.put("output", bc.getSpec().getOutput().getTo().getName());
                list.add(map);
            });
        });

        logger.info(list.toString());
        return list;
    }

    public static List<Map<String, String>> getIsResources() {
        List<Map<String, String>> list = new ArrayList<>();
        OpenShiftClient client = OpenShiftConnUtil.getOpenShiftClient();
        client.namespaces().list().getItems().forEach(namespace -> {
            client.imageStreams().inNamespace(namespace.getMetadata().getName()).list().getItems().forEach(is -> {
                Map<String, String> map = new HashMap<>();
                map.put("project", is.getMetadata().getNamespace());
                map.put("name", is.getMetadata().getName());
                map.put("imageRepo", is.getStatus().getDockerImageRepository());
                list.add(map);
            });
        });

        logger.info(list.toString());
        return list;
    }

    public static List<Map<String, String>> getPodResources() {
        List<Map<String, String>> list = new ArrayList<>();
        OpenShiftClient client = OpenShiftConnUtil.getOpenShiftClient();
        client.namespaces().list().getItems().forEach(namespace -> {
            client.pods().inNamespace(namespace.getMetadata().getName()).list().getItems().forEach(pod -> {
                Map<String, String> map = new HashMap<>();
                map.put("project", pod.getMetadata().getNamespace());
                map.put("name", pod.getMetadata().getName());
                map.put("phase", pod.getStatus().getPhase());
                list.add(map);
            });
        });

        logger.info(list.toString());
        return list;
    }

}
