package com.cnpc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Xue on 01/12/17.
 */
@Controller
public class OpenShiftController {

    @RequestMapping("/openshift/getProjectModal")
    public String getProjectModal() {
        return "openshift/projectModalPage";
    }

}
