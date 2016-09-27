package com.cnpc.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "erp_hosts")
public class Hosts {

	@Column(name = "hostname")
	private String hostname;
	@Id
	@Column(name = "ip_address")
	private String ipAddress;
	@Column(name = "system")
	private String system;
	@Column(name = "lifecycle_status")
	private String lifecycleStatus;
	@Column(name = "platform_name")
	private String platformName;
	@Column(name = "business_line")
	private String businessLine;
	@Column(name = "node_type")
	private String nodeType;
	@Column(name = "location")
	private String location;
	@Column(name = "administrator")
	private String administrators;

	public String getHostname() {
		return hostname;
	}

	public void setHostname(String hostname) {
		this.hostname = hostname;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getSystem() {
		return system;
	}

	public void setSystem(String system) {
		this.system = system;
	}

	public String getLifecycleStatus() {
		return lifecycleStatus;
	}

	public void setLifecycleStatus(String lifecycleStatus) {
		this.lifecycleStatus = lifecycleStatus;
	}

	public String getPlatformName() {
		return platformName;
	}

	public void setPlatformName(String platformName) {
		this.platformName = platformName;
	}

	public String getBusinessLine() {
		return businessLine;
	}

	public void setBusinessLine(String businessLine) {
		this.businessLine = businessLine;
	}

	public String getNodeType() {
		return nodeType;
	}

	public void setNodeType(String nodeType) {
		this.nodeType = nodeType;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getAdministrators() {
		return administrators;
	}

	public void setAdministrators(String administrators) {
		this.administrators = administrators;
	}

}
