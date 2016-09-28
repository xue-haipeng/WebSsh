package com.cnpc.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.cnpc.repository.BackupStatusRepo;

public class BackupService {
	@Autowired
	private BackupStatusRepo repo;

/*	public String persistent() {
		return repo.save(new BackupStatus("OSB上市", "succeed"));

	}*/

}
