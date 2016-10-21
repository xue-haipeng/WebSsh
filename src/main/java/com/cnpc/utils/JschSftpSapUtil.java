package com.cnpc.utils;

import com.jcraft.jsch.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class JschSftpSapUtil {

    private static final int PORT = 22;
    private static String lastLine = null;

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
                System.out.println(line);
                if (line.contains("FULL") || line.contains("ALL")) {
                    lastLine = "succeed";
                } else if (line.contains("............ ............... ................")) {
                    lastLine = "failed";
                }
            }
            br.close();
            sftpChannel.disconnect();
            session.disconnect();
        } catch (JSchException | SftpException | IOException e) {
            System.out.println(e);
        }
        if (lastLine == null || "".equals(lastLine)) {
            lastLine = "unknown";
        }
    }

    public static String getLastLine() {
        return lastLine;
    }
}