package com.cnpc.domain.weblogic;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

/**
 * Created by Xue on 12/06/16.
 */
@Entity
@Table(name = "oracle_status")
public class TivoliDBStatus {
    private static final long serialVersionUID = -1L;
    private String hostname;
    @Id
    private Timestamp sampleTime;
    private String dbName;
    private String instanceName;
    private String status;
    private String version;

    public TivoliDBStatus(){}

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public Timestamp getSampleTime() {
        return sampleTime;
    }

    public void setSampleTime(Timestamp sampleTime) {
        this.sampleTime = sampleTime;
    }

    public String getDbName() {
        return dbName;
    }

    public void setDbName(String dbName) {
        this.dbName = dbName;
    }

    public String getInstanceName() {
        return instanceName;
    }

    public void setInstanceName(String instanceName) {
        this.instanceName = instanceName;
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
