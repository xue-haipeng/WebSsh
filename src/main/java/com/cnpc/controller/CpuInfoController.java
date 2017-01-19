package com.cnpc.controller;

import com.cnpc.domain.*;
import com.cnpc.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

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

	@Autowired
	private AscsCpuCurrRepository ascsCpuCurrRepository;

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

	@RequestMapping("/sapascs_bar")
	public Map<String, List<Double>> ascs6_avg() {
		List<Double> avg = new ArrayList<>();
		avg.add(ascsCpuInfoRepository.average6_emp());
		avg.add(ascsCpuInfoRepository.average6_osp());
		avg.add(ascsCpuInfoRepository.average6_cop());
		avg.add(ascsCpuInfoRepository.average6_ep9());
		avg.add(ascsCpuInfoRepository.average6_zyp());
		avg.add(ascsCpuInfoRepository.average6_ep1());
		avg.add(ascsCpuInfoRepository.average6_ep4());
		avg.add(ascsCpuInfoRepository.average6_tkm());
		avg.add(ascsCpuInfoRepository.average6_hp1());
		avg.add(ascsCpuInfoRepository.average6_ep6());
		avg.add(ascsCpuInfoRepository.average6_ep7());
		avg.add(ascsCpuInfoRepository.average6_cp6());
		avg.add(ascsCpuInfoRepository.average6_cpf());
		avg.add(ascsCpuInfoRepository.average6_cpo());
		avg.add(ascsCpuInfoRepository.average6_ep8());
		avg.add(ascsCpuInfoRepository.average6_cp8());
		avg.add(ascsCpuInfoRepository.average6_ep3());
		avg.add(ascsCpuInfoRepository.average6_cp3());
//		avg.add(ascsCpuInfoRepository.average6_ep2());
		avg.add(ascsCpuInfoRepository.average6_cp2());
		List<Double> max = new ArrayList<>();
		max.add(ascsCpuInfoRepository.max6_emp());
		max.add(ascsCpuInfoRepository.max6_osp());
		max.add(ascsCpuInfoRepository.max6_cop());
		max.add(ascsCpuInfoRepository.max6_ep9());
		max.add(ascsCpuInfoRepository.max6_zyp());
		max.add(ascsCpuInfoRepository.max6_ep1());
		max.add(ascsCpuInfoRepository.max6_ep4());
		max.add(ascsCpuInfoRepository.max6_tkm());
		max.add(ascsCpuInfoRepository.max6_hp1());
		max.add(ascsCpuInfoRepository.max6_ep6());
		max.add(ascsCpuInfoRepository.max6_ep7());
		max.add(ascsCpuInfoRepository.max6_cp6());
		max.add(ascsCpuInfoRepository.max6_cpf());
		max.add(ascsCpuInfoRepository.max6_cpo());
		max.add(ascsCpuInfoRepository.max6_ep8());
		max.add(ascsCpuInfoRepository.max6_cp8());
		max.add(ascsCpuInfoRepository.max6_ep3());
		max.add(ascsCpuInfoRepository.max6_cp3());
//		max.add(ascsCpuInfoRepository.max6_ep2()); // No Such Host Exist In Tivoli Database
		max.add(ascsCpuInfoRepository.max6_cp2());
		Map<String, List<Double>> map = new HashMap<>();
		List<Double> curr = new ArrayList<>();
		List<ASCSCpuCurr> list = ascsCpuCurrRepository.findAll();
		Double emp = 0.0;
		Double osp = 0.0;
		Double cop = 0.0;
		Double ep9 = 0.0;
		Double zyp = 0.0;
		Double ep1 = 0.0;
		Double ep4 = 0.0;
		Double tkm = 0.0;
		Double hp1 = 0.0;
		Double ep6 = 0.0;
		Double ep7 = 0.0;
		Double cp6 = 0.0;
		Double cpf = 0.0;
		Double cpo = 0.0;
		Double ep8 = 0.0;
		Double cp8 = 0.0;
		Double ep3 = 0.0;
		Double cp3 = 0.0;
//		Double ep2 = 0.0;
		Double cp2 = 0.0;

		for (ASCSCpuCurr i : list) {
			if ("EMPSCS".equals(i.getHostname())) {
				emp = i.getCpuusage();
			}
			if ("OSPSCS".equals(i.getHostname())) {
				osp = i.getCpuusage();
			}
			if ("COPSCS".equals(i.getHostname())) {
				cop = i.getCpuusage();
			}
			if ("VSCSERPEP09".equals(i.getHostname())) {
				ep9 = i.getCpuusage();
			}
			if ("ZYPSCS".equals(i.getHostname())) {
				zyp = i.getCpuusage();
			}
			if ("VSCSERPEP01".equals(i.getHostname())) {
				ep1 = i.getCpuusage();
			}
			if ("VSCSERPEP04".equals(i.getHostname())) {
				ep4 = i.getCpuusage();
			}
			if ("ERPTKM01".equals(i.getHostname())) {
				tkm = i.getCpuusage();
			}
			if ("VSCSERPHP01".equals(i.getHostname())) {
				hp1 = i.getCpuusage();
			}
			if ("VSCSERPEP06".equals(i.getHostname())) {
				ep6 = i.getCpuusage();
			}
			if ("VSCSERPEP07".equals(i.getHostname())) {
				ep7 = i.getCpuusage();
			}
			if ("EESAP6001".equals(i.getHostname())) {
				cp6 = i.getCpuusage();
			}
			if ("EESAPF001".equals(i.getHostname())) {
				cpf = i.getCpuusage();
			}
			if ("EESAPO001".equals(i.getHostname())) {
				cpo = i.getCpuusage();
			}
			if ("VSCSERPEP08".equals(i.getHostname())) {
				ep8 = i.getCpuusage();
			}
			if ("EESAP8001".equals(i.getHostname())) {
				cp8 = i.getCpuusage();
			}
			if ("VSCSERPEP03".equals(i.getHostname())) {
				ep3 = i.getCpuusage();
			}
			if ("EESAP3001".equals(i.getHostname())) {
				cp3 = i.getCpuusage();
			}/*
			if ("VSCSERPEP02".equals(i.getHostname())) {
				ep2 = i.getCpuusage();
			}*/
			if ("EESAP2001".equals(i.getHostname())) {
				cp2 = i.getCpuusage();
			}
		}

		curr.add(0, emp);
		curr.add(1, osp);
		curr.add(2, cop);
		curr.add(3, ep9);
		curr.add(4, zyp);
		curr.add(5, ep1);
		curr.add(6, ep4);
		curr.add(7, tkm);
		curr.add(8, hp1);
		curr.add(9, ep6);
		curr.add(10, ep7);
		curr.add(11, cp6);
		curr.add(12, cpf);
		curr.add(13, cpo);
		curr.add(14, ep8);
		curr.add(15, cp8);
		curr.add(16, ep3);
		curr.add(17, cp3);
//		curr.add(18, ep2);
		curr.add(18, cp2);

		map.put("avg", avg);
		map.put("max", max);
		map.put("curr", curr);
		return map;
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
