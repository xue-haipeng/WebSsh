package com.cnpc.utils;

import javax.management.MBeanServerConnection;
import javax.management.MalformedObjectNameException;
import javax.management.ObjectName;
import javax.management.remote.JMXConnector;
import javax.management.remote.JMXConnectorFactory;
import javax.management.remote.JMXServiceURL;
import javax.naming.Context;
import java.io.IOException;
import java.util.Hashtable;

/**
 * Created by Xue on 01/23/17.
 */
public class WlsJmxConnUtil {

    private static MBeanServerConnection connection;
    private static JMXConnector connector;
    private static final String domainRuntime = "weblogic.management.mbeanservers.domainruntime";
    private static final String serverRuntime = "weblogic.management.mbeanservers.runtime";
    private static final ObjectName domainService;
    private static final ObjectName serverService;

    static {
        try {
            domainService = new ObjectName(
                    "com.bea:Name=DomainRuntimeService,Type=weblogic.management.mbeanservers.domainruntime.DomainRuntimeServiceMBean");
        }catch (MalformedObjectNameException e) {
            throw new AssertionError(e.getMessage());
        }
    }

    static {
        try {
            serverService = new ObjectName(
                    "com.bea:Name=RuntimeService,Type=weblogic.management.mbeanservers.runtime.RuntimeServiceMBean");
        } catch (MalformedObjectNameException e) {
            throw new AssertionError(e.getMessage());
        }
    }

    public static void initConnection(String hostname, String portString,
                                      String username, String passwd, String runtimeType) throws IOException {
        String protocol = "t3";
        Integer portInteger = Integer.valueOf(portString);
        int port = portInteger.intValue();
        String jndiroot = "/jndi/";
        JMXServiceURL serviceURL = new JMXServiceURL(protocol, hostname, port, jndiroot + runtimeType);
        Hashtable h = new Hashtable();
        h.put(Context.SECURITY_PRINCIPAL, username);
        h.put(Context.SECURITY_CREDENTIALS, passwd);
        h.put(JMXConnectorFactory.PROTOCOL_PROVIDER_PACKAGES, "weblogic.management.remote");
        connector = JMXConnectorFactory.connect(serviceURL, h);
        connection = connector.getMBeanServerConnection();
    }

    public static ObjectName[] getDomainRuntimes() throws Exception {
        return (ObjectName[]) connection.getAttribute(domainService,"ServerRuntimes");
    }

    public static ObjectName getServerRuntime() throws Exception {
        return (ObjectName) connection.getAttribute(serverService,"ServerRuntime");
    }

    public static ObjectName getJvmRuntime() throws Exception {
        ObjectName serverRt = (ObjectName) connection.getAttribute(serverService,"ServerRuntime");
        return (ObjectName) connection.getAttribute(serverRt, "JVMRuntime");
    }
}
