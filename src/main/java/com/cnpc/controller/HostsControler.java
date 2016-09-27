package com.cnpc.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cnpc.domain.AppPlatform;
import com.cnpc.domain.Hosts;
import com.cnpc.repository.AppPlatformRepo;

@RestController
public class HostsControler {
	
	@Autowired
	private AppPlatformRepo repo;
	
	@RequestMapping("/listAllHosts")
	public List<Hosts> listHosts() {
		List<Hosts> allHosts = repo.findAll();
		return allHosts;
	}
	@RequestMapping("/appPie")
	public List<AppPlatform> appPie() {
		return repo.appDistr();
	}

}
