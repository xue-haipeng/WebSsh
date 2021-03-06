/**
 * Created by Xue on 12/04/16.
 */
$(function() {
    $("#project_href").click(function() {
        $('#project_table').DataTable({
            retrieve: true,
            "ajax": {
                "url": "http://11.11.47.72:10000/openshift/getProjectResources",
                "dataSrc": ""
            },
            "columns": [
                { "data": "name" },
                { "data": "status" },
                {
                    "data": "labels",
                    render: function (data, type, row) {
                        if (data.length != 0) {
                            var str = data.substring(1, data.length-1).split(", ");
                            return '<span class="badge" style="background-color: #6bd2a3;">' + str.length + '</span>';
                        } else {
                            return '<span class="badge" style="background-color: #6bd2a3;">0</span>';
                        }
                    }
                }
            ]
        });
    });

    $("#node_href").click(function() {
        $('#node_table').DataTable({
            retrieve: true,
            "ajax": {
                "url": "http://11.11.47.72:10000/openshift/getNodeResources",
                "dataSrc": ""
            },
            "columns": [
                { "data": "name" },
                { "data": "status" },
                {
                    "data": "labels",
                    render: function (data, type, row) {
                        if (data.length != 0) {
                            var str = data.substring(1, data.length-1).split(", ");
                            return '<span class="badge" style="background-color: #6bd2a3;">' + str.length + '</span>';
                        } else {
                            return '<span class="badge" style="background-color: #6bd2a3;">0</span>';
                        }
                    }
                }
            ]
        });
    });
    $("#route_href").click(function() {
        $('#route_table').DataTable({
            retrieve: true,
            "ajax": {
                "url": "http://11.11.47.72:10000/openshift/getRouteResources",
                "dataSrc": ""
            },
            "columns": [
                { "data": "project" },
                { "data": "name" },
                { "data": "route" }
            ]
        });
    });
    $("#svc_href").click(function() {
        $('#svc_table').DataTable({
            retrieve: true,
            "ajax": {
                "url": "http://11.11.47.72:10000/openshift/getSvcResources",
                "dataSrc": ""
            },
            "columns": [
                { "data": "project" },
                { "data": "name" },
                { "data": "selector" }
            ]
        });
    });
    $("#dc_href").click(function() {
        $('#dc_table').DataTable({
            retrieve: true,
            "ajax": {
                "url": "http://11.11.47.72:10000/openshift/getDcResources",
                "dataSrc": ""
            },
            "columns": [
                { "data": "project" },
                { "data": "name" },
                { "data": "replica" }
            ]
        });
    });
    $("#bc_href").click(function() {
        $('#bc_table').DataTable({
            retrieve: true,
            "ajax": {
                "url": "http://11.11.47.72:10000/openshift/getBcResources",
                "dataSrc": ""
            },
            "columns": [
                { "data": "project" },
                { "data": "name" },
                { "data": "output" }
            ]
        });
    });
    $("#is_href").click(function() {
        $('#is_table').DataTable({
            retrieve: true,
            "ajax": {
                "url": "http://11.11.47.72:10000/openshift/getIsResources",
                "dataSrc": ""
            },
            "columns": [
                { "data": "project" },
                { "data": "name" },
                { "data": "imageRepo" }
            ]
        });
    });
    $("#pod_href").click(function() {
        $('#pod_table').DataTable({
            retrieve: true,
            "ajax": {
                "url": "http://11.11.47.72:10000/openshift/getPodResources",
                "dataSrc": ""
            },
            "columns": [
                { "data": "project" },
                { "data": "name" },
                { "data": "phase" }
            ]
        });
    });
});

