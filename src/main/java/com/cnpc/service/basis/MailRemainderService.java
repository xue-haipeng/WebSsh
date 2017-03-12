package com.cnpc.service.basis;

import com.cnpc.repository.basis.WeeklyReportRepo;
import com.cnpc.utils.EmailUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring4.SpringTemplateEngine;

import javax.mail.MessagingException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by Xue on 03/12/17.
 */
@Service
@ConfigurationProperties(prefix = "spring.mail.users")
public class MailRemainderService {
    private static final Logger logger = LoggerFactory.getLogger(MailRemainderService.class);
    private final String SEND_FROM = "erpyyjcadmin@cnpc.com.cn";
    private final String SEND_TO = "xuehaipeng@cnpc.com.cn";
    private final String FILLING_REMAINDER_SUBJECT = "周报填报提醒";
    private final String REPORT_FILLING_SUMMARY = "周报填报汇总";

    private Map<String, String> leader;
    private List<Map<String, String>> staff;

    public Map<String, String> getLeader() {
        return leader;
    }

    public void setLeader(Map<String, String> leader) {
        this.leader = leader;
    }

    public List<Map<String, String>> getStaff() {
        return staff;
    }

    public void setStaff(List<Map<String, String>> staff) {
        this.staff = staff;
    }

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private SpringTemplateEngine templateEngine;

    @Autowired
    WeeklyReportRepo reportRepo;

    /**
     * Weekly Report Filling Remainder
     * @throws MessagingException
     */
    @Scheduled(cron = "00 30 10 * * 6")
    public void sendMimeMail() throws MessagingException {

        List<String> completed = reportRepo.findFilledUsers();
        List<String> unfinished = this.getStaff().stream().filter(item -> !completed.contains(item.get("username"))).map(item -> item.get("mail")).collect(Collectors.toList());
        logger.info(unfinished.toString());

        EmailUtils.sendMimeMail(SEND_FROM, unfinished, FILLING_REMAINDER_SUBJECT, null, mailSender);
    }

    @Scheduled(cron = "00 00 11 * * 6")
    public void sendTemplateMail() throws MessagingException {
        EmailUtils.sendThymeleafMail(SEND_FROM, this.getLeader().get("mail"), REPORT_FILLING_SUMMARY,null, mailSender, templateEngine);
    }

    /**
     * For Testing Purporse Only
     * @throws MessagingException
     */
    public void testSendMail() throws MessagingException {

        EmailUtils.sendThymeleafMail("hpxue13@163.com", "1071405234@qq.com", REPORT_FILLING_SUMMARY, null, mailSender, templateEngine);
    }
}
