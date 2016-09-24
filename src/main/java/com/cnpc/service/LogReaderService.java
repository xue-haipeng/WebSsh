package com.cnpc.service;

import java.io.RandomAccessFile;
import java.text.SimpleDateFormat;
import java.util.Date;

public class LogReaderService {
	static String logfile = "C:/Users/hpxue/Desktop/hot_database_backup.sh.out";
	
	public static void LogChecker() throws Exception {
		RandomAccessFile raf = new RandomAccessFile(logfile, "r");  
		long len = raf.length();  
		String lastLine = "";  
		if (len != 0L) {  
		  long pos = len - 3;
		  while (pos > 0) {   
		    pos--;  
		    raf.seek(pos);  
		    if (raf.readByte() == '\n') {  
		      lastLine = raf.readLine();  
		      break;  
		    }  
		  }  
		}  
		raf.close();  
		System.out.println(lastLine);
		String bakStatus = lastLine.substring(11, 23);
		String bakDateStr = lastLine.substring(27, 55);
		SimpleDateFormat sDateFormat = new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy");
		Date bakDate = sDateFormat.parse(bakDateStr);
		Date today = new Date();
		String todaystr = today.toString();
		System.out.println(todaystr.substring(0, 10));
		System.out.println(bakDate);
		System.out.println(bakStatus);
	}

}
