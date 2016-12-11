package com.cnpc.domain.weblogic;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

/**
 * Created by Xue on 12/06/16.
 */
@Entity
@Table(name = "was_status")
public class TivoliWAStatus {
    private static final long serialVersionUID = -1L;
    private String hostname;
    private String serverName;
    @Id
    private Timestamp sampleTime;
    private String status;
    private String version;

    public TivoliWAStatus(){}

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public String getServerName() {
        return serverName;
    }

    public void setServerName(String serverName) {
        this.serverName = serverName;
    }

    public Timestamp getSampleTime() {
        return sampleTime;
    }

    public void setSampleTime(Timestamp sampleTime) {
        this.sampleTime = sampleTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}
