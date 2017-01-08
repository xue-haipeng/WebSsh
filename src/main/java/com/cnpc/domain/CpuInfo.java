package com.cnpc.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "xoapscpuinfo")
public class CpuInfo implements Serializable {
	private static final long serialVersionUID = -1L;

	@Column(nullable = false)
	private String hostname;

	@Id
	private Timestamp datetime;

	@Column(nullable = false)
	private Float cpuusage;

	public String getHostname() {
		return hostname;
	}

	public void setHostname(String hostname) {
		this.hostname = hostname;
	}

	public Timestamp getDatetime() {
		return datetime;
	}

	public void setDatetime(Timestamp datetime) {
		this.datetime = datetime;
	}

	public Float getCpuusage() {
		return cpuusage;
	}

	public void setCpuusage(Float cpuusage) {
		this.cpuusage = cpuusage;
	}

}
