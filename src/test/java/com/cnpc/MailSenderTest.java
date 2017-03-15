package com.cnpc;

import com.cnpc.repository.basis.WeeklyReportRepo;
import com.cnpc.service.basis.MailRemainderService;
import com.cnpc.service.basis.WeeklyReportService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.mail.MessagingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 03/12/17.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class MailSenderTest {

    @Autowired
    MailRemainderService remainderService;

    @Test
    public void sendRemainderMail() throws MessagingException {
        remainderService.sendMimeMail();
    }

    @Autowired
    WeeklyReportRepo reportRepo;

    @Test
    public void queryUsers() {
        List<String> list = reportRepo.findFilledUsers();
        list.forEach(System.out :: println);
    }

    @Test
    public void testSendMail() throws MessagingException {
        remainderService.testSendMail();
    }

    @Test
    public void testQuery() {
//        List<Object[]> list = reportRepo.workTypeDistribution();
        List<Object[]> list = reportRepo.issueFieldDistribution();

        Map<String, Long> map = new HashMap<>();
        list.forEach(e -> map.put((String)e[0], (Long)e[1]));

        map.forEach((k, v) -> System.out.println(k + " : " + v));
    }

    @Autowired
    WeeklyReportService reportService;

    @Test
    public void testRate() {
        System.out.println(reportService.completeRatio());
    }

    @Test
    public void testCalWorkDist() {
        remainderService.calWorkDistribute().forEach((k, v) -> System.out.println(k + " : " + v));
    }
}
