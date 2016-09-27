package com.cnpc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cnpc.domain.CpuInfo;
import com.cnpc.repository.CpuInfoRepo;

@RestController
public class CpuInfoController {

	@Autowired
	private CpuInfoRepo repo;
	
	@RequestMapping("/cpuInfo")
	public List<CpuInfo> cpuInfo() {
		List<CpuInfo> list = repo.cpuBySystem();
		return list;
	}
}
