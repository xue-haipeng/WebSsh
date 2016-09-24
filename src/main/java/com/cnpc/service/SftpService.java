package com.cnpc.service;

import com.cnpc.utils.JschSftpUtil;

public class SftpService {
	static String ip = "192.168.95.129";
	static String username = "xue";
	static String passwd = "mybasis0";
	static String remoteFile = "/home/xue/Documents/hot_database_backup.sh.out";
	
	public static void sftpService() {
		JschSftpUtil.sftp(ip, username, passwd, remoteFile);
		
	}

}
