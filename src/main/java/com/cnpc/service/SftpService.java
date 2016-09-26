package com.cnpc.service;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import com.cnpc.utils.JschSftpUtil;

@Component
@ConfigurationProperties(prefix = "sftp")
public class SftpService {
	String ip;
	String username;
	String passwd;
	String remoteFile;

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
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

	public void sftpService() {
		System.out.println("ip: " + ip + ", username: " + username + ", passwd: " + passwd + ", remoteFile: "
				+ remoteFile);
		JschSftpUtil.sftp(ip, username, passwd, remoteFile);

	}

}
