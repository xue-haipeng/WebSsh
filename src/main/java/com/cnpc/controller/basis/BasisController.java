package com.cnpc.controller.basis;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static com.cnpc.controller.basis.ModelView.createLayoutView;

/**
 * Created by Xue on 11/06/16.
 */
@Controller
public class BasisController {

    @RequestMapping("/basis")
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response){
        ModelAndView mv = createLayoutView("basis/index", request, response);
//        mv.addObject("request_url", "/basis/index :: content");
        return mv;
    }

    @RequestMapping("/basis/host/host/listHost")
    public ModelAndView hostList(HttpServletRequest request, HttpServletResponse response) {
        ModelAndView mv = createLayoutView("basis/layout_hostList", "basis/layout_hostList", request, response);
//        mv.addObject("request_url", "/basis/host/host/hostList :: content");
        return mv;
    }
/*

    @RequestMapping("/basis/host/host/addHostView")
    public ModelAndView hostAdd(HttpServletRequest request, HttpServletResponse response) {
        ModelAndView mv = createLayoutView("basis/layout_hostAdd", "basis/layout_hostAdd", request, response);
        return mv;
    }

    @RequestMapping("/basis/host/host/updateHostView")
    public ModelAndView hostUpdate(HttpServletRequest request, HttpServletResponse response) {
        ModelAndView mv = createLayoutView("basis/layout_hostUpdate", "basis/layout_hostUpdate", request, response);
        return mv;
    }
*/

}
