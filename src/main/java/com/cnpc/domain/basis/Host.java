package com.cnpc.domain.basis;

/**
 * Created by Xue on 11/05/16.
 */

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "host")
public class Host {

    @SequenceGenerator(name="host_sequence", sequenceName="host_sequence")
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="host_sequence")
    private Long id;
    private String creater;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date create_Time;
    private String updater;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date update_Time;
    private String hostname;
    private String domain_Suffix;
    private String ip_Address;
    private String system;
    private String lifecycle_Status;
    private String product;
    private String node_Type;
    private String os_Release;
    private String is_Virtualized;
    private String ha_Type;
    private String location;
    private String applicant;
    private String approver;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date delivery_Date;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date expired_Date;
    private String current_Status;
    private String remarks;

    public Host() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCreater() {
        return creater;
    }

    public void setCreater(String creater) {
        this.creater = creater;
    }

    public Date getCreate_Time() {
        return create_Time;
    }

    public void setCreate_Time(Date create_Time) {
        this.create_Time = create_Time;
    }

    public String getUpdater() {
        return updater;
    }

    public void setUpdater(String updater) {
        this.updater = updater;
    }

    public Date getUpdate_Time() {
        return update_Time;
    }

    public void setUpdate_Time(Date update_Time) {
        this.update_Time = update_Time;
    }

    public String getHostname() {
        return hostname;
    }

    public void setHostname(String hostname) {
        this.hostname = hostname;
    }

    public String getDomain_Suffix() {
        return domain_Suffix;
    }

    public void setDomain_Suffix(String domain_Suffix) {
        this.domain_Suffix = domain_Suffix;
    }

    public String getIp_Address() {
        return ip_Address;
    }

    public void setIp_Address(String ip_Address) {
        this.ip_Address = ip_Address;
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public String getLifecycle_Status() {
        return lifecycle_Status;
    }

    public void setLifecycle_Status(String lifecycle_Status) {
        this.lifecycle_Status = lifecycle_Status;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getNode_Type() {
        return node_Type;
    }

    public void setNode_Type(String node_Type) {
        this.node_Type = node_Type;
    }

    public String getOs_Release() {
        return os_Release;
    }

    public void setOs_Release(String os_Release) {
        this.os_Release = os_Release;
    }

    public String getIs_Virtualized() {
        return is_Virtualized;
    }

    public void setIs_Virtualized(String is_Virtualized) {
        this.is_Virtualized = is_Virtualized;
    }

    public String getHa_Type() {
        return ha_Type;
    }

    public void setHa_Type(String ha_Type) {
        this.ha_Type = ha_Type;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getApplicant() {
        return applicant;
    }

    public void setApplicant(String applicant) {
        this.applicant = applicant;
    }

    public String getApprover() {
        return approver;
    }

    public void setApprover(String approver) {
        this.approver = approver;
    }

    public Date getDelivery_Date() {
        return delivery_Date;
    }

    public void setDelivery_Date(Date delivery_Date) {
        this.delivery_Date = delivery_Date;
    }

    public Date getExpired_Date() {
        return expired_Date;
    }

    public void setExpired_Date(Date expired_Date) {
        this.expired_Date = expired_Date;
    }

    public String getCurrent_Status() {
        return current_Status;
    }

    public void setCurrent_Status(String current_Status) {
        this.current_Status = current_Status;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

}
