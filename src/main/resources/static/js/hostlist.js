$(document).ready(function() {
	$('#example').DataTable({
		"ajax" : {
			"url": "/listAllHosts",
			"dataSrc": ""
		},
		"columns" : [ {
			"data" : "hostname",
			render : function(data, type, full, meta) {
				if (!full["hostname"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "ipAddress",
			render : function(data, type, full, meta) {
				if (!full["ipAddress"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "system",
			render : function(data, type, full, meta) {
				if (!full["system"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "lifecycleStatus",
			render : function(data, type, full, meta) {
				if (!full["lifecycleStatus"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "platformName",
			render : function(data, type, full, meta) {
				if (!full["platformName"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "businessLine",
			render : function(data, type, full, meta) {
				if (!full["businessLine"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "nodeType",
			render : function(data, type, full, meta) {
				if (!full["nodeType"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "location",
			render : function(data, type, full, meta) {
				if (!full["location"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "administrators",
			"render" : function(data, type, full, meta) {
				if (!full["administrators"]) {
					return ""
				} else {
					return data;
				}
			}
		} ]
	});
});