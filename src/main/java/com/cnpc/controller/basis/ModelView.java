package com.cnpc.controller.basis;

/**
 * Created by Xue on 11/06/16.
 */
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ModelView {
    /**
     * 单页视图Model
     * @param fileName
     * @param request
     * @param response
     * @return
     */
    protected static ModelAndView createSingleView(String fileName,
                                            HttpServletRequest request, HttpServletResponse response) {
        ModelAndView view = new ModelAndView();
        view.addObject("basePath","basis");
        view.setViewName(fileName);
        return view;
    }

    /**
     * 布局页视图Model
     * @param fileName
     * @param layout
     * @param request
     * @param response
     * @return
     */
    protected static ModelAndView createLayoutView(String fileName, String layout,
                                                   HttpServletRequest request, HttpServletResponse response) {
        ModelAndView view = new ModelAndView();
        if (layout != null && !layout.equals("")) {
            view.setViewName(layout);
        } else
            view.setViewName("basis/common/layout");
        view.addObject("header_path", "basis/common/header.html");
        view.addObject("left_path", "basis/common/left.html");
        view.addObject("content_path", fileName + ".html");
        view.addObject("basePath","basis");
        return view;
    }

    protected static ModelAndView createLayoutView(String fileName,
                                                   HttpServletRequest request, HttpServletResponse response) {
        return createLayoutView(fileName, null, request, response);
    }
}
