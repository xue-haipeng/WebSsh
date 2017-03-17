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

    public static void sendThymeleafMail(String sendFrom, String[] sendTo, String subject, Map<String, Long> content,
                                  JavaMailSender mailSender, SpringTemplateEngine templateEngine) throws MessagingException {
        final MimeMessage mimeMessage = mailSender.createMimeMessage();
        final MimeMessageHelper message = new MimeMessageHelper(mimeMessage,true,"UTF-8");
        message.setFrom(sendFrom);
        message.setTo(sendTo);
        message.setCc("xuehaipeng@cnpc.com.cn");
        message.setSubject(subject);
        Context ctx = new Context();
        ctx.setVariable("username1", "王茜");
        ctx.setVariable("username2", "徐冠雄");
        ctx.setVariable("count", content.get("count"));
        ctx.setVariable("participation", content.get("participation"));
        ctx.setVariable("date", LocalDate.now());
        ctx.setVariable("time", LocalTime.now());
        ctx.setVariable("hobbies", Arrays.asList("Cinema", "Sports", "Music"));
        ctx.setVariable("A", content.get("A"));
        ctx.setVariable("B", content.get("B"));
        ctx.setVariable("C", content.get("C"));
        ctx.setVariable("D", content.get("D"));
        ctx.setVariable("E", content.get("E"));

        ctx.setVariable("erp", content.get("issue1"));
        ctx.setVariable("mw_uep", content.get("issue2"));
        ctx.setVariable("db", content.get("issue3"));
        ctx.setVariable("os", content.get("issue4"));
        ctx.setVariable("hana", content.get("issue5"));
        ctx.setVariable("paas", content.get("issue6"));

        ctx.setVariable("zbky", content.get("zbky"));
        ctx.setVariable("ktsc", content.get("ktsc"));
        ctx.setVariable("hgxs", content.get("hgxs"));
        ctx.setVariable("gcju", content.get("gcju"));
        ctx.setVariable("gcje", content.get("gcje"));
        ctx.setVariable("zbzz", content.get("zbzz"));
        ctx.setVariable("rlzy", content.get("rlzy"));
        ctx.setVariable("hw", content.get("hw"));
        ctx.setVariable("blank_proj", content.get("blank_proj"));

        ctx.setVariable("hushuai", content.get("hushuai"));
        ctx.setVariable("hanxinyi", content.get("hanxinyi"));
        ctx.setVariable("zhouwei", content.get("zhouwei"));
        ctx.setVariable("jiangyongrui", content.get("jiangyongrui"));
        ctx.setVariable("jiaolong", content.get("jiaolong"));
        ctx.setVariable("zhaoxin", content.get("zhaoxin"));
        ctx.setVariable("wangyubo", content.get("wangyubo"));
        ctx.setVariable("wenduzi", content.get("wenduzi"));
        ctx.setVariable("xuehaipeng", content.get("xuehaipeng"));
        ctx.setVariable("hesiyang", content.get("hesiyang"));
        String htmlContent = templateEngine.process("mails/emailTemplate", ctx);
        message.setText(htmlContent, true);
        mailSender.send(mimeMessage);
    }
}