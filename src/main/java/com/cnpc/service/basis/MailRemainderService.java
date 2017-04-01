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
import java.io.UnsupportedEncodingException;
import java.util.Arrays;
import java.util.HashMap;
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

    private List<Map<String, String>> leader;
    private List<Map<String, String>> staff;

    public List<Map<String, String>> getLeader() {
        return leader;
    }

    public void setLeader(List<Map<String, String>> leader) {
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
    @Scheduled(cron = "00 00 10 * * FRI")
    public void sendMimeMail() throws MessagingException {

        List<String> completed = reportRepo.findFilledUsers();
        List<String> unfinished = this.getStaff().stream().filter(item -> !completed.contains(item.get("username"))).map(item -> item.get("mail")).collect(Collectors.toList());
        logger.info(unfinished.toString());

        EmailUtils.sendMimeMail(SEND_FROM, unfinished, FILLING_REMAINDER_SUBJECT, null, mailSender);
    }

    @Scheduled(cron = "00 30 11 * * FRI")
    public void sendTemplateMail() throws MessagingException, UnsupportedEncodingException {
        Map<String, Long> map = this.mailContent();
//        String[] leaders = (String[]) this.getLeader().stream().map(e -> e.get("mail")).collect(Collectors.toList()).toArray();
        String[] leaders = new String[] {"wangqian91@cnpc.com.cn", "xuguanxiong@cnpc.com.cn"};
                EmailUtils.sendThymeleafMail(SEND_FROM, leaders, REPORT_FILLING_SUMMARY, map, mailSender, templateEngine);
    }

    /**
     * For Testing Purporse Only
     * @throws MessagingException
     */
    public void testSendMail() throws MessagingException, UnsupportedEncodingException {

        EmailUtils.sendThymeleafMail("erpyyjcadmin@cnpc.com.cn", new String[] {"xuehaipeng@cnpc.com.cn"}, REPORT_FILLING_SUMMARY,
                this.mailContent(), mailSender, templateEngine);
    }

    public Map<String, Long> mailContent() {
        Map<String, Long> map = new HashMap<>();
        // WorkTypeDistribution of the current week
        reportRepo.workTypeDistrCurrWeek().forEach(e -> {
            String key = (String)e[0];
            map.put(key.toLowerCase(), (Long)e[1]);
        });
        Arrays.asList("a", "b", "c", "d", "e").forEach(e -> {
            if (!map.containsKey(e)) {
                map.put(e, 0L);
            }
        });
        // WorkTypeDistribution total count
        reportRepo.workTypeDistribution().forEach(e -> map.put((String)e[0], (Long)e[1]));
        Arrays.asList("A", "B", "C", "D", "E").forEach(e -> {
            if (!map.containsKey(e)) {
                map.put(e, 0L);
            }
        });
        // IssueFieldDistribution of the current week
        reportRepo.issueFieldDistrCurrWeek().forEach(e -> map.put("iss_" + (String)e[0], (Long)e[1]));
        Arrays.asList("iss_1", "iss_2", "iss_3", "iss_4", "iss_5", "iss_6").forEach(e -> {
            if (!map.containsKey(e)) {
                map.put(e, 0L);
            }
        });
        // IssueFieldDistribution total count
        reportRepo.issueFieldDistribution().forEach(e -> map.put("issue" + (String)e[0], (Long)e[1]));
        Arrays.asList("issue1", "issue2", "issue3", "issue4", "issue5", "issue6").forEach(e -> {
            if (!map.containsKey(e)) {
                map.put(e, 0L);
            }
        });
        // ProjectDistribution of the current week
        reportRepo.projectDistrCurrWeek().stream().map(e -> {
            if (e[0] == null) {
                e[0] = "blank_proj";
            }
            return e;
        }).forEach(e -> map.put((String)e[0], (Long)e[1]));
        Arrays.asList("zbky", "ktsc", "hgxs", "gcju", "gcje", "zbzz", "rlzy", "hw", "blank_proj").forEach(e -> {
            if (!map.containsKey(e)) {
                map.put(e, 0L);
            }
        });
        // ProjectDistribution total count
        reportRepo.projectDistribution().stream().map(e -> {
            if (e[0] == null) {
                e[0] = "blank_proj";
            }
            return e;
        }).forEach(e -> {
            String key = (String)e[0];
            map.put(key.substring(0,1).toUpperCase()+key.substring(1), (Long)e[1]);
        });
        Arrays.asList("Zbky", "Ktsc", "Hgxs", "Gcju", "Gcje", "Zbzz", "Rlzy", "Hw", "Blank_proj").forEach(e -> {
            if (!map.containsKey(e)) {
                map.put(e, 0L);
            }
        });
        // UserDistribution of the current week
        reportRepo.userDistrCurrWeek().forEach(e -> map.put("_" + (String)e[0], (Long)e[1]));
        Arrays.asList("_hushuai", "_hanxinyi", "_zhouwei", "_jiangyongrui", "_wangyubo", "_jiaolong", "_wenduzi", "_xuehaipeng", "_zhaoxin", "_hesiyang").forEach(e -> {
            if (!map.containsKey(e)) {
                map.put(e, 0L);
            }
        });
        // UserDistribution total count
        reportRepo.userDistribution().forEach(e -> map.put((String)e[0], (Long)e[1]));
        Arrays.asList("hushuai", "hanxinyi", "zhouwei", "jiangyongrui", "wangyubo", "jiaolong", "wenduzi", "xuehaipeng", "zhaoxin", "hesiyang").forEach(e -> {
            if (!map.containsKey(e)) {
                map.put(e, 0L);
            }
        });

        map.put("count", reportRepo.totalReportCurrWeek());

        long participation = (long) 100 * reportRepo.findFilledUsers().size() / this.getStaff().size();
        map.put("participation", new Long(participation));

        return map;
    }
}
