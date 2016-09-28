package com.cnpc.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import com.cnpc.service.SftpService;

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
	
	@Autowired
	SftpService sftpService;
	
	@RequestMapping("/backup")
	public String backup() throws Exception {
//		SshService.sshService();
//		SftpService sftpService = new SftpService();
		Map<String, String> status = sftpService.getBakStatus();
//		System.out.println(SshService.out);
		System.out.println("......................." + status + ".............................");
//		LogReaderService.LogChecker();
		return "backup";
		
	}

}
