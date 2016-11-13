package com.cnpc.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cnpc.domain.BackupStatus;

public interface BackupStatusRepo extends JpaRepository<BackupStatus, Long>{
	
	@Query("select b from BackupStatus b where b.recordDate > sysdate - 4")
	List<BackupStatus> queryBackup();
	
	List<BackupStatus> findByRecordDate(Date date);
	
	List<BackupStatus> findByRecordDateAfter(Date date);

}
