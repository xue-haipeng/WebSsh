package com.cnpc.service.basis;

import com.cnpc.domain.basis.WeeklyReport;
import com.cnpc.repository.basis.WeeklyReportRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.*;
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
            if (rep.getProject() != null && !"".equals(rep.getProject())) {
                String projectName = null;
                switch (rep.getProject()) {
                    case "zbky": projectName = "总部/科研"; break;
                    case "ktsc": projectName = "勘探生产"; break;
                    case "hgxs": projectName = "化工销售"; break;
                    case "gcju": projectName = "工程技术"; break;
                    case "gcje": projectName = "工程建设"; break;
                    case "zbzz": projectName = "装备制造"; break;
                    case "rlzy": projectName = "人力资源"; break;
                    case "hw": projectName = "海外"; break;
                    default: projectName = "";
                }
                rep.setProject(projectName);
            }
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
            if (rep.getCreateUser() != null && !"".equals(rep.getCreateUser())) {
                String userString = null;
                switch (rep.getCreateUser()) {
                    case "admin": userString = "管理员"; break;
                    case "xuehaipeng": userString = "薛海鹏"; break;
                    case "zhouwei": userString = "周惟"; break;
                    case "xiongxiaojun": userString = "熊晓军"; break;
                    case "hesiyang": userString = "何思洋"; break;
                    case "jiangyongrui": userString = "姜永锐"; break;
                    case "wenduzi": userString = "文都子"; break;
                    case "jiaolong": userString = "焦龙"; break;
                    case "wangyubo": userString = "王禹博"; break;
                    case "hushuai": userString = "胡帅"; break;
                    case "zhaoxin": userString = "赵鑫"; break;
                    case "hanxinyi": userString = "韩心怡"; break;
                    case "wangqian": userString = "王茜"; break;
                    case "xuguanxiong": userString = "徐冠雄"; break;
                    case "baijie": userString = "白洁"; break;
                    case "lvshuhua": userString = "吕淑华"; break;
                    default: userString = "";
                }
                rep.setCreateUser(userString);
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

    public Map<String, Long> workTypeStatistics() {
        List<Object[]> list = weeklyReportRepo.workTypeDistribution();
        Map<String, Long> map = new HashMap<>();
        list.forEach(e -> map.put((String)e[0], (Long)e[1]));
        return map;
    }

    @Autowired
    MailRemainderService mailRemainderService;
    public int completeRatio() {
        return (int) 100 * weeklyReportRepo.findFilledUsers().size() / mailRemainderService.getStaff().size();
    }

    public Map<String, Long> issueTypeCount() {
        Map<String, Long> map = new HashMap<>();
        weeklyReportRepo.issueFieldDistribution().stream().map(e -> {
            e[0] = "issue" + e[0];
            return e;
        }).forEach(e -> map.put((String)e[0], (Long)e[1]));
        Arrays.asList("issue1", "issue2", "issue3", "issue4", "issue5", "issue6").forEach(e -> {
            if (!map.containsKey(e)) {
                map.put(e, 0L);
            }
        });
        return map;
    }
}
