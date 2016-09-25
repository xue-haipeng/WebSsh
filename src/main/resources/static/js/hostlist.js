$(document).ready(function() {
	$('#example').DataTable({
		"ajax" : {
			"url": "data/sampledata.json",
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
			"data" : "ip_address",
			render : function(data, type, full, meta) {
				if (!full["ip_address"]) {
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
			"data" : "lifecycle_status",
			render : function(data, type, full, meta) {
				if (!full["lifecycle_status"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "platform_name",
			render : function(data, type, full, meta) {
				if (!full["platform_name"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "business_line",
			render : function(data, type, full, meta) {
				if (!full["business_line"]) {
					return ""
				} else {
					return data;
				}
			}
		}, {
			"data" : "node_type",
			render : function(data, type, full, meta) {
				if (!full["node_type"]) {
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
			"data" : "administrator",
			"render" : function(data, type, full, meta) {
				if (!full["administrator"]) {
					return ""
				} else {
					return data;
				}
			}
		} ]
	});
});