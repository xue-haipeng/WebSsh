package com.cnpc.service.basis;

import com.cnpc.domain.basis.Host;
import com.cnpc.repository.basis.HostRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
        repository.save(host);
    }

    public List<Host> getHostList(int offset, int limit, String sort, String order, String hostname) {
//        Sort s = new Sort(Sort.Direction.DESC, "id");
//        Pageable pageable = new PageRequest(offset, limit, s);

        if (hostname != null && !"".equals(hostname.trim())) {
            return repository.findByHostname(hostname);
        }
        return repository.findAll();
    }

    public void deleteHost(List<String> ids) throws Exception {
        ids.forEach(
                id -> {
                    if (id != null && !"".equals(id.trim())) {
                        repository.delete(id);
                    }
                }
        );
    }

    public void updateHost(Host host) throws Exception {
        String currUsername = SecurityContextHolder.getContext().getAuthentication().getName();
        host.setUpdateTime(new Date());
        host.setUpdater(currUsername);
        repository.saveAndFlush(host);
    }
}
