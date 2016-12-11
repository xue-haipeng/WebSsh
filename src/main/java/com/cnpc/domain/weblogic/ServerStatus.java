package com.cnpc.domain.weblogic;

import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 12/05/16.
 */
public class ServerStatus {
    private String domain;
    private List<Map<String, String>> cluster;

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public List<Map<String, String>> getCluster() {
        return cluster;
    }

    public void setCluster(List<Map<String, String>> cluster) {
        this.cluster = cluster;
    }

}
