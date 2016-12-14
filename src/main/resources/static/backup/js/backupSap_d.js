	$(document).ready(function() {
		$.getJSON('/getBackupStatus', function (data) {
			var hd1 = [];
			var cd6 = [];
			var cdf = [];
			var cdo = [];
			var aa = [];
			var ed6 = [];
			var ed7 = [];
			var cod = [];
			var ed9 = [];
			var emd = [];
			var ed1 = [];
			var jd1 = [];
			var wd1 = [];
			var bd1 = [];
			var pd1 = [];
			var xd1 = [];
			var bd9 = [];
			var bdc = [];
			var bdd = [];
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
				if(data[i].ipAddress == '11.11.49.54') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					hd1[j1++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.12') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cd6[j2++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.22') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cdf[j3++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.237') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cdo[j4++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.159') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					aa[j5++] = [date, status];
				}

				if(data[i].ipAddress == '10.30.47.222') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					ed6[j6++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.225') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					ed7[j7++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.83') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cod[j8++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.85') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					ed9[j9++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.79') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					emd[j10++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.207') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					ed1[j11++] = [date, status];
				}/*
				if(data[i].ipAddress == '11.11.49.105') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					jd1[j12++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.47.44') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					wd1[j13++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.47.65') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bd1[j14++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.47.62') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					pd1[j15++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.47.25') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xd1[j16++] = [date, status];
				}*/

				if(data[i].ipAddress == '10.30.47.121') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bd9[j17++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.123') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bdc[j18++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.117') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bdd[j19++] = [date, status];
				}
			}
			
			var today = new Date();
			var ms_ystd = today.getTime() - 1000*60*60*24;
			var ms_dbyd = today.getTime() - 1000*60*60*48;
			var ystd = new Date(ms_ystd);
			var dbyd = new Date(ms_dbyd);

			for (i = 0, l = hd1.length; i < l; i++) {
				var date = new Date(hd1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_d td:eq(2)').html(hd1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_d td:eq(1)').html(hd1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_d td:eq(0)').html(hd1[i][1]);
				}				
			}
			for (i = 0, l = cd6.length; i < l; i++) {
				var date = new Date(cd6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_d td:eq(5)').html(cd6[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_d td:eq(4)').html(cd6[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_d td:eq(3)').html(cd6[i][1]);
				}				
			}
			for (i = 0, l = cdf.length; i < l; i++) {
				var date = new Date(cdf[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_d td:eq(8)').html(cdf[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_d td:eq(7)').html(cdf[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_d td:eq(6)').html(cdf[i][1]);
				}				
			}
			for (i = 0, l = cdo.length; i < l; i++) {
				var date = new Date(cdo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_d td:eq(11)').html(cdo[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_d td:eq(10)').html(cdo[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_d td:eq(9)').html(cdo[i][1]);
				}				
			}
			for (i = 0, l = aa.length; i < l; i++) {
				var date = new Date(aa[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_aa_d td:eq(2)').html(aa[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_aa_d td:eq(1)').html(aa[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_aa_d td:eq(0)').html(aa[i][1]);
				}
			}

			for (i = 0, l = ed6.length; i < l; i++) {
				var date = new Date(ed6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(2)').html(ed6[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(1)').html(ed6[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(0)').html(ed6[i][1]);
				}
			}
			for (i = 0, l = ed7.length; i < l; i++) {
				var date = new Date(ed7[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(5)').html(ed7[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(4)').html(ed7[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(3)').html(ed7[i][1]);
				}
			}
			for (i = 0, l = cod.length; i < l; i++) {
				var date = new Date(cod[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(8)').html(cod[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(7)').html(cod[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(6)').html(cod[i][1]);
				}
			}
			for (i = 0, l = ed9.length; i < l; i++) {
				var date = new Date(ed9[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(11)').html(ed9[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(10)').html(ed9[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(9)').html(ed9[i][1]);
				}
			}
			for (i = 0, l = emd.length; i < l; i++) {
				var date = new Date(emd[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(14)').html(emd[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(13)').html(emd[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(12)').html(emd[i][1]);
				}
			}
			for (i = 0, l = ed1.length; i < l; i++) {
				var date = new Date(ed1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(17)').html(ed1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(16)').html(ed1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(15)').html(ed1[i][1]);
				}
			}
			//纪检监察
			for (i = 0, l = jd1.length; i < l; i++) {
				var date = new Date(jd1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_jd1_d td:eq(2)').html(jd1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_jd1_d td:eq(1)').html(jd1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_jd1_d td:eq(0)').html(jd1[i][1]);
				}
			}
			//BW on Oracle
			for (i = 0, l = bd9.length; i < l; i++) {
				var date = new Date(bd9[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(20)').html(bd9[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(19)').html(bd9[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(18)').html(bd9[i][1]);
				}
			}
			for (i = 0, l = bdc.length; i < l; i++) {
				var date = new Date(bdc[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(23)').html(bdc[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(22)').html(bdc[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(21)').html(bdc[i][1]);
				}
			}
			for (i = 0, l = bdd.length; i < l; i++) {
				var date = new Date(bdd[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(26)').html(bdd[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(25)').html(bdd[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(24)').html(bdd[i][1]);
				}
			}
			//Deprecated ERP 1.0
			/*for (i = 0, l = wd1.length; i < l; i++) {
				var date = new Date(wd1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(29)').html(wd1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(28)').html(wd1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(27)').html(wd1[i][1]);
				}
			}
			for (i = 0, l = bd1.length; i < l; i++) {
				var date = new Date(bd1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(32)').html(bd1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(31)').html(bd1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(30)').html(bd1[i][1]);
				}
			}
			for (i = 0, l = pd1.length; i < l; i++) {
				var date = new Date(pd1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(35)').html(pd1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(34)').html(pd1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(33)').html(pd1[i][1]);
				}
			}
			for (i = 0, l = xd1.length; i < l; i++) {
				var date = new Date(xd1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_d td:eq(38)').html(xd1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_d td:eq(37)').html(xd1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_d td:eq(36)').html(xd1[i][1]);
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