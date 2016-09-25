package com.cnpc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cnpc.service.LogReaderService;
import com.cnpc.service.SftpService;
import com.cnpc.service.SshService;

@Controller
public class HomeController {

	@RequestMapping("/")
	public String homePage() {
		return "home";
	}
	
	@RequestMapping("/formPage")
	public String formPage() {
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
//		SftpService.sftpService();
		SshService.sshService();
		System.out.println(SshService.out);
		System.out.println("...................................");
		LogReaderService.LogChecker();
		return "backup";
		
	}

}
