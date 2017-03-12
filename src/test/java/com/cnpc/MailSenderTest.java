package com.cnpc;

import com.cnpc.repository.basis.WeeklyReportRepo;
import com.cnpc.service.basis.MailRemainderService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

/**
 * Created by Xue on 03/12/17.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class MailSenderTest {

    @Autowired
    MailRemainderService remainderService;

    @Test
    public void sendRemainderMail() {
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
    public void testInjection() {

    }

}
