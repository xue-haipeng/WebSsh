package com.cnpc.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "topcpuhosts")
public class TopCpuHost {
	@Id
	@Column(name = "hostname")
	private String hostname;
	@Column(name = "avgcpu12")
	private Double avgcpu12;
	@Column(name = "avgcpu24")
	private Double avgcpu24;

	public String getHostname() {
		return hostname;
	}

	public void setHostname(String hostname) {
		this.hostname = hostname;
	}

	public Double getAvgcpu12() {
		return avgcpu12;
	}

	public void setAvgcpu12(Double avgcpu12) {
		this.avgcpu12 = avgcpu12;
	}

	public Double getAvgcpu24() {
		return avgcpu24;
	}

	public void setAvgcpu24(Double avgcpu24) {
		this.avgcpu24 = avgcpu24;
	}

}
