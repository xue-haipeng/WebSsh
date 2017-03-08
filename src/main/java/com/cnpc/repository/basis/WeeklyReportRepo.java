package com.cnpc.repository.basis;

import com.cnpc.domain.basis.WeeklyReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by Xue on 11/06/16.
 */
@Repository
public interface WeeklyReportRepo extends JpaRepository<WeeklyReport, Long> {

}
