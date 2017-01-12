package com.cnpc.controller;

import com.cnpc.service.OscpObjectCountService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Created by Xue on 01/12/17.
 */
@RestController
public class OpenShiftController {

    @RequestMapping("/openshift/objectCount")
    public Map<String, Integer> countObject() throws InterruptedException {
        return OscpObjectCountService.objectCount();
    }
}
