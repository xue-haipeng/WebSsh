package com.cnpc.service.basis;

import com.cnpc.domain.basis.Host;
import com.cnpc.repository.basis.HostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by Xue on 11/06/16.
 */

@Service("hostService")
public class HostService {
    @Autowired
    HostRepository repository;

    public void addHost (Host host) throws Exception {
        if (host.getCreater() == null || "".equals(host.getCreater())) {
            host.setCreater(SecurityContextHolder.getContext().getAuthentication().getName());
        }
        if (host.getCreate_Time() == null || "".equals(host.getCreate_Time())) {
            host.setCreate_Time(new Date());
        }

        repository.save(host);
    }

    public List<Host> getHostList(int offset, int limit, String sort, String order, String hostname) {
        Sort s = null;

        if (order != null && !"".equals(order.trim())) {
            if ("desc".equals(order)) {
                s = new Sort(Sort.Direction.DESC, "hostname");
            } else {
                s = new Sort(Sort.Direction.ASC, "hostname");
            }
        }
        if (s != null) {
            Pageable page = new PageRequest(1, 10, s);
        } else {
            Pageable page = new PageRequest(1, 10, new Sort(Sort.Direction.DESC, "hostname"));
        }

        if (hostname != null && !"".equals(hostname.trim())) {
            return repository.findByHostnameLike("%" + hostname + "%");
        }
        return repository.findAll();
    }

    public void deleteHost(List<Long> ids) throws Exception {
        ids.forEach(
                id -> {
                    if (id != null && !"".equals(id)) {
                        repository.delete(id);
                    }
                }
        );
    }

    public void updateHost(Host host) throws Exception {

        Host h = repository.findOne(host.getId());
        String currUsername = SecurityContextHolder.getContext().getAuthentication().getName();
        h.setUpdate_Time(new Date());
        h.setUpdater(currUsername);

        h.setHostname(host.getHostname());
        h.setDomain_Suffix(host.getDomain_Suffix());
        h.setIp_Address(host.getIp_Address());
        h.setSystem(host.getSystem());
        h.setLifecycle_Status(host.getLifecycle_Status());
        h.setProduct(host.getProduct());
        h.setNode_Type(host.getNode_Type());
        h.setOs_Release(host.getOs_Release());
        h.setIs_Virtualized(host.getIs_Virtualized());
        h.setHa_Type(host.getHa_Type());
        h.setLocation(host.getLocation());
        h.setApplicant(host.getApplicant());
        h.setApprover(host.getApprover());
        h.setDelivery_Date(host.getDelivery_Date());
        h.setExpired_Date(host.getExpired_Date());
        h.setCurrent_Status(host.getCurrent_Status());
        h.setRemarks(host.getRemarks());

        repository.saveAndFlush(h);
    }

    public static String judgeLocation(String ip) {
        String[] ipStr = ip.split("\\.");
        if (Integer.parseInt(ipStr[0]) == 10 && Integer.parseInt(ipStr[1]) == 30) {
            if ((Integer.parseInt(ipStr[2]) >= 32 && Integer.parseInt(ipStr[2]) <= 63) || (Integer.parseInt(ipStr[2]) >= 128 && Integer.parseInt(ipStr[2]) <= 143)) {
                return "M08";
            } else if (Integer.parseInt(ipStr[2]) >= 144 && Integer.parseInt(ipStr[2]) <= 191) {
                return "M10";
            }
        } else if (Integer.parseInt(ipStr[0]) == 11 && Integer.parseInt(ipStr[1]) == 11) {
            if (Integer.parseInt(ipStr[2]) >= 0 && Integer.parseInt(ipStr[2]) <= 63) {
                return "M01";
            } else if (Integer.parseInt(ipStr[2]) >= 64 && Integer.parseInt(ipStr[2]) <= 127) {
                return "M03";
            }
        }
        return null;
    }
}
