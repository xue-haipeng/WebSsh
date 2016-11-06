package com.cnpc.controller.basis.host;

import com.cnpc.controller.basis.ModelView;
import com.cnpc.domain.basis.Host;
import com.cnpc.service.basis.HostService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 11/06/16.
 */
@Controller
public class HostController extends ModelView {

    @Resource
    HostService hostService;

    @RequestMapping("/basis/host/host/addHost")
    @ResponseBody
    public String addHost(HttpServletRequest request,
                          HttpServletResponse response, Host host) throws Exception {
        hostService.addHost(host);
        return "success";
    }

    @RequestMapping("/basis/host/host/deleteHost")
    @ResponseBody
    public String deleteHost(HttpServletRequest request,
                             HttpServletResponse response, @RequestParam String[] ids) throws Exception {
        List<String> list = new ArrayList<String>();
        for (String id : ids) {
            list.add(id);
        }
        hostService.deleteHost(list);
        return "sucess";
    }


    @RequestMapping("/basis/host/host/getHostList")
    @ResponseBody
    public Map<String, Object> getHostList(HttpServletRequest request, HttpServletResponse response,
                                           @RequestParam int limit, @RequestParam int offset, @RequestParam String search,
                                           @RequestParam String order, @RequestParam String sort) throws Exception {
        Map<String, Object> map = new HashMap();
        List<Host> list = hostService.getHostList(offset, limit, sort, order, search);
        map.put("total", hostService.getHostList(0, -1, sort, order, search).size());
        map.put("rows", list);
        return map;
    }


    @RequestMapping("/basis/host/host/updateHost")
    @ResponseBody
    public String updateHost(HttpServletRequest request, HttpServletResponse response, Host host) throws Exception {
        hostService.updateHost(host);
        return "success";
    }

//    @RequestMapping("/basis/host/host/listHost")
//    public ModelAndView hostList(HttpServletRequest request, HttpServletResponse response) {
//        return createLayoutView("host/host/hostList", request, response);
//    }

    @RequestMapping("/basis/host/host/addHostView")
    public ModelAndView addHostView(HttpServletRequest request, HttpServletResponse response) {
        return createSingleView("host/host/addHost", request, response);
    }

    @RequestMapping("/basis/host/host/updateHostView")
    public ModelAndView updateHostView(HttpServletRequest request, HttpServletResponse response) {
        return createSingleView("host/host/updateHost", request, response);
    }
}