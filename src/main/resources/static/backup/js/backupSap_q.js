	$(document).ready(function() {
		$.getJSON('/getBackupStatus', function (data) {
			var hq1 = [];
			var cq6 = [];
			var cqf = [];
			var cqo = [];
			var aa = [];
			var eq6 = [];
			var eq7 = [];
			var coq = [];
			var eq9 = [];
			var emp = [];
			var eq1 = [];
			var jq1 = [];
			var wq1 = [];
			var bq1 = [];
			var pq1 = [];
			var xq1 = [];
			var bq9 = [];
			var bqc = [];
			var bqd = [];
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
				if(data[i].ipAddress == '11.11.49.55') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					hq1[j1++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.201') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cq6[j2++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.120') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cqf[j3++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.238') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					cqo[j4++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.176') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					aa[j5++] = [date, status];
				}

				if(data[i].ipAddress == '10.30.47.223') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					eq6[j6++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.226') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					eq7[j7++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.84') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					coq[j8++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.86') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					eq9[j9++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.80') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					emp[j10++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.208') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					eq1[j11++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.73') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bq9[j17++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.75') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bqc[j18++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.69') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bqd[j19++] = [date, status];
				}
			}
			
			var today = new Date();
			var ms_ystd = today.getTime() - 1000*60*60*24;
			var ms_dbyd = today.getTime() - 1000*60*60*48;
			var ystd = new Date(ms_ystd);
			var dbyd = new Date(ms_dbyd);

			for (i = 0, l = hq1.length; i < l; i++) {
				var date = new Date(hq1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_q td:eq(2)').html(hq1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_q td:eq(1)').html(hq1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_q td:eq(0)').html(hq1[i][1]);
				}				
			}
			for (i = 0, l = cq6.length; i < l; i++) {
				var date = new Date(cq6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_q td:eq(5)').html(cq6[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_q td:eq(4)').html(cq6[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_q td:eq(3)').html(cq6[i][1]);
				}				
			}
			for (i = 0, l = cqf.length; i < l; i++) {
				var date = new Date(cqf[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_q td:eq(8)').html(cqf[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_q td:eq(7)').html(cqf[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_q td:eq(6)').html(cqf[i][1]);
				}				
			}
			for (i = 0, l = cqo.length; i < l; i++) {
				var date = new Date(cqo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_2_q td:eq(11)').html(cqo[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_2_q td:eq(10)').html(cqo[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_2_q td:eq(9)').html(cqo[i][1]);
				}				
			}
			for (i = 0, l = aa.length; i < l; i++) {
				var date = new Date(aa[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_aa_q td:eq(2)').html(aa[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_aa_q td:eq(1)').html(aa[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_aa_q td:eq(0)').html(aa[i][1]);
				}
			}

			for (i = 0, l = eq6.length; i < l; i++) {
				var date = new Date(eq6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_q td:eq(2)').html(eq6[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_q td:eq(1)').html(eq6[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_q td:eq(0)').html(eq6[i][1]);
				}
			}
			for (i = 0, l = eq7.length; i < l; i++) {
				var date = new Date(eq7[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_q td:eq(5)').html(eq7[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_q td:eq(4)').html(eq7[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_q td:eq(3)').html(eq7[i][1]);
				}
			}
			for (i = 0, l = coq.length; i < l; i++) {
				var date = new Date(coq[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_q td:eq(8)').html(coq[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_q td:eq(7)').html(coq[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_q td:eq(6)').html(coq[i][1]);
				}
			}
			for (i = 0, l = eq9.length; i < l; i++) {
				var date = new Date(eq9[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_q td:eq(11)').html(eq9[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_q td:eq(10)').html(eq9[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_q td:eq(9)').html(eq9[i][1]);
				}
			}
			for (i = 0, l = emp.length; i < l; i++) {
				var date = new Date(emp[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_q td:eq(14)').html(emp[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_q td:eq(13)').html(emp[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_q td:eq(12)').html(emp[i][1]);
				}
			}
			for (i = 0, l = eq1.length; i < l; i++) {
				var date = new Date(eq1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_q td:eq(17)').html(eq1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_q td:eq(16)').html(eq1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_q td:eq(15)').html(eq1[i][1]);
				}
			}
			//纪检监察
			for (i = 0, l = jq1.length; i < l; i++) {
				var date = new Date(jq1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_jq1_q td:eq(2)').html(jq1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_jq1_q td:eq(1)').html(jq1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_jq1_q td:eq(0)').html(jq1[i][1]);
				}
			}
			//BW on Oracle
			for (i = 0, l = bq9.length; i < l; i++) {
				var date = new Date(bq9[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_q td:eq(20)').html(bq9[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_q td:eq(19)').html(bq9[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_q td:eq(18)').html(bq9[i][1]);
				}
			}
			for (i = 0, l = bqc.length; i < l; i++) {
				var date = new Date(bqc[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_q td:eq(23)').html(bqc[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_q td:eq(22)').html(bqc[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_q td:eq(21)').html(bqc[i][1]);
				}
			}
			for (i = 0, l = bqd.length; i < l; i++) {
				var date = new Date(bqd[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_erp_1_q td:eq(26)').html(bqd[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_erp_1_q td:eq(25)').html(bqd[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_erp_1_q td:eq(24)').html(bqd[i][1]);
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
					$(this).text('N/A').css('color', 'orange');
				}
			});
		});
	});