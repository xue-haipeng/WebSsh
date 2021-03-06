package com.cnpc.repository.basis;

import com.cnpc.domain.basis.WeeklyReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 11/06/16.
 */
@Repository
public interface WeeklyReportRepo extends JpaRepository<WeeklyReport, Long> {

    @Query("select distinct w.createUser from WeeklyReport w where w.createDate > trunc(sysdate, 'd')")
    public List<String> findFilledUsers();

    @Query("select w.workType, count(*) from WeeklyReport w where w.createDate > trunc(sysdate, 'd') group by w.workType")
    public List<Object[]> workTypeDistrCurrWeek();

    @Query("select w.workType, count(*) from WeeklyReport w group by w.workType")
    public List<Object[]> workTypeDistribution();

    @Query("select w.appType, count(*) from WeeklyReport w where w.createDate > trunc(sysdate, 'd') group by w.appType")
    public List<Object[]> issueFieldDistrCurrWeek();

    @Query("select w.appType, count(*) from WeeklyReport w group by w.appType")
    public List<Object[]> issueFieldDistribution();

    @Query("select w.project, count(*) from WeeklyReport w where w.createDate > trunc(sysdate, 'd') group by w.project")
    public List<Object[]> projectDistrCurrWeek();

    @Query("select w.project, count(*) from WeeklyReport w group by w.project")
    public List<Object[]> projectDistribution();

    @Query("select w.createUser, count(*) from WeeklyReport w where w.createDate > trunc(sysdate, 'd') group by w.createUser")
    public List<Object[]> userDistrCurrWeek();

    @Query("select w.createUser, count(*) from WeeklyReport w group by w.createUser")
    public List<Object[]> userDistribution();

    @Query("select w.appType, w.project, count(*) from WeeklyReport w group by w.appType, w.project")
    public List<Object[]> appWorkDistribution();

    @Query("select count(*) from WeeklyReport w where w.createDate > trunc(sysdate, 'd')")
    public Long totalReportCurrWeek();

}
