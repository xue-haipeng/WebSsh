package com.cnpc.controller;

import com.cnpc.domain.CpuInfo;
import com.cnpc.domain.TopCpuHost;
import com.cnpc.repository.CpuInfoRepo;
import com.cnpc.repository.TopCpuHostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CpuInfoController {

	@Autowired
	private CpuInfoRepo cpuInfoRepo;
	
	@Autowired
	private TopCpuHostRepo topCpuHostRepo;
	
	@RequestMapping("/cpuInfo")
	public List<CpuInfo> cpuInfo() {
		return cpuInfoRepo.cpuBySystem();
	}
	
	@RequestMapping("/topCpuHosts")
	public List<TopCpuHost> topCpuHosts() {

		List<TopCpuHost> topCpuHostList = null;
		try {
			topCpuHostList = topCpuHostRepo.findAll();
		} catch (Exception e) {
			topCpuHostList = topCpuHostRepo.findAll();
		}
		if (topCpuHostList == null) {
			topCpuHostList = topCpuHostRepo.findAll();
		}
		return topCpuHostList;
	}
}
