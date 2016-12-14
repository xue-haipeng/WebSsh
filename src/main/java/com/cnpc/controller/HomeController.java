package com.cnpc.controller;

import com.cnpc.repository.TivoliDBRepository;
import com.cnpc.repository.TivoliSAPRepository;
import com.cnpc.repository.TivoliWASRepository;
import com.cnpc.repository.TivoliWLSRepository;
import com.cnpc.service.SftpSapService;
import com.cnpc.service.SftpService;
import org.apache.catalina.servlet4preview.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletResponse;

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

	@Autowired
	TivoliWLSRepository wlsRepository;

	@Autowired
	TivoliWASRepository wasRepository;

	@Autowired
	TivoliSAPRepository sapRepository;

	@Autowired
	TivoliDBRepository dbRepository;

	@RequestMapping("/availability")
	public String availability(Model model) {
		model.addAttribute("wls_hosts", wlsRepository.countWlsHosts());
		model.addAttribute("wls_servers", wlsRepository.countWlsInstances());
		model.addAttribute("wlsRunning", wlsRepository.countWlsRunning());
		model.addAttribute("wlsIllness", wlsRepository.countWlsIllness());
		model.addAttribute("wlsShutdown", wlsRepository.countWlsShutdown());
		float wlsP = (float) wlsRepository.countWlsRunning()/(wlsRepository.countWlsRunning()+ wlsRepository.countWlsIllness()+ wlsRepository.countWlsShutdown());
		String wlsPercentP = String.format("%.2f", wlsP * 100) + "%";
		model.addAttribute("wlsPercentP", wlsPercentP);

		model.addAttribute("was_hosts", wasRepository.countWasHosts());
		model.addAttribute("was_servers", wasRepository.countWasInstances());
		model.addAttribute("wasRunning", wasRepository.countWasRunning());
		model.addAttribute("wasIllness", wasRepository.countWasIllness());
		model.addAttribute("wasShutdown", wasRepository.countWasShutdown());
		float wasP = (float) wasRepository.countWasRunning()/(wasRepository.countWasRunning()+ wasRepository.countWasIllness()+ wasRepository.countWasShutdown());
		String wasPercentP = String.format("%.2f", wasP * 100) + "%";
		model.addAttribute("wasPercentP", wasPercentP);

		model.addAttribute("sap_hosts", sapRepository.countSapHosts());
		model.addAttribute("sap_servers", sapRepository.countSapInstances());
		model.addAttribute("sapRunning", sapRepository.countSapRunning());
		model.addAttribute("sapIllness", 0);
		model.addAttribute("sapShutdown", sapRepository.countSapShutdown());
		float sapP = (float) sapRepository.countSapRunning()/(sapRepository.countSapRunning()+ 0 + sapRepository.countSapShutdown());
		String sapPercentP = String.format("%.2f", sapP * 100) + "%";
		model.addAttribute("sapPercentP", sapPercentP);

		model.addAttribute("oracle_hosts", dbRepository.countDbHosts());
		model.addAttribute("oracle_instances", dbRepository.countDbInstances());
		model.addAttribute("oracleRunning", dbRepository.countDbRunning());
		model.addAttribute("oracleIllness", 0);
		model.addAttribute("oracleShutdown", dbRepository.countDbShutdown());
		float oracleP = (float) dbRepository.countDbRunning()/(dbRepository.countDbRunning()+ 0 + dbRepository.countDbShutdown());
		String oraclePercentP = String.format("%.2f", oracleP * 100) + "%";
		model.addAttribute("oraclePercentP", oraclePercentP);

		model.addAttribute("jcptRunningP", wlsRepository.countJcptRunningP());
		model.addAttribute("jcptRunningQ", wlsRepository.countJcptRunningQ());
		model.addAttribute("jcptRunningD", wlsRepository.countJcptRunningD());
		model.addAttribute("jcptRunningT", wlsRepository.countJcptRunningT());
		model.addAttribute("jcptIllnessP", wlsRepository.countJcptIllnessP());
		model.addAttribute("jcptIllnessQ", wlsRepository.countJcptIllnessQ());
		model.addAttribute("jcptIllnessD", wlsRepository.countJcptIllnessD());
		model.addAttribute("jcptIllnessT", wlsRepository.countJcptIllnessT());
		model.addAttribute("jcptShutdownP", wlsRepository.countJcptShutdownP());
		model.addAttribute("jcptShutdownQ", wlsRepository.countJcptShutdownQ());
		model.addAttribute("jcptShutdownD", wlsRepository.countJcptShutdownD());
		model.addAttribute("jcptShutdownT", wlsRepository.countJcptShutdownT());

		float jcptP = (float) wlsRepository.countJcptRunningP()/(wlsRepository.countJcptRunningP()+ wlsRepository.countJcptIllnessP()+ wlsRepository.countJcptShutdownP());
		String jcptPercentP = String.format("%.2f", jcptP * 100) + "%";
		float jcptQ = (float) wlsRepository.countJcptRunningQ()/(wlsRepository.countJcptRunningQ()+ wlsRepository.countJcptIllnessQ()+ wlsRepository.countJcptShutdownQ());
		String jcptPercentQ = String.format("%.2f", jcptQ * 100) + "%";
		float jcptD = (float) wlsRepository.countJcptRunningD()/(wlsRepository.countJcptRunningD()+ wlsRepository.countJcptIllnessD()+ wlsRepository.countJcptShutdownD());
		String jcptPercentD = String.format("%.2f", jcptD * 100) + "%";
		float jcptT = (float) wlsRepository.countJcptRunningT()/(wlsRepository.countJcptRunningT()+ wlsRepository.countJcptIllnessT()+ wlsRepository.countJcptShutdownT());
		String jcptPercentT = String.format("%.2f", jcptT * 100) + "%";
		model.addAttribute("jcptPercentP", jcptPercentP);
		model.addAttribute("jcptPercentQ", jcptPercentQ);
		model.addAttribute("jcptPercentD", jcptPercentD);
		model.addAttribute("jcptPercentT", jcptPercentT);
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
		return "backup";
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public String logout(HttpServletRequest request, HttpServletResponse response) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null) {
			new SecurityContextLogoutHandler().logout(request, response, auth);
		}
		return "redirect:/login?logout";
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
}
