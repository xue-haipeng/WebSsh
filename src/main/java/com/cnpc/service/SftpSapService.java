package com.cnpc.service;

import com.cnpc.domain.BackupStatus;
import com.cnpc.repository.BackupStatusRepo;
import com.cnpc.utils.JschSftpSapUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

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
	
	public void saveBakStatus() {
		hosts.forEach((k, v) -> {
			String logfile = null;
			Path directory = Paths.get("/oracle/" + k + "/sapbackup");
			Optional<File> newestFile = Arrays.stream(directory.toFile().listFiles()).filter(f -> f.isFile()).max((f1, f2) -> Long.compare(f1.lastModified(), f2.lastModified()));
			if (newestFile.isPresent()) {
				File newest = newestFile.get();
				logfile = newest.getPath();
				System.out.println(logfile);

				JschSftpSapUtil.sftp(v, username, passwd, logfile);
				String status = JschSftpSapUtil.getLastLine();
				repo.save(new BackupStatus(v, new Date(newest.lastModified()), status));
			} else {
				System.out.println("No Such Directory ....");
			}

		});
	}
}
