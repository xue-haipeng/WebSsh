package com.cnpc.controller;

import com.cnpc.domain.weblogic.PieBarData;
import com.cnpc.repository.TivoliWLSRepository;
import com.cnpc.service.weblogic.TivoliWLService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
