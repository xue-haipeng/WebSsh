package com.cnpc.service.basis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;
import java.util.Arrays;
import java.util.Date;

/**
 * Created by Xue on 03/11/17.
 */
@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendSimpleMail(String sendFrom, String sendTo, String title, String content) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(sendFrom);
        message.setTo(sendTo);
        message.setSubject(title);
        message.setText(content);
        mailSender.send(message);
    }

    public void sendInlineMail(String sendFrom, String sendTo, String title, String content) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setFrom(sendFrom);
            helper.setTo(sendTo);
            helper.setSubject(title);
            helper.setText("<html><body><img src=\"cid:weixin\" ></body></html>",true);

            FileSystemResource file = new FileSystemResource(new File("weixin.jpg"));
            helper.addInline("weixin", file);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        mailSender.send(mimeMessage);
    }

    @Autowired
    private SpringTemplateEngine templateEngine;

    public void sendThymeleafMail(String sendFrom, String sendTo, String title, String content) throws MessagingException {
        final MimeMessage mimeMessage = this.mailSender.createMimeMessage();
        final MimeMessageHelper message = new MimeMessageHelper(mimeMessage, true, "UTF-8");
        message.setFrom(sendFrom);
        message.setTo(sendTo);
        message.setSubject(title);
        Context ctx = new Context();
        ctx.setVariable("username", "薛海鹏");
        ctx.setVariable("count", 20);
        ctx.setVariable("date", new Date());
        ctx.setVariable("hobbies", Arrays.asList("Cinema", "Sports", "Music"));
        ctx.setVariable("erp", 20);
        ctx.setVariable("mw_uep", 10);
        ctx.setVariable("db", 2);
        ctx.setVariable("os", 0);
        ctx.setVariable("hana", 3);
        ctx.setVariable("paas", 5);
        String htmlContent = this.templateEngine.process("mails/emailTemplate", ctx);
        message.setText(htmlContent, true);
        mailSender.send(mimeMessage);
    }
}