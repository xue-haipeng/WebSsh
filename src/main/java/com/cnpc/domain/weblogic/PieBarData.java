package com.cnpc.domain.weblogic;

import java.util.List;
import java.util.Map;

/**
 * Created by Xue on 12/05/16.
 */
public class PieBarData {
    private Map<String, Integer> pieData;
    private Map<String, List<Integer>> barData;

    public Map<String, Integer> getPieData() {
        return pieData;
    }

    public void setPieData(Map<String, Integer> pieData) {
        this.pieData = pieData;
    }

    public Map<String, List<Integer>> getBarData() {
        return barData;
    }

    public void setBarData(Map<String, List<Integer>> barData) {
        this.barData = barData;
    }
}
