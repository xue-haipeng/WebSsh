package com.cnpc.service;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import com.cnpc.utils.JschSftpUtil;

@Component
@ConfigurationProperties(prefix="sftp")
public class SftpService {
	String ip;
	String username;
	String passwd;
	String remoteFile;
	String hello;
	
	public void sftpService() {
		System.out.println("ip: " + ip + ", username: " + username + ", passwd: " + passwd + ", remoteFile: " + remoteFile + ", hello: " + hello);
		JschSftpUtil.sftp(ip, username, passwd, remoteFile);
		
	}

}
