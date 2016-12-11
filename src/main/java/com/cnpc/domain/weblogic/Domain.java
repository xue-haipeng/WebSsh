package com.cnpc.domain.weblogic;

import org.springframework.stereotype.Component;

/**
 * Created by Xue on 12/04/16.
 */
@Component
public class Domain {
    private String name;
    private String ip;
    private String port;
    private String username;
    private String passwd;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setIp(String ip){
        this.ip = ip;
    }
    public String getIp(){
        return this.ip;
    }
    public void setPort(String port){
        this.port = port;
    }
    public String getPort(){
        return this.port;
    }
    public void setUsername(String username){
        this.username = username;
    }
    public String getUsername(){
        return this.username;
    }
    public void setPasswd(String passwd){
        this.passwd = passwd;
    }
    public String getPasswd(){
        return this.passwd;
    }

    public Domain(){}
    public Domain(String name, String ip, String port, String username, String passwd) {
        this.name = name;
        this.ip = ip;
        this.port = port;
        this.username = username;
        this.passwd = passwd;
    }
}
