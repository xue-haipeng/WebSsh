package com.cnpc.domain.basis;

/**
 * Created by Xue on 11/06/16.
 */
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "application")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Application extends Root{


    private String system;
    private String project_Name;
    private String platform_Name;
    private String business_Line;
    private String lifecycle_Status;
    private String product;
    private String mw_Type;
    private String company;
    private String administrator;

    public Application() {

    }

    public Application(String system, String project_Name, String platform_Name, String business_Line,
                       String lifecycle_Status, String product, String mw_Type, String company, String administrator) {
        super();
        this.system = system;
        this.project_Name = project_Name;
        this.platform_Name = platform_Name;
        this.business_Line = business_Line;
        this.lifecycle_Status = lifecycle_Status;
        this.product = product;
        this.mw_Type = mw_Type;
        this.company = company;
        this.administrator = administrator;
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
