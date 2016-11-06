package com.cnpc.repository.basis;

import com.cnpc.domain.basis.Host;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Xue on 11/06/16.
 */
@Repository
public interface HostRepository extends JpaRepository<Host, String> {

    List<Host> findByHostname(String hostname);
}
