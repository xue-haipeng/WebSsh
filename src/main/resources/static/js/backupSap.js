	$(document).ready(function() {
		$.getJSON('/getBackupStatus', function (data) {
			var hp1 = [];
			var cp6 = [];
			var cpf = [];
			var cpo = [];
			var j1 = 0;
	    	var j2 = 0;
	    	var j3 = 0;
	    	var j4 = 0;
	    	
			for (i=0; i<data.length; i++) {
				if(data[i].ipAddress == '11.11.4.88') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					hp1[j1++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.147.17') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cp6[j2++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.3.18') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cpf[j3++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.3.202') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cpo[j4++] = [date, status];
				}
			}
			
			var today = new Date();
			for (i = 0, l = hp1.length; i < l; i++) {
				var date = new Date(hp1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2 td:eq(2)').html(hp1[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_erp_2 td:eq(1)').html(hp1[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_erp_2 td:eq(0)').html(hp1[i][1]);
				}				
			}
			for (i = 0, l = cp6.length; i < l; i++) {
				var date = new Date(cp6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2 td:eq(5)').html(cp6[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_erp_2 td:eq(4)').html(cp6[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_erp_2 td:eq(3)').html(cp6[i][1]);
				}				
			}
			for (i = 0, l = cpf.length; i < l; i++) {
				var date = new Date(cpf[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2 td:eq(8)').html(cpf[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_erp_2 td:eq(7)').html(cpf[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_erp_2 td:eq(6)').html(cpf[i][1]);
				}				
			}
			for (i = 0, l = cpo.length; i < l; i++) {
				var date = new Date(cpo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2 td:eq(11)').html(cpo[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_erp_2 td:eq(10)').html(cpo[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_erp_2 td:eq(9)').html(cpo[i][1]);
				}				
			}
		});
	});