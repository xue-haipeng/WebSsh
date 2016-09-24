package com.cnpc.service;

import java.util.Arrays;
import java.util.List;

import com.cnpc.utils.JschSshUtil;

public class SshService {

	static String ip = "192.168.95.129";
	static String username = "xue";
	static String passwd = "mybasis0";
	static String logfile = "C:/Users/hpxue/Desktop/hot_database_backup.sh.out";
	public static String out = null;
	static List<String> cmd = Arrays.asList("df -h");
	
	public static void sshService() {
		try {
			JschSshUtil.sshConn(ip, username, passwd, cmd);
		} catch (Exception e) {
			e.printStackTrace();
		}
		out = JschSshUtil.out;
		JschSshUtil.sshDisconn();
	}
	
}
