package com.cnpc.domain.weblogic;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by Xue on 12/06/16.
 */
@Entity
@Table(name = "sap_status")
public class TivoliSAPStatus implements Serializable {
    private static final long serialVersionUID = -1L;
    private String hostname;
    private String r3Name;
    @Id
    private Timestamp sampleTime;
    private String status;
    private String version;

    public TivoliSAPStatus(){}
    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public String getR3Name() {
        return r3Name;
    }

    public void setR3Name(String r3Name) {
        this.r3Name = r3Name;
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
