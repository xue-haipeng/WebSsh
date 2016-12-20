package com.cnpc.controller;

import com.cnpc.domain.*;
import com.cnpc.repository.*;
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

	@Autowired
	private Zhap5CpuInfoRepository zhap5CpuInfoRepository;

	@Autowired
	private BpmCpuInfoRepository bpmCpuInfoRepository;

	@Autowired
	private AscsCpuInfoRepository ascsCpuInfoRepository;

	@RequestMapping("/xoapsCpuInfo")
	public List<CpuInfo> cpuInfo() {
		return cpuInfoRepo.cpuBySystem();
	}

	@RequestMapping("/zhap5_cpuInfo")
	public List<Zhap5CpuInfo> zhap5CpuInfo() { return zhap5CpuInfoRepository.findAll(); }

	@RequestMapping("/bpm_cpuInfo")
	public List<BpmCpuInfo> bpmCpuInfo() { return bpmCpuInfoRepository.findAll(); }

	@RequestMapping("/ascs_cpu_line")
	public List<ASCSCpuInfo> ascsCpuInfo() { return ascsCpuInfoRepository.findAll(); }
	
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
