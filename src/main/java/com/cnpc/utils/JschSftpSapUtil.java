package com.cnpc.utils;

import com.jcraft.jsch.*;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

            String line = null;
            try (Stream<String> stream = Files.lines(Paths.get(remoteFile))) {
                List<String> list = stream.collect(Collectors.toList());
                line = list.get(list.size() - 1);
                System.out.println(line);
                if (line.indexOf("FULL") >= 0 || line.indexOf("ALL") >= 0) {
                    System.out.println("OK");
                    lastLine = "OK";
                } else {
                    System.out.println("Error");
                    lastLine = "Failed";
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
            sftpChannel.disconnect();
            session.disconnect();
        } catch (JSchException e) {
            System.out.println(e);
        }
        if (lastLine == null || "".equals(lastLine)) {
            lastLine = "Unkown";
        }
    }

    public static String getLastLine() {
        return lastLine;
    }
}