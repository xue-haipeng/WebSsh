package com.cnpc.domain.basis;

/**
 * Created by Xue on 11/05/16.
 */

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "host")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Host extends Root {

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

    // 无参构造器
    public Host() {

    }

    // 含参构造器
    public Host(String hostname, String domain_Suffix, String ip_Address, String system, String lifecycle_Status,
                String product, String node_Type, String os_Release, String is_Virtualized, String ha_Type, String location,
                String applicant, String approver, Date delivery_Date, Date expired_Date,
                String current_Status, String remarks) {
        super();
        this.hostname = hostname;
        this.domain_Suffix = domain_Suffix;
        this.ip_Address = ip_Address;
        this.system = system;
        this.lifecycle_Status = lifecycle_Status;
        this.product = product;
        this.node_Type = node_Type;
        this.os_Release = os_Release;
        this.is_Virtualized = is_Virtualized;
        this.ha_Type = ha_Type;
        this.location = location;
        this.applicant = applicant;
        this.approver = approver;
        this.delivery_Date = delivery_Date;
        this.expired_Date = expired_Date;
        this.current_Status = current_Status;
        this.remarks = remarks;
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
