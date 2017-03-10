package com.cnpc.domain.basis;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by Xue on 03/08/17.
 */
@Entity
@Table(name = "weekly_report")
public class WeeklyReport {
    @SequenceGenerator(name="sq_weeklyreport", sequenceName="sq_weeklyreport")
    @Id
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="sq_weeklyreport")
    private Long id;
    private String createUser;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createDate;
    private String updateUser;
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updateDate;
    private String systemName;
    private String issueBrief;
    private String appType;
    private String workType;
    private String issueDetail;
    private String solveProcedure;
    private String fileName;
    private String referenceDoc;

    public WeeklyReport(){}

    public WeeklyReport(String createUser, Date createDate, String updateUser, Date updateDate, String systemName, String issueBrief, String appType, String workType, String issueDetail, String solveProcedure, String fileName, String referenceDoc) {
        this.createUser = createUser;
        this.createDate = createDate;
        this.updateUser = updateUser;
        this.updateDate = updateDate;
        this.systemName = systemName;
        this.issueBrief = issueBrief;
        this.appType = appType;
        this.workType = workType;
        this.issueDetail = issueDetail;
        this.solveProcedure = solveProcedure;
        this.fileName = fileName;
        this.referenceDoc = referenceDoc;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCreateUser() {
        return createUser;
    }

    public void setCreateUser(String createUser) {
        this.createUser = createUser;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getUpdateUser() {
        return updateUser;
    }

    public void setUpdateUser(String updateUser) {
        this.updateUser = updateUser;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getSystemName() {
        return systemName;
    }

    public void setSystemName(String systemName) {
        this.systemName = systemName;
    }

    public String getIssueBrief() {
        return issueBrief;
    }

    public void setIssueBrief(String issueBrief) {
        this.issueBrief = issueBrief;
    }

    public String getAppType() {
        return appType;
    }

    public void setAppType(String appType) {
        this.appType = appType;
    }

    public String getWorkType() {
        return workType;
    }

    public void setWorkType(String workType) {
        this.workType = workType;
    }

    public String getIssueDetail() {
        return issueDetail;
    }

    public void setIssueDetail(String issueDetail) {
        this.issueDetail = issueDetail;
    }

    public String getSolveProcedure() {
        return solveProcedure;
    }

    public void setSolveProcedure(String solveProcedure) {
        this.solveProcedure = solveProcedure;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getReferenceDoc() {
        return referenceDoc;
    }

    public void setReferenceDoc(String referenceDoc) {
        this.referenceDoc = referenceDoc;
    }

    @Override
    public String toString() {
        return "WeeklyReport{" +
                "id=" + id +
                ", createUser='" + createUser + '\'' +
                ", createDate=" + createDate +
                ", updateUser='" + updateUser + '\'' +
                ", updateDate=" + updateDate +
                ", systemName='" + systemName + '\'' +
                ", issueBrief='" + issueBrief + '\'' +
                ", appType='" + appType + '\'' +
                ", workType='" + workType + '\'' +
                ", issueDetail='" + issueDetail + '\'' +
                ", solveProcedure='" + solveProcedure + '\'' +
                ", fileName='" + fileName + '\'' +
                ", referenceDoc='" + referenceDoc + '\'' +
                '}';
    }
}
