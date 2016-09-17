package com.cnpc.utils;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

public class JschSshShell {
	private static final int PORT = 22;

	public static void sshShell(String ip, String username, String passwd, List<String> cmd) throws Exception {

		JSch jsch = new JSch();
		Session session = jsch.getSession(username, ip, PORT);
		Channel channel = null;

		if (session == null) {
			throw new Exception("Unable to create session ...");
		}

		session.setPassword(passwd);
		session.setConfig("StrictHostKeyChecking", "no");
		session.connect(10000);

		try {
			channel = (Channel) session.openChannel("shell");
			channel.connect(1000);

			InputStream inputStream = channel.getInputStream();
			OutputStream outputStream = channel.getOutputStream();

			for (String command : cmd) {
				command += "\n";
				outputStream.write(command.getBytes());
				outputStream.flush();
				Thread.sleep(1000);

				if (inputStream.available() > 0) {
					byte[] data = new byte[inputStream.available()];
					int nLen = inputStream.read(data);

					if (nLen < 0) {
						throw new Exception("Network Error, Unable to Get InputStream ...");
					}
					String temp = new String(data, 0, nLen, "UTF-8");
					System.out.println(temp);
				}
			}

			outputStream.close();
			inputStream.close();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			session.disconnect();
			channel.disconnect();
		}
	}

}
