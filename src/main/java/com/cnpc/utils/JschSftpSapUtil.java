package com.cnpc.utils;

import com.jcraft.jsch.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

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
            System.out.println("Creating SFTP Channel.");
            ChannelSftp sftpChannel = (ChannelSftp) session.openChannel("sftp");
            sftpChannel.connect();
            System.out.println("SFTP Channel created.");
            InputStream out = null;
            out = sftpChannel.get(remoteFile);
            BufferedReader br = new BufferedReader(new InputStreamReader(out));
            String line;
            Date today = new Date();
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH");
            while ((line = br.readLine()) != null) {
//              System.out.println(line);
                String dateStr = line.substring(35, 54);
                Date recDate = new Date();
                try {
                    recDate = format.parse(dateStr);
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                if (recDate.after(getPreviousDate(today))) {
//                  System.out.println("Record Date is: " + recDate);
                    if ("0".equals(line.substring(56, 57)) && (line.contains("FULL") || line.contains("ALL"))) {
                        lastLine = "succeed";
                    } else if (!"0".equals(line.substring(56, 57)) || line.contains("..... ..... .....  ........ ................ ")) {
                        lastLine = "failed";
                    }
                } else {
                    lastLine = "unknown";
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

    public static Date getPreviousDate(Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.DAY_OF_MONTH, -1);
        date = calendar.getTime();
        return date;
    }

}