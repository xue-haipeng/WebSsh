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
			var wp1 = [];
			var bp1 = [];
			var pp1 = [];
			var xp1 = [];
			var bp9 = [];
			var bpc = [];
			var bpd = [];
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
			var j13 = 0;
			var j14 = 0;
			var j15 = 0;
			var j16 = 0;
			var j17 = 0;
			var j18 = 0;
			var j19 = 0;
	    	
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
				if(data[i].ipAddress == '11.11.47.44') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					wp1[j13++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.47.65') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bp1[j14++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.47.62') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					pp1[j15++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.47.25') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xp1[j16++] = [date, status];
				}

				if(data[i].ipAddress == '10.30.35.68') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bp9[j17++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.35.132') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bpc[j18++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.37.195') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bpd[j19++] = [date, status];
				}
			}
			
			var today = new Date();
			var ms_ystd = today.getTime() - 1000*60*60*24;
			var ms_dbyd = today.getTime() - 1000*60*60*48;
			var ystd = new Date(ms_ystd);
			var dbyd = new Date(ms_dbyd);

			for (i = 0, l = hp1.length; i < l; i++) {
				var date = new Date(hp1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_p td:eq(2)').html(hp1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_p td:eq(1)').html(hp1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_p td:eq(0)').html(hp1[i][1]);
				}				
			}
			for (i = 0, l = cp6.length; i < l; i++) {
				var date = new Date(cp6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_p td:eq(5)').html(cp6[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_p td:eq(4)').html(cp6[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_p td:eq(3)').html(cp6[i][1]);
				}				
			}
			for (i = 0, l = cpf.length; i < l; i++) {
				var date = new Date(cpf[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_p td:eq(8)').html(cpf[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_p td:eq(7)').html(cpf[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_p td:eq(6)').html(cpf[i][1]);
				}				
			}
			for (i = 0, l = cpo.length; i < l; i++) {
				var date = new Date(cpo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_p td:eq(11)').html(cpo[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_p td:eq(10)').html(cpo[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_p td:eq(9)').html(cpo[i][1]);
				}				
			}
			for (i = 0, l = aa.length; i < l; i++) {
				var date = new Date(aa[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_aa_p td:eq(2)').html(aa[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_aa_p td:eq(1)').html(aa[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_aa_p td:eq(0)').html(aa[i][1]);
				}
			}

			for (i = 0, l = ep6.length; i < l; i++) {
				var date = new Date(ep6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(2)').html(ep6[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(1)').html(ep6[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(0)').html(ep6[i][1]);
				}
			}
			for (i = 0, l = ep7.length; i < l; i++) {
				var date = new Date(ep7[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(5)').html(ep7[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(4)').html(ep7[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(3)').html(ep7[i][1]);
				}
			}
			for (i = 0, l = cop.length; i < l; i++) {
				var date = new Date(cop[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(8)').html(cop[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(7)').html(cop[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(6)').html(cop[i][1]);
				}
			}
			for (i = 0, l = ep9.length; i < l; i++) {
				var date = new Date(ep9[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(11)').html(ep9[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(10)').html(ep9[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(9)').html(ep9[i][1]);
				}
			}
			for (i = 0, l = emp.length; i < l; i++) {
				var date = new Date(emp[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(14)').html(emp[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(13)').html(emp[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(12)').html(emp[i][1]);
				}
			}
			for (i = 0, l = ep1.length; i < l; i++) {
				var date = new Date(ep1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(17)').html(ep1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(16)').html(ep1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(15)').html(ep1[i][1]);
				}
			}
			//纪检监察
			for (i = 0, l = jp1.length; i < l; i++) {
				var date = new Date(jp1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_jp1_p td:eq(2)').html(jp1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_jp1_p td:eq(1)').html(jp1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_jp1_p td:eq(0)').html(jp1[i][1]);
				}
			}
			//BW on Oracle
			for (i = 0, l = bp9.length; i < l; i++) {
				var date = new Date(bp9[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(20)').html(bp9[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(19)').html(bp9[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(18)').html(bp9[i][1]);
				}
			}
			for (i = 0, l = bpc.length; i < l; i++) {
				var date = new Date(bpc[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(23)').html(bpc[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(22)').html(bpc[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(21)').html(bpc[i][1]);
				}
			}
			for (i = 0, l = bpd.length; i < l; i++) {
				var date = new Date(bpd[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(26)').html(bpd[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(25)').html(bpd[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(24)').html(bpd[i][1]);
				}
			}
			//Deprecated ERP 1.0
			/*for (i = 0, l = wp1.length; i < l; i++) {
				var date = new Date(wp1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(29)').html(wp1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(28)').html(wp1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(27)').html(wp1[i][1]);
				}
			}
			for (i = 0, l = bp1.length; i < l; i++) {
				var date = new Date(bp1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(32)').html(bp1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(31)').html(bp1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(30)').html(bp1[i][1]);
				}
			}
			for (i = 0, l = pp1.length; i < l; i++) {
				var date = new Date(pp1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(35)').html(pp1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(34)').html(pp1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(33)').html(pp1[i][1]);
				}
			}
			for (i = 0, l = xp1.length; i < l; i++) {
				var date = new Date(xp1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_p td:eq(38)').html(xp1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_p td:eq(37)').html(xp1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_p td:eq(36)').html(xp1[i][1]);
				}
			}*/

			$('table').find('td').each(function() {
				if ($(this).text() == 'failed') {
					$(this).text('Failed').css('color', 'red');
				}
				if ($(this).text() == 'succeed') {
					$(this).text('OK').css('color', 'green');
				}
				if ($(this).text() == 'unknown') {
					$(this).text('N/A').css('color', 'orange');
				}
			});
		});
	});