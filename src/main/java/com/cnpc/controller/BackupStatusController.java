package com.cnpc.controller;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cnpc.domain.BackupStatus;
import com.cnpc.repository.BackupStatusRepo;

@RestController
public class BackupStatusController {
	
	@Autowired
	private BackupStatusRepo repo;
	
	@RequestMapping("/getBackupStatus")
	public List<BackupStatus> listBackup() {
		List<BackupStatus> bakStat = repo.findByRecordDateBefore(new Date());
		return bakStat;
	}
	
/*	@RequestMapping("/getTodayBackupStatus")
	public List<BackupStatus> listTodayBackup() {
		List<BackupStatus> todayBakStat = repo.findByRecordDate(new Date());
		return todayBakStat;
	}
	@RequestMapping("/getYesterdayBackupStatus")
	public List<BackupStatus> listYesterdayBackup() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, -1);
		Date yesterday = (Date)cal.getTime();
		List<BackupStatus> yesterdayBakStat = repo.findByRecordDate(yesterday);
		return yesterdayBakStat;
	}
	@RequestMapping("/getDbyBackupStatus")
	public List<BackupStatus> listDbyBackup() {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, -2);
		Date dBy = (Date)cal.getTime();
		List<BackupStatus> dByBakStat = repo.findByRecordDate(dBy);
		return dByBakStat;
	}*/

}
