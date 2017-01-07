package com.cnpc.utils;

import java.lang.management.ManagementFactory;
import java.lang.management.OperatingSystemMXBean;
import java.lang.management.ThreadMXBean;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by Xue on 01/07/17.
 */
public class SystemUtil {

    public static Map<String, String> getSysInfo() {
        Map<String, String> map = new HashMap<>();
        OperatingSystemMXBean system = ManagementFactory.getOperatingSystemMXBean();
        ThreadMXBean thread = ManagementFactory.getThreadMXBean();
        long totalPhysicalMemory = getLongFromOperatingSystem(system,"getTotalPhysicalMemorySize");
        long freePhysicalMemory = getLongFromOperatingSystem(system, "getFreePhysicalMemorySize");
        long usedPhysicalMemorySize = totalPhysicalMemory - freePhysicalMemory;
        map.put("totalPhysicalMemory", totalPhysicalMemory/1024/1024 + " MB");
        map.put("usedPhysicalMemory", usedPhysicalMemorySize/1024/1024 + " MB");
        map.put("freePhysicalMemory", freePhysicalMemory/1024/1024 + " MB");
        map.put("processor", Integer.toString(system.getAvailableProcessors()));
        map.put("jvmMaxMemory", Runtime.getRuntime().maxMemory()/1024/1024+" MB");
        map.put("jvmTotalMemory", Runtime.getRuntime().totalMemory()/1024/1024+" MB");
        map.put("jvmFreeMemory", Runtime.getRuntime().freeMemory()/1024/1024+" MB");
        map.put("loadAverage", Double.toString(system.getSystemLoadAverage()));
        map.put("currentThreadCount", Integer.toString(thread.getThreadCount()));
        map.put("peakThreadCount", Integer.toString(thread.getPeakThreadCount()));
        map.put("daemonThread", Integer.toString(thread.getDaemonThreadCount()));
        return map;
    }

    private static long getLongFromOperatingSystem(OperatingSystemMXBean operatingSystem, String methodName) {
        try {
            final Method method = operatingSystem.getClass().getMethod(methodName,
                    (Class<?>[]) null);
            method.setAccessible(true);
            return (Long) method.invoke(operatingSystem, (Object[]) null);
        } catch (final InvocationTargetException e) {
            if (e.getCause() instanceof Error) {
                throw (Error) e.getCause();
            } else if (e.getCause() instanceof RuntimeException) {
                throw (RuntimeException) e.getCause();
            }
            throw new IllegalStateException(e.getCause());
        } catch (final NoSuchMethodException e) {
            throw new IllegalArgumentException(e);
        } catch (final IllegalAccessException e) {
            throw new IllegalStateException(e);
        }
    }
}
