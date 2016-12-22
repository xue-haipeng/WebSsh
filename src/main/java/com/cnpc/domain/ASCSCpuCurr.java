package com.cnpc.domain;

/**
 * Created by Xue on 12/20/16.
 */
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

/**
 * Created by Xue on 12/01/16.
 */
@Entity
@Table(name = "sap_cpu_ascs_curr")
public class ASCSCpuCurr {

    @Column(nullable = false)
    private String hostname;

    @Id
    private Timestamp datetime;

    @Column(nullable = false)
    private Double cpuusage;

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public Timestamp getDatetime() {
        return datetime;
    }

    public void setDatetime(Timestamp datetime) {
        this.datetime = datetime;
    }

    public Double getCpuusage() {
        return cpuusage;
    }

    public void setCpuusage(Double cpuusage) {
        this.cpuusage = cpuusage;
    }

}