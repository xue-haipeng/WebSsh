package com.cnpc.controller;

import com.cnpc.domain.BackupStatus;
import com.cnpc.repository.BackupStatusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
public class BackupStatusController {
	
	@Autowired
	private BackupStatusRepo repo;
	
	@RequestMapping("/getBackupStatus")
	public List<BackupStatus> listBackup() {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		calendar.add(Calendar.DATE, -4);
		List<BackupStatus> bakStat = repo.findByRecordDateAfter(calendar.getTime());
		return bakStat;
	}

}
