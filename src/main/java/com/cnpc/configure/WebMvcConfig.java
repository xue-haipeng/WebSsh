package com.cnpc.configure;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by Xue on 11/02/16.
 */
@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    public void addViewControllers (ViewControllerRegistry registry) {
        registry.addViewController("/login").setViewName("login");
    }
}
