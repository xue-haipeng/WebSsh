package com.cnpc.repository.basis;

import com.cnpc.service.basis.HostService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Xue on 11/21/16.
 */

@RestController
public class JudgeLocationController {

    @RequestMapping(value = "/basis/host/host/judgeLocation")
    public String IpHint(@RequestParam(value="ip") String ip) {
        return HostService.judgeLocation(ip);
    }
}
