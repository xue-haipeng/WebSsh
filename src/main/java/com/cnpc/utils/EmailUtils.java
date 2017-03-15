package com.cnpc.utils;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 03/11/17.
 */

public class EmailUtils {

    public static void sendSimpleMail(String sendFrom, String sendTo, String subject, String content, JavaMailSender mailSender) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(sendFrom);
        message.setTo(sendTo);
        message.setSubject(subject);
        message.setText(content);
        mailSender.send(message);
    }

    public static void sendMimeMail(String sendFrom, List<String> recipients, String title, String content, JavaMailSender mailSender) throws MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage,true);
        helper.setFrom(sendFrom);
        helper.setSubject(title);
        helper.setText("<html><body><p style: \"font-size: 14px; font-family: 'Microsoft Yahei', 微软雅黑\">亲爱的系统用户：<br />" +
                "&nbsp;&nbsp;&nbsp;&nbsp;您尚未提交本周工作周报，为使项目负责人和其他同事了解到您的本周工作内容，请尽快登陆系统填写周报，谢谢！<br/><br/>" +
                "&nbsp;&nbsp;<a href=\"http://10.30.49.76:8080/basis/report/weeklyreport\">登陆填报平台</a><br/><br/>" +
                "<span style: \"font-size: 10px; color: #a1a1a1; font-family: 'Microsoft Yahei', 微软雅黑\">&nbsp;&nbsp;Send from <b>S</b>ite <b>R</b>eliability <b>E</b>ngineering Platform<br/>" +
                "&nbsp;&nbsp;Please DO NOT Reply</span></p></body></html>",true);
        recipients.forEach(recipient -> {
            try {
                helper.setTo(recipient);
                helper.setCc("xuehaipeng@cnpc.com.cn");
            } catch (MessagingException e) {
                e.printStackTrace();
            }
            mailSender.send(mimeMessage);
        });

    }

    public static void sendThymeleafMail(String sendFrom, String sendTo, String subject, Map<String, Long> content,
                                  JavaMailSender mailSender, SpringTemplateEngine templateEngine) throws MessagingException {
        final MimeMessage mimeMessage = mailSender.createMimeMessage();
        final MimeMessageHelper message = new MimeMessageHelper(mimeMessage, true, "UTF-8");
        message.setFrom(sendFrom);
        message.setTo(sendTo);
        message.setCc("xuehaipeng@cnpc.com.cn");
        message.setSubject(subject);
        Context ctx = new Context();
        ctx.setVariable("username", "王茜");
        ctx.setVariable("count", 30);
        ctx.setVariable("date", LocalDate.now());
        ctx.setVariable("time", LocalTime.now());
        ctx.setVariable("hobbies", Arrays.asList("Cinema", "Sports", "Music"));
        ctx.setVariable("A", content.get("A"));
        ctx.setVariable("B", content.get("B"));
        ctx.setVariable("C", content.get("C"));
        ctx.setVariable("D", content.get("D"));
        ctx.setVariable("E", content.get("E"));

        ctx.setVariable("erp", 20);
        ctx.setVariable("mw_uep", 10);
        ctx.setVariable("db", 2);
        ctx.setVariable("os", 0);
        ctx.setVariable("hana", 3);
        ctx.setVariable("paas", 5);
        String htmlContent = templateEngine.process("mails/emailTemplate", ctx);
        message.setText(htmlContent, true);
        mailSender.send(mimeMessage);
    }
}