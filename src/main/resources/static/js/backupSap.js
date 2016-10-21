	$(document).ready(function() {
		$.getJSON('/getBackupStatus', function (data) {
			var hp1 = [];
			var cp6 = [];
			var cpf = [];
			var cpo = [];
			var aa = [];
			var ep6 = [];
			var ep7 = [];
			var cop = [];
			var ep9 = [];
			var emp = [];
			var ep1 = [];
			var jp1 = [];
			var j1 = 0;
	    	var j2 = 0;
	    	var j3 = 0;
	    	var j4 = 0;
			var j5 = 0;
			var j6 = 0;
			var j7 = 0;
			var j8 = 0;
			var j9 = 0;
			var j10 = 0;
			var j11 = 0;
			var j12 = 0;
	    	
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
				if(data[i].ipAddress == '10.30.148.8') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					aa[j5++] = [date, status];
				}

				if(data[i].ipAddress == '10.30.147.26') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					ep6[j6++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.147.33') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					ep7[j7++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.3.149') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cop[j8++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.3.74') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					ep9[j9++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.5.213') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					emp[j10++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.36.157') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					ep1[j11++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.105') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					jp1[j12++] = [date, status];
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
			for (i = 0, l = aa.length; i < l; i++) {
				var date = new Date(aa[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_aa td:eq(2)').html(aa[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_aa td:eq(1)').html(aa[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_aa td:eq(0)').html(aa[i][1]);
				}
			}

			for (i = 0, l = ep6.length; i < l; i++) {
				var date = new Date(ep6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1 td:eq(2)').html(ep6[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_erp_1 td:eq(1)').html(ep6[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_erp_1 td:eq(0)').html(ep6[i][1]);
				}
			}
			for (i = 0, l = ep7.length; i < l; i++) {
				var date = new Date(ep7[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1 td:eq(5)').html(ep7[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_erp_1 td:eq(4)').html(ep7[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_erp_1 td:eq(3)').html(ep7[i][1]);
				}
			}
			for (i = 0, l = cop.length; i < l; i++) {
				var date = new Date(cop[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1 td:eq(8)').html(cop[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_erp_1 td:eq(7)').html(cop[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_erp_1 td:eq(6)').html(cop[i][1]);
				}
			}
			for (i = 0, l = ep9.length; i < l; i++) {
				var date = new Date(ep9[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1 td:eq(11)').html(ep9[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_erp_1 td:eq(10)').html(ep9[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_erp_1 td:eq(9)').html(ep9[i][1]);
				}
			}
			for (i = 0, l = emp.length; i < l; i++) {
				var date = new Date(emp[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1 td:eq(14)').html(emp[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_erp_1 td:eq(13)').html(emp[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_erp_1 td:eq(12)').html(emp[i][1]);
				}
			}
			for (i = 0, l = ep1.length; i < l; i++) {
				var date = new Date(ep1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1 td:eq(17)').html(ep1[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_erp_1 td:eq(16)').html(ep1[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_erp_1 td:eq(15)').html(ep1[i][1]);
				}
			}
			for (i = 0, l = jp1.length; i < l; i++) {
				var date = new Date(jp1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_jp1 td:eq(2)').html(jp1[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_jp1 td:eq(1)').html(jp1[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_jp1 td:eq(0)').html(jp1[i][1]);
				}
			}

			$('table').find('td').each(function() {
				if ($(this).text() == 'failed') {
					$(this).text('Failed').css('color', 'red');
				}
				if ($(this).text() == 'succeed') {
					$(this).text('OK').css('color', 'green');
				}
				if ($(this).text() == 'unknown') {
					$(this).text('Error').css('color', 'orange');
				}
			});
		});
	});