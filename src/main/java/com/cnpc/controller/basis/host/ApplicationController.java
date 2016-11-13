package com.cnpc.controller.basis.host;

import com.cnpc.controller.basis.ModelView;
import com.cnpc.domain.basis.Application;
import com.cnpc.service.basis.ApplicationService;
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
public class ApplicationController extends ModelView {

    @Resource
    ApplicationService applicationService;

    @RequestMapping("/basis/host/application/addApplication")
    @ResponseBody
    public String addApplication(HttpServletRequest request,
                          HttpServletResponse response, Application application) throws Exception {
        applicationService.addApplication(application);
        return "success";
    }

    @RequestMapping("/basis/host/application/deleteApplication")
    @ResponseBody
    public String deleteApplication(HttpServletRequest request,
                             HttpServletResponse response, @RequestParam Long[] ids) throws Exception {
        List<Long> list = new ArrayList<>();
        for (Long id : ids) {
            list.add(id);
        }
        applicationService.deleteApplication(list);
        return "sucess";
    }

    @RequestMapping("/basis/host/application/getApplicationList")
    @ResponseBody
    public Map<String, Object> getApplicationList(HttpServletRequest request, HttpServletResponse response,
                                           @RequestParam int limit, @RequestParam int offset, @RequestParam String search,
                                           @RequestParam String order, @RequestParam String sort) throws Exception {
        Map<String, Object> map = new HashMap();
        List<Application> list = applicationService.getApplicationList(offset, limit, sort, order, search);
        map.put("total", applicationService.getApplicationList(0, -1, sort, order, search).size());
        map.put("rows", list);
        return map;
    }

    @RequestMapping("/basis/host/application/updateApplication")
    @ResponseBody
    public String updateApplication(HttpServletRequest request, HttpServletResponse response, Application application) throws Exception {
        applicationService.updateApplication(application);
        return "success";
    }

    @RequestMapping("/basis/host/application/addApplicationView")
    public ModelAndView addApplicationView(HttpServletRequest request, HttpServletResponse response) {
        return createSingleView("basis/host/application/addApplication", request, response);
    }

    @RequestMapping("/basis/host/application/updateApplicationView")
    public ModelAndView updateApplicationView(HttpServletRequest request, HttpServletResponse response) {
        return createSingleView("basis/host/application/updateApplication", request, response);
    }
}