package com.cnpc.service.basis;

import com.cnpc.configure.EmailConfig;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by Xue on 03/11/17.
 */

public class EmailService {

    @Autowired
    private EmailConfig emailConfig;/*
    @Autowired
    private JavaMailSender mailSender;


    public void sendSimpleMail(String sendTo, String titel, String content) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(sendTo);
        message.setSubject(titel);
        message.setText(content);
        mailSender.send(message);
    }


    public void sendInlineMail() {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setTo("286352250@163.com");
            helper.setSubject("主题：嵌入静态资源");
            helper.setText("<html><body><img src=\"cid:weixin\" ></body></html>", true);

            FileSystemResource file = new FileSystemResource(new File("weixin.jpg"));
            helper.addInline("weixin", file);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        mailSender.send(mimeMessage);
    }
*/
}