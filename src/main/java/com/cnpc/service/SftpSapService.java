package com.cnpc.service;

import com.cnpc.domain.BackupStatus;
import com.cnpc.repository.BackupStatusRepo;
import com.cnpc.utils.JschSftpUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
@ConfigurationProperties(prefix = "sap.hosts")
public class SftpSapService {
	private Map<String, String> hosts;
	private String username;
	private String passwd;

	public Map<String, String> getHosts() {
		return hosts;
	}

	public void setHosts(Map<String, String> hosts) {
		this.hosts = hosts;
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

	@Autowired
	private BackupStatusRepo repo;
	
	public Map<String, String> getBakStatus() {
		Map<String, String> statusMap = new HashMap<>();
		Date today = new Date();
		hosts.forEach((k, v) -> {
			String logfile = "back" + k + "001.log";
			String str = null;
			try (Stream<String> stream = Files.lines(Paths.get("/oracle/" + k + "/sapbackup/" + logfile))) {
				List<String> list = stream.collect(Collectors.toList());
				str = list.get(list.size()-1);
				System.out.println(str);

			} catch (IOException e) {
				e.printStackTrace();
			}

			String dateStr = str.substring(35, 54);

		});
		return statusMap;
	}
}
