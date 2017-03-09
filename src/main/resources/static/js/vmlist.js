$(function() {
	var m01 = "http://10.30.49.76:9000/vcenter/m01/vms";
    var m03 = "http://10.30.49.76:9000/vcenter/m03/vms";
    var m08 = "http://10.30.49.76:9000/vcenter/m08/vms";
    var m10 = "http://10.30.49.76:9000/vcenter/m10/vms";
    var cpnp = "http://10.30.49.76:9000/vcenter/cpnp/vms";
    var jlnp = "http://10.30.49.76:9000/vcenter/jlnp/vms";
    $("#m01").addClass("activated_btn");
	showTable(m01);
    $("#m01").click(function () {
        $("#m01").addClass('activated_btn');
        $("#m03").removeClass('activated_btn');
        $("#m08").removeClass("activated_btn");
        $("#m10").removeClass("activated_btn");
        $("#cpnp").removeClass("activated_btn");
        $("#jlnp").removeClass("activated_btn");
        showTable(m01);
    });
    $("#m03").click(function () {
        $("#m01").removeClass("activated_btn");
        $("#m03").addClass('activated_btn');
        $("#m08").removeClass("activated_btn");
        $("#m10").removeClass("activated_btn");
        $("#cpnp").removeClass("activated_btn");
        $("#jlnp").removeClass("activated_btn");
        showTable(m03);
    } );
    $("#m08").click( function () {
        $("#m01").removeClass("activated_btn");
        $("#m03").removeClass("activated_btn");
        $("#m08").addClass("activated_btn");
        $("#m10").removeClass("activated_btn");
        $("#cpnp").removeClass("activated_btn");
        $("#jlnp").removeClass("activated_btn");
		showTable(m08);
    });
    $("#m10").click(function () {
        $("#m01").removeClass("activated_btn");
        $("#m03").removeClass("activated_btn");
        $("#m08").removeClass("activated_btn");
        $("#m10").addClass("activated_btn");
        $("#cpnp").removeClass("activated_btn");
        $("#jlnp").removeClass("activated_btn");
        showTable(m10);
    });
    $("#cpnp").click(function () {
        $("#m01").removeClass("activated_btn");
        $("#m03").removeClass("activated_btn");
        $("#m08").removeClass("activated_btn");
        $("#m10").removeClass("activated_btn");
        $("#cpnp").addClass("activated_btn");
        $("#jlnp").removeClass("activated_btn");
        showTable(cpnp);
    });
    $("#jlnp").click(function () {
        $("#m01").removeClass("activated_btn");
        $("#m03").removeClass("activated_btn");
        $("#m08").removeClass("activated_btn");
        $("#m10").removeClass("activated_btn");
        $("#cpnp").removeClass("activated_btn");
        $("#jlnp").addClass("activated_btn");
        showTable(jlnp);
    });

});

function showTable(url) {
    $('#example').DataTable({
        "destroy": true,
        "ajax" : {
            // "url": "http://10.30.49.76:9000/vcenter/m10/vms",
			"url": url,
            "dataSrc": ""
        },
        "dom": 'lBfrtip',
        "buttons": [
            'excelHtml5'
        ],
        "columns" : [ {
            "data" : "vmName",
            render : function(data, type, full, meta) {
                if (!full["vmName"]) {
                    return ""
                } else {
                    return data;
                }
            }
        }, {
            "data" : "hostname",
            render : function(data, type, full, meta) {
                if (!full["hostname"]) {
                    return ""
                } else {
                    return data;
                }
            }
        }, {
            "data" : "ip",
            render : function(data, type, full, meta) {
                if (!full["ip"]) {
                    return ""
                } else {
                    return data;
                }
            }
        }, {
            "data" : "powerState",
            render : function(data, type, full, meta) {
                if (!full["powerState"]) {
                    return ""
                } else {
                    return data;
                }
            }
        }, {
            "data" : "guestState",
            render : function(data, type, full, meta) {
                if (!full["guestState"]) {
                    return ""
                } else {
                    return data;
                }
            }
        }, {
            "data" : "overallStatus",
            render : function(data, type, full, meta) {
                if (!full["overallStatus"]) {
                    return ""
                } else {
                    return data;
                }
            }
        }, {
            "data" : "cpuCount",
            render : function(data, type, full, meta) {
                if (!full["cpuCount"]) {
                    return ""
                } else {
                    return data;
                }
            }
        }, {
            "data" : "memory",
            render : function(data, type, full, meta) {
                if (!full["memory"]) {
                    return ""
                } else {
                    return data;
                }
            }
        }, {
            "data" : "vdiskCount",
            "render" : function(data, type, full, meta) {
                if (!full["vdiskCount"]) {
                    return ""
                } else {
                    return data;
                }
            }
        }, {
            "data" : "host",
            "render" : function(data, type, full, meta) {
                if (!full["host"]) {
                    return ""
                } else {
                    return data;
                }
            }
        }]
    });
}