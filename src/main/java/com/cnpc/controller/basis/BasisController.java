package com.cnpc.controller.basis;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Xue on 11/06/16.
 */
@Controller
public class BasisController {

    @RequestMapping("/basis/index")
    public ModelAndView index(HttpServletRequest request, HttpServletResponse response){
        ModelAndView view = ModelView.createLayoutView("basis/index", request, response);
        return view;
    }
}
