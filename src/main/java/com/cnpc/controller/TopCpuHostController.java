package com.cnpc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cnpc.domain.TopCpuHost;
import com.cnpc.repository.TopCpuHostRepo;

@RestController
public class TopCpuHostController {
	@Autowired
	private TopCpuHostRepo repo;

	@RequestMapping("/topCpuHosts")
	public List<TopCpuHost> topCpuHosts() {
		return repo.findAll();
	}

}
