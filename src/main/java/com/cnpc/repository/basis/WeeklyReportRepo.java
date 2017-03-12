package com.cnpc.repository.basis;

import com.cnpc.domain.basis.WeeklyReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Xue on 11/06/16.
 */
@Repository
public interface WeeklyReportRepo extends JpaRepository<WeeklyReport, Long> {

    @Query("select distinct w.createUser from WeeklyReport w where w.createDate > sysdate - 6")
    public List<String> findFilledUsers();
}