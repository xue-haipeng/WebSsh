package com.cnpc.controller;

import com.cnpc.service.OscpObjectCountService;
import com.cnpc.service.OscpObjectDetailsService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 01/12/17.
 */
@RestController
public class OpenShiftRestController {

    @RequestMapping("/openshift/objectCount")
    public Map<String, Integer> countObject() throws InterruptedException {
        return OscpObjectCountService.objectCount();
    }

    @RequestMapping("/openshift/getProjectResources")
    public List<Map<String, String>> getProjectResources() {
        return OscpObjectDetailsService.getProjectResources();
    }
    @RequestMapping("/openshift/getNodeResources")
    public List<Map<String, String>> getNodeResources() {
        return OscpObjectDetailsService.getNodeResources();
    }
    @RequestMapping("/openshift/getRouteResources")
    public List<Map<String, String>> getRouteResources() {
        return OscpObjectDetailsService.getRouteResources();
    }
    @RequestMapping("/openshift/getSvcResources")
    public List<Map<String, String>> getSvcResources() {
        return OscpObjectDetailsService.getSvcResources();
    }
    @RequestMapping("/openshift/getDcResources")
    public List<Map<String, String>> getDcResources() {
        return OscpObjectDetailsService.getDcResources();
    }
    @RequestMapping("/openshift/getBcResources")
    public List<Map<String, String>> getBcResources() {
        return OscpObjectDetailsService.getBcResources();
    }
    @RequestMapping("/openshift/getIsResources")
    public List<Map<String, String>> getIsResources() {
        return OscpObjectDetailsService.getIsResources();
    }
    @RequestMapping("/openshift/getPodResources")
    public List<Map<String, String>> getPodResources() {
        return OscpObjectDetailsService.getPodResources();
    }
}
