package com.cnpc.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "backup_status")
public class BackupStatus {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;

	@Column(name = "ip_address")
	private String ipAddress;

	@Column(name = "record_date")
	private Date recordDate;

	@Column(name = "backup_status")
	private String backupStatus;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public Date getRecordDate() {
		return recordDate;
	}

	public void setRecordDate(Date recordDate) {
		this.recordDate = recordDate;
	}

	public String getBackupStatus() {
		return backupStatus;
	}

	public void setBackupStatus(String backupStatus) {
		this.backupStatus = backupStatus;
	}

	protected BackupStatus() {
	}

	public BackupStatus(String ipAddress, Date recordDate, String backupStatus) {
		this.ipAddress = ipAddress;
		this.recordDate = recordDate;
		this.backupStatus = backupStatus;
	}
}
