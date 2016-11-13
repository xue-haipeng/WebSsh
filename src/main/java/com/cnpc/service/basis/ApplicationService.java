package com.cnpc.service.basis;

import com.cnpc.domain.basis.Application;
import com.cnpc.repository.basis.ApplicationRepository;
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
@Service("applicationService")
public class ApplicationService {
    @Autowired
    ApplicationRepository repository;

    public void addApplication (Application application) throws Exception {
        if (application.getCreater() == null || "".equals(application.getCreater())) {
            application.setCreater(SecurityContextHolder.getContext().getAuthentication().getName());
        }
        if (application.getCreate_Time() == null || "".equals(application.getCreate_Time())) {
            application.setCreate_Time(new Date());
        }
        repository.save(application);
    }

    public List<Application> getApplicationList(int offset, int limit, String sort, String order, String system) {
        Sort s = null;

        if (order != null && !"".equals(order.trim())) {
            if ("desc".equals(order)) {
                s = new Sort(Sort.Direction.DESC, "system");
            } else {
                s = new Sort(Sort.Direction.ASC, "system");
            }
        }
        if (s != null) {
            Pageable page = new PageRequest(1, 10, s);
        } else {
            Pageable page = new PageRequest(1, 10, new Sort(Sort.Direction.DESC, "system"));
        }

        if (system != null && !"".equals(system.trim())) {
            return repository.findBySystem(system);
        }
        return repository.findAll();
    }

    public void deleteApplication(List<Long> ids) throws Exception {
        ids.forEach(
                id -> {
                    if (id != null && !"".equals(id)) {
                        repository.delete(id);
                    }
                }
        );
    }

    public void updateApplication(Application application) throws Exception {

        String currUsername = SecurityContextHolder.getContext().getAuthentication().getName();
        application.setUpdate_Time(new Date());
        application.setUpdater(currUsername);

        repository.saveAndFlush(application);
    }
}
