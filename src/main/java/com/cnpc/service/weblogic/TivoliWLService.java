package com.cnpc.service.weblogic;

import com.cnpc.domain.weblogic.PieBarData;
import com.cnpc.domain.weblogic.TivoliWLStatus;
import com.cnpc.repository.TivoliWLSRepository;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 12/06/16.
 */
public class TivoliWLService {

    public static PieBarData computeStatus(TivoliWLSRepository repository) {

        int xoapsRunningCount = 0;
        int xoapsIllCount = 0;
        int xoapsShutCount = 0;
        List<TivoliWLStatus> xoaps = repository.findByHostnameLike("EXOAPS0%");
        for (TivoliWLStatus server : xoaps) {
            if (server.getStatus().equals("1")) {
                xoapsRunningCount += 1;
            } else if (server.getStatus().equals("3")) {
                xoapsIllCount +=1;
            } else if (server.getStatus().equals("100")) {
                xoapsShutCount += 1;
            }
        }

        int xoapfRunningCount = 0;
        int xoapfIllCount = 0;
        int xoapfShutCount = 0;
        List<TivoliWLStatus> xoapf = repository.findByHostnameLike("EXOAPF0%");
        for (TivoliWLStatus server : xoapf) {
            if (server.getStatus().equals("1")) {
                xoapfRunningCount += 1;
            } else if (server.getStatus().equals("3")) {
                xoapfIllCount +=1;
            } else if (server.getStatus().equals("100")) {
                xoapfShutCount += 1;
            }
        }

        int xoap4RunningCount = 0;
        int xoap4IllCount = 0;
        int xoap4ShutCount = 0;
        List<TivoliWLStatus> xoap4 = repository.findByHostnameLike("EXOAP40%");
        for (TivoliWLStatus server : xoap4) {
            if (server.getStatus().equals("1")) {
                xoap4RunningCount += 1;
            } else if (server.getStatus().equals("3")) {
                xoap4IllCount +=1;
            } else if (server.getStatus().equals("100")) {
                xoap4ShutCount += 1;
            }
        }

        int xoapoRunningCount = 0;
        int xoapoIllCount = 0;
        int xoapoShutCount = 0;
        List<TivoliWLStatus> xoapo = repository.findByHostnameLike("EXOAPO0%");
        for (TivoliWLStatus server : xoapo) {
            if (server.getStatus().equals("1")) {
                xoapoRunningCount += 1;
            } else if (server.getStatus().equals("3")) {
                xoapoIllCount +=1;
            } else if (server.getStatus().equals("100")) {
                xoapoShutCount += 1;
            }
        }

        int xraptRunningCount = 0;
        int xraptIllCount = 0;
        int xraptShutCount = 0;
        List<TivoliWLStatus> xrapt = repository.findByHostnameLike("EXRAPT0%");
        for (TivoliWLStatus server : xrapt) {
            if (server.getStatus().equals("1")) {
                xraptRunningCount += 1;
            } else if (server.getStatus().equals("3")) {
                xraptIllCount +=1;
            } else if (server.getStatus().equals("100")) {
                xraptShutCount += 1;
            }
        }

        int xmaptRunningCount = 0;
        int xmaptIllCount = 0;
        int xmaptShutCount = 0;
        List<TivoliWLStatus> xmapt = repository.findByHostnameLike("EXMAPT0%");
        for (TivoliWLStatus server : xmapt) {
            if (server.getStatus().equals("1")) {
                xmaptRunningCount += 1;
            } else if (server.getStatus().equals("3")) {
                xmaptIllCount +=1;
            } else if (server.getStatus().equals("100")) {
                xmaptShutCount += 1;
            }
        }

        int xbaptRunningCount = 0;
        int xbaptIllCount = 0;
        int xbaptShutCount = 0;
        List<TivoliWLStatus> xbapt = repository.findByHostnameLike("EXBAPT0%");
        for (TivoliWLStatus server : xbapt) {
            if (server.getStatus().equals("1")) {
                xbaptRunningCount += 1;
            } else if (server.getStatus().equals("3")) {
                xbaptIllCount +=1;
            } else if (server.getStatus().equals("100")) {
                xbaptShutCount += 1;
            }
        }

        int xsaptRunningCount = 0;
        int xsaptIllCount = 0;
        int xsaptShutCount = 0;
        List<TivoliWLStatus> xsapt = repository.findByHostnameLike("EXSAPT0%");
        for (TivoliWLStatus server : xsapt) {
            if (server.getStatus().equals("1")) {
                xsaptRunningCount += 1;
            } else if (server.getStatus().equals("3")) {
                xsaptIllCount +=1;
            } else if (server.getStatus().equals("100")) {
                xsaptShutCount += 1;
            }
        }

        int xfaptRunningCount = 0;
        int xfaptIllCount = 0;
        int xfaptShutCount = 0;
        List<TivoliWLStatus> xfapt = repository.findByHostnameLike("EXFAPT0%");
        for (TivoliWLStatus server : xfapt) {
            if (server.getStatus().equals("1")) {
                xfaptRunningCount += 1;
            } else if (server.getStatus().equals("3")) {
                xfaptIllCount +=1;
            } else if (server.getStatus().equals("100")) {
                xfaptShutCount += 1;
            }
        }

        int runningTotal = xoapsRunningCount + xoapfRunningCount + xoap4RunningCount + xoapoRunningCount + xraptRunningCount + xmaptRunningCount + xbaptRunningCount + xfaptRunningCount + xsaptRunningCount;
        int illnessTotal = xoapsIllCount + xoapfIllCount + xoap4IllCount + xoapoIllCount + xraptIllCount + xmaptIllCount + xbaptIllCount + xfaptIllCount + xsaptIllCount;
        int shutdownTotal = xoapsShutCount + xoapfShutCount + xoap4ShutCount + xoapoShutCount + xraptShutCount + xmaptShutCount + xbaptShutCount + xfaptShutCount + xsaptShutCount;

        Integer[] runingBar = {xmaptRunningCount, xraptRunningCount, xoapoRunningCount, xoapsRunningCount, xoapfRunningCount, xoap4RunningCount, xbaptRunningCount, xfaptRunningCount, xsaptRunningCount};
        Integer[] illnessBar = {xmaptIllCount, xraptIllCount, xoapoIllCount, xoapsIllCount, xoapfIllCount, xoap4IllCount, xbaptIllCount, xfaptIllCount, xsaptIllCount};
        Integer[] shutdownBar = {xmaptShutCount, xraptShutCount, xoapoShutCount, xoapsShutCount, xoapfShutCount, xoap4ShutCount, xbaptShutCount, xfaptShutCount, xsaptShutCount};

        PieBarData pieBarData = new PieBarData();
        Map<String, Integer> pie = new HashMap<>();
        Map<String, List<Integer>> bar = new HashMap<>();

        pie.put("running", runningTotal);
        pie.put("illness", illnessTotal);
        pie.put("shutdown", shutdownTotal);
        bar.put("running", Arrays.asList(runingBar));
        bar.put("illness", Arrays.asList(illnessBar));
        bar.put("shutdown", Arrays.asList(shutdownBar));

        pieBarData.setPieData(pie);
        pieBarData.setBarData(bar);

        return pieBarData;
    }
}
