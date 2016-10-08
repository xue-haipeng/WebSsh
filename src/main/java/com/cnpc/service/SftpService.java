package com.cnpc.service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import com.cnpc.domain.BackupStatus;
import com.cnpc.repository.BackupStatusRepo;
import com.cnpc.utils.JschSftpUtil;

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
	
	public Map<String, String> getBakStatus() {
		Map<String, String> statusMap = new HashMap<>();
		Date today = new Date();
		for (String ip : ips) {
			System.out.println("ip: " + ip + " ........");
			JschSftpUtil.sftp(ip, username, passwd, remoteFile);
			String bakStatus = JschSftpUtil.getLastLine();
			if (bakStatus.indexOf("successfully") >= 0) {
				statusMap.put(ip, "succeed");
				repo.save(new BackupStatus(ip, today, "succeed"));
			} else if (bakStatus.indexOf("error") >= 0){
				statusMap.put(ip, "failed");
				repo.save(new BackupStatus(ip, today, "failed"));
			} else {
				statusMap.put(ip, "unknown");
				repo.save(new BackupStatus(ip, today, "unknown"));
			}
		}
		return statusMap;
	}
}
