package com.cnpc.service;

import com.cnpc.domain.BackupStatus;
import com.cnpc.repository.BackupStatusRepo;
import com.cnpc.utils.JschSftpUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
@ConfigurationProperties(prefix = "sftp")
public class SftpService {
	List<String> ips;
	String username;
	String passwd;
	String remoteFile;

	public List<String> getIps() {
		return ips;
	}

	public void setIps(List<String> ips) {
		this.ips = ips;
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

	public String getRemoteFile() {
		return remoteFile;
	}

	public void setRemoteFile(String remoteFile) {
		this.remoteFile = remoteFile;
	}
	
	@Autowired
	private BackupStatusRepo repo;
	
	public void saveBakStatus() {
		Map<String, String> statusMap = new HashMap<>();
		Date today = new Date();
		ips.forEach(ip -> {
			System.out.println(today + "  ip: " + ip + " ........");
			JschSftpUtil.sftp(ip, username, passwd, remoteFile);
			String bakStatus = JschSftpUtil.getLastLine();
			repo.save(new BackupStatus(ip, today, bakStatus));
		});
	}
}
