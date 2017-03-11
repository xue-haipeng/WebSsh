package com.cnpc.controller.basis;

import com.cnpc.domain.basis.WeeklyReport;
import com.cnpc.service.basis.WeeklyReportService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Xue on 03/08/17.
 */
@Controller
public class ReportController {
    private static final Logger logger = LoggerFactory.getLogger(ReportController.class);
    @Autowired
    WeeklyReportService reportService;

    @RequestMapping("/basis/report/save_report")
    @ResponseBody
    public void saveReport(WeeklyReport report) {
        reportService.createReport(report);
    }

    @RequestMapping("/basis/report/retrieve_reports")
    @ResponseBody
    public List<WeeklyReport> listAllReports() {
        return reportService.retrieveAllReports();
    }

    @RequestMapping(value = "/basis/report/specific_report", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public WeeklyReport singleWeeklyReport(@RequestParam(value = "id") String id) {
        return reportService.getSingleReport(Long.parseLong(id));
    }

    @RequestMapping(value = "/basis/report/update_report", method = RequestMethod.POST)
    @ResponseBody
    public String updateReport(@RequestBody WeeklyReport report) {
        logger.info(report.toString());
        String status = reportService.updateReport(report);
        return "{}";  // 此处异常诡异，ResponseBody注解不起作用
    }

    @RequestMapping("/basis/report/delete_report")
    @ResponseBody
    public void deleteReport(@RequestParam(value = "id") String id) {
        reportService.deleteReport(Long.parseLong(id));
    }

    @Autowired
    private JavaMailSender mailSender;

    @RequestMapping("/sendmail")
    @ResponseBody
    public void sendSimpleMail() {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom("hpxue13@163.com");
        msg.setTo("1071405234@qq.com");
        msg.setSubject("周报填报提醒");
        msg.setText("您尚未提交本周周报，请尽快前往填写！");
        mailSender.send(msg);
    }

}
