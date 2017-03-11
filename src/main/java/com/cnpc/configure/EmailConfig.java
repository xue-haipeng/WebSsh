package com.cnpc.configure;

import org.springframework.context.annotation.Bean;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Component;

/**
 * Created by Xue on 03/11/17.
 */
@Component
public class EmailConfig {

    @Bean
    public JavaMailSender mailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.163.com");
        mailSender.setUsername("hpxue13@163.com");
        mailSender.setPassword("8121812");
        mailSender.setDefaultEncoding("UTF-8");
        return mailSender;
    }

}