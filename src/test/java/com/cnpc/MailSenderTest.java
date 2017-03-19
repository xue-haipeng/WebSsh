package com.cnpc;
/*

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
//        remainderService.testSendMail();
        remainderService.sendTemplateMail();
    }

    @Test
    public void testQuery() {
//        List<Object[]> list = reportRepo.workTypeDistribution();
        List<Object[]> list = reportRepo.issueFieldDistribution();
//        List<Object[]> list = reportRepo.userDistribution();

        Map<String, Long> map = new HashMap<>();
        list.forEach(e -> map.put((String)e[0], (Long)e[1]));

        map.forEach((k, v) -> System.out.println(k + " : " + v));
//        list.forEach(e -> System.out.println((String)e[0] + " : " + (String)e[1] + " : " + (Long)e[2]));
    }

    @Autowired
    WeeklyReportService reportService;

    @Test
    public void testRate() {
        System.out.println(reportService.completeRatio());
*/
/*        Map<String, Long> map = reportService.issueTypeCount();
        map.forEach((k, v) -> System.out.println(k + " : " + v));*//*

    }

    @Test
    public void testCalWorkDist() {
        remainderService.mailContent().forEach((k, v) -> System.out.println(k + " : " + v));
    }

    @Test
    public void testProjDist() {
        List<Object[]> list = reportRepo.projectDistribution();

        Map<String, Long> map = new HashMap<>();
        list.forEach(e -> map.put((String)e[0], (Long)e[1]));

        map.forEach((k, v) -> System.out.println(k + " : " + v));
    }

    @Test
    public void totalReportTest() {
        System.out.println(reportRepo.totalReportCurrWeek());
    }

}
*/
