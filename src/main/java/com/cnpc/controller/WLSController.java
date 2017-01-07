package com.cnpc.controller;

import com.cnpc.domain.weblogic.PieBarData;
import com.cnpc.repository.TivoliWLSRepository;
import com.cnpc.service.weblogic.TivoliWLService;
import com.cnpc.utils.NetWorkUtil;
import com.cnpc.utils.SystemUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.management.ManagementFactory;
import java.lang.management.RuntimeMXBean;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 12/03/16.
 */
@RestController
public class WLSController {

    @Autowired
    TivoliWLSRepository repository;

    @RequestMapping("/tivoliPolling/{type}")
    public PieBarData tivoliPolling(@PathVariable("type") String type) {
        return TivoliWLService.computeStatus(repository);
    }

    @RequestMapping("/loadbalanceTest")
    public List<Map<String, String>> lbTest() {
        List<Map<String, String>> list = NetWorkUtil.getAllNics();
        Map<String, String> map = new HashMap<>();
        RuntimeMXBean runtime = ManagementFactory.getRuntimeMXBean();
        map.put("pid", runtime.getName().split("@")[0]);
        list.add(map);
        return list;
    }

    @RequestMapping("/resourceQuotaTest")
    public Map<String, String> rqTest() {
        return SystemUtil.getSysInfo();
    }

}
