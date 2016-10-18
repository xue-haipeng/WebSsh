package com.cnpc.service;

import com.cnpc.domain.BackupStatus;
import com.cnpc.repository.BackupStatusRepo;
import com.cnpc.utils.JschSftpUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.Map;

@Component
@ConfigurationProperties(prefix = "sap")
public class SftpSapService {
	private Map<String, String> hosts;
	private Map<String, String> logfiles;
	private String username;
	private String passwd;

	public Map<String, String> getHosts() {
		return hosts;
	}

	public void setHosts(Map<String, String> hosts) {
		this.hosts = hosts;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	@Autowired
	private BackupStatusRepo repo;
	
	public void saveBakStatus() {
        Date today = new Date();
        System.out.println(logfiles);
        logfiles.forEach((k, v) -> {
            System.out.println("ip: " + k + " ........");
            JschSftpUtil.sftp(k, username, passwd, v);
            String bakStatus = JschSftpUtil.getLastLine();
            repo.save(new BackupStatus(k, today, bakStatus));
		});
	}
}
