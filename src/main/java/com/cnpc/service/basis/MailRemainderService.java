package com.cnpc.service.basis;

import com.cnpc.repository.basis.WeeklyReportRepo;
import com.cnpc.utils.EmailUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.thymeleaf.spring4.SpringTemplateEngine;

import javax.mail.MessagingException;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by Xue on 03/12/17.
 */
@Service
@ConfigurationProperties(prefix = "spring.mail.users")
public class MailRemainderService {
    private final String SEND_FROM = "hpxue13@163.com";
    private final String SEND_TO = "1071405234@qq.com";
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

    @Scheduled(cron = "00 00 11 * * 6")
    public void sendMimeMail() throws MessagingException {

        List<String> allstaff = this.getStaff().stream().map(item -> item.get("username")).collect(Collectors.toList());
        List<String> completed = reportRepo.findFilledUsers();
        List<String> unfinished = allstaff.stream().filter(item -> !completed.contains(item)).collect(Collectors.toList());
        unfinished.forEach(System.out :: println);

        EmailUtils.sendMimeMail(SEND_FROM, unfinished, FILLING_REMAINDER_SUBJECT, null, mailSender);
    }

}
