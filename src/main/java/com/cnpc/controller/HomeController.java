package com.cnpc.controller;

import com.cnpc.service.SftpSapService;
import com.cnpc.service.SftpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String homePage() {
		return "home";
	}
	
	@RequestMapping(value="/changpasswd")
	public String changPass(@ModelAttribute("hostname") String hostname, @ModelAttribute("passwd") String passwd) {
		System.out.println(hostname);
		System.out.println(passwd);
		return "formPage";
	}
	
	@RequestMapping("/availability")
	public String availability() {
		return "availability";
	}
	
	@RequestMapping("/performance")
	public String performance() {
		return "performance";
	}
	
	@RequestMapping("/logsearch")
	public String logsearch() {
		return "logsearch";
	}
	
	@RequestMapping("/hostlist")
	public String hostlist() {
		return "hostlist";
	}
	
	
	
	@RequestMapping("/backup")
	public String backup() throws Exception {

//		
		System.out.println("....................................................");
		return "backup";
		
	}
	
	@Autowired
	SftpService sftpService;
	
	@RequestMapping("/triggerBakCheck")
	public String triggerBakCheck() {
		sftpService.saveBakStatus();
		return "backup";
	}

	@Autowired
	SftpSapService sftpSapService;

	@RequestMapping("/triggerSapBakCheck")
	public String triggerSapBakCheck() {
		sftpSapService.saveBakStatus();
		return "backup";
	}

	@RequestMapping("/export")
	public String export() {
		return "excel_export";
	}
}
