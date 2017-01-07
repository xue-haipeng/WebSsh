package com.cnpc.utils;

import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.*;

/**
 * Created by Xue on 01/07/17.
 */
public class NetWorkUtil {
    // 获取所有网卡的MAC地址
    public static List<Map<String, String>> getAllNics() {
        List<Map<String, String>> list = new ArrayList<>();
        try {
            Enumeration<NetworkInterface> ni = NetworkInterface.getNetworkInterfaces();// 返回所有网络接口的一个枚举实例
            while (ni.hasMoreElements()) {
                NetworkInterface network = ni.nextElement();// 获得当前网络接口
                Map<String, String> map = new HashMap<>();
                if (network != null) {
                    if (network.getHardwareAddress() != null) {
                        // 获得MAC地址
                        // 结果是一个byte数组，每项是一个byte，我们需要通过parseByte方法转换成常见的十六进制表示
                        byte[] addres = network.getHardwareAddress();
                        StringBuffer sb = new StringBuffer();
                        if (addres != null && addres.length > 1) {
                            sb.append(parseByte(addres[0])).append(":").append(parseByte(addres[1])).append(":")
                                    .append(parseByte(addres[2])).append(":").append(parseByte(addres[3])).append(":")
                                    .append(parseByte(addres[4])).append(":").append(parseByte(addres[5]));
                            if ("00:00:00:00:00:00".equals(sb.toString())) { continue; }
                            map.put("mac", sb.toString());
                        }
                        map.put("nic", network.getName());
                        Enumeration<InetAddress> inetAddresses = network.getInetAddresses();
                        while (inetAddresses.hasMoreElements()) {
                            InetAddress addr = inetAddresses.nextElement();
                            if (addr instanceof Inet4Address) {
                                map.put("hostname", addr.getHostName());
                                map.put("ip", addr.getHostAddress());
                            }
                        }
                        list.add(map);
                    }
                } else {
                    System.out.println("获取MAC地址发生异常");
                }
            }
        } catch (SocketException e) {
            e.printStackTrace();
        }
        return list;
    }

    // 格式化二进制
    private static String parseByte(byte b) {
        String s = "00" + Integer.toHexString(b);
        return s.substring(s.length() - 2);
    }
}
