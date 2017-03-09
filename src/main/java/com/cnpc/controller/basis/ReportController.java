package com.cnpc.controller.basis;

import com.cnpc.domain.basis.WeeklyReport;
import com.cnpc.service.basis.WeeklyReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by Xue on 03/08/17.
 */
@Controller
public class ReportController {

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

}
