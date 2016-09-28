package com.cnpc.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import com.jcraft.jsch.SftpException;

public class JschSftpUtil {

	private static final int PORT = 22;
	private static String lastLine;

	public static void sftp(String ip, String username, String passwd, String remoteFile) {

		try {
			JSch jsch = new JSch();
			Session session = jsch.getSession(username, ip, PORT);
			session.setPassword(passwd);
			session.setConfig("StrictHostKeyChecking", "no");
			System.out.println("Establishing Connection...");
			session.connect();
			System.out.println("Connection established.");
			System.out.println("Crating SFTP Channel.");
			ChannelSftp sftpChannel = (ChannelSftp) session.openChannel("sftp");
			sftpChannel.connect();
			System.out.println("SFTP Channel created.");
			InputStream out = null;
			out = sftpChannel.get(remoteFile);
			BufferedReader br = new BufferedReader(new InputStreamReader(out));
			String line;
			while ((line = br.readLine()) != null) {
//				System.out.println(line);
				//判断备份是否成功
				if (line.indexOf("ended successfully") >= 0 || line.indexOf("ended in error") >= 0) {
					// 获取最后一行				
					lastLine = line;
				}
			}
			br.close();
			sftpChannel.disconnect();
			session.disconnect();
		} catch (JSchException | SftpException | IOException e) {
			System.out.println(e);
		}

	}

	public static String getLastLine() {
		return lastLine;
	}

}