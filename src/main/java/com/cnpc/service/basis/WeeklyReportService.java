package com.cnpc.service.basis;

import com.cnpc.domain.basis.WeeklyReport;
import com.cnpc.repository.basis.WeeklyReportRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Xue on 03/08/17.
 */
@Service
public class WeeklyReportService {

    private static final Logger logger = LoggerFactory.getLogger(WeeklyReportService.class);
    @Autowired
    WeeklyReportRepo weeklyReportRepo;

    public void createReport(WeeklyReport weeklyReport) {
        if (weeklyReport.getCreateUser() == null || "".equals(weeklyReport.getCreateUser())) {
            weeklyReport.setCreateUser(SecurityContextHolder.getContext().getAuthentication().getName());
        }
        if (weeklyReport.getCreateDate() == null || "".equals(weeklyReport.getCreateDate())) {
            weeklyReport.setCreateDate(new Date());
        }
        weeklyReportRepo.save(weeklyReport);
    }

    public List<WeeklyReport> retrieveAllReports() {
        List<WeeklyReport> list = weeklyReportRepo.findAll();
        list.forEach(rep -> {
            if (rep.getAppType() != null && !"".equals(rep.getAppType())) {
                String appTypeString = Arrays.stream(rep.getAppType().split(",")).map(type -> {
                    switch (type) {
                        case "1": return "ERP";
                        case "2": return "中间件/UEP";
                        case "3": return "DB";
                        case "4": return "OS";
                        case "5": return "HANA";
                        case "6": return "PaaS/大数据/SRE";
                        default: return "";
                    }
                }).collect(Collectors.joining(","));
                rep.setAppType(appTypeString);
            }
            if (rep.getWorkType() != null && !"".equals(rep.getWorkType())) {
                String workTypeString = null;
                switch (rep.getWorkType()) {
                    case "A": workTypeString = "日常运维"; break;
                    case "B": workTypeString = "排错"; break;
                    case "C": workTypeString = "安装/实施"; break;
                    case "D": workTypeString = "新技术/开发"; break;
                    case "E": workTypeString = "培训/布道"; break;
                    default: workTypeString = "";
                }
                rep.setWorkType(workTypeString);
            }
        });
        return list;
    }

    public WeeklyReport getSingleReport(Long id) {
        return weeklyReportRepo.findOne(id);
    }

    public String updateReport(WeeklyReport report) {
        if (report.getUpdateDate() == null || "".equals(report.getUpdateDate())) {
            report.setUpdateDate(new Date());
        }
        if (report.getUpdateUser() == null || "".equals(report.getUpdateUser())) {
            report.setUpdateUser(SecurityContextHolder.getContext().getAuthentication().getName());
        }
        logger.info(report.toString());
        weeklyReportRepo.saveAndFlush(report);
        return "OK";
    }

    public void deleteReport(Long id) {
        weeklyReportRepo.delete(id);
    }
}
