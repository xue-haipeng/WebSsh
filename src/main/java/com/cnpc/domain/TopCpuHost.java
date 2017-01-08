package com.cnpc.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "topcpuhosts")
public class TopCpuHost implements Serializable {
	private static final long serialVersionUID = -1L;
	@Id
	@Column(name = "hostname")
	private String hostname;
	@Column(name = "avgcpu3")
	private Double avgcpu3;
	@Column(name = "avgcpu6")
	private Double avgcpu6;
	@Column(name = "avgcpu12")
	private Double avgcpu12;

	public String getHostname() {
		return hostname;
	}

	public void setHostname(String hostname) {
		this.hostname = hostname;
	}

	public Double getAvgcpu3() {
		return avgcpu3;
	}

	public void setAvgcpu3(Double avgcpu3) {
		this.avgcpu3 = avgcpu3;
	}

	public Double getAvgcpu6() {
		return avgcpu6;
	}

	public void setAvgcpu6(Double avgcpu6) {
		this.avgcpu6 = avgcpu6;
	}

	public Double getAvgcpu12() {
		return avgcpu12;
	}

	public void setAvgcpu12(Double avgcpu12) {
		this.avgcpu12 = avgcpu12;
	}
}
