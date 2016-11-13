package com.cnpc.domain.basis;

/**
 * Created by Xue on 11/06/16.
 */

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "application")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Application {

    @SequenceGenerator(name="application_sequence", sequenceName="application_sequence")
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="application_sequence")
    private Long id;
    private String creater;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date create_Time;
    private String updater;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date update_Time;
    private String system;
    private String project_Name;
    private String platform_Name;
    private String business_Line;
    private String lifecycle_Status;
    private String product;
    private String mw_Type;
    private String company;
    private String administrator;

    public Application() {}

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

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public String getProject_Name() {
        return project_Name;
    }

    public void setProject_Name(String project_Name) {
        this.project_Name = project_Name;
    }

    public String getPlatform_Name() {
        return platform_Name;
    }

    public void setPlatform_Name(String platform_Name) {
        this.platform_Name = platform_Name;
    }

    public String getBusiness_Line() {
        return business_Line;
    }

    public void setBusiness_Line(String business_Line) {
        this.business_Line = business_Line;
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

    public String getMw_Type() {
        return mw_Type;
    }

    public void setMw_Type(String mw_Type) {
        this.mw_Type = mw_Type;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getAdministrator() {
        return administrator;
    }

    public void setAdministrator(String administrator) {
        this.administrator = administrator;
    }

}
