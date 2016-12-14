$(document).ready(function() {
    $.getJSON('/getBackupStatus', function (data) {
			var xodqs = [];
			var xodqf = [];
			var xodq4 = [];
			var xodqo = [];
			var xrdqt = [];
			var xmdqt = [];
			var xbdqt = [];
			var xsdqt = [];
			var zhdq5 = [];
			var zmdqt = [];
			var zkdq4 = [];
			var bmdqt = [];
			var audqt = [];
			var fhdqs = [];
			var bodq6 = [];
			var bodqd_2 = [];
			var bodqd_1 = [];
			var bodq9_2 = [];
			var bodq9_1 = [];
			var bodqc_2 = [];
			var bodqc_1 = [];
			var bodqo = [];
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
			var j20 = 0;
			var j21 = 0;
			var j22 = 0;

			for (i=0; i<data.length; i++) {
				if(data[i].ipAddress == '10.30.47.96') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xodqs[j1++] = [date, status];
                    xodqf[j2++] = [date, status];
                    xodq4[j3++] = [date, status];
                    xodqo[j4++] = [date, status];
                    xrdqt[j5++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.97') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xmdqt[j6++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.100') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xbdqt[j7++] = [date, status];
				}/*
				if(data[i].ipAddress == '10.30.36.55') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xsdqt[j8++] = [date, status];
				}*/
				//自主开发
				if(data[i].ipAddress == '11.11.49.43') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					zhdq5[j9++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.49.70') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					zmdqt[j10++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.17') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					zkdq4[j11++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.49.72') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bmdqt[j21++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.49.92') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					audqt[j22++] = [date, status];
				}
				//非结构化
				if(data[i].ipAddress == '10.30.47.182') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					fhdqs[j12++] = [date, status];
				}
				//决策平台
				if(data[i].ipAddress == '10.30.47.52') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodq6[j13++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.71') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodqd_2[j14++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.70') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodqd_1[j15++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.69') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodq9_2[j16++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.74') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodq9_1[j17++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.70') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodqc_2[j18++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.76') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodqc_1[j19++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.71') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodqo[j20++] = [date, status];
				}
			}
			
			var today = new Date();
			var ms_ystd = today.getTime() - 1000*60*60*24;
			var ms_dbyd = today.getTime() - 1000*60*60*48;
			var ystd = new Date(ms_ystd);
			var dbyd = new Date(ms_dbyd);
			for (i = 0, l = xodqs.length; i < l; i++) {
				var date = new Date(xodqs[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_q td:eq(2)').html(xodqs[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_q td:eq(1)').html(xodqs[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_q td:eq(0)').html(xodqs[i][1]);
				}				
			}
			for (i = 0, l = xodqf.length; i < l; i++) {
				var date = new Date(xodqf[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_q td:eq(5)').html(xodqf[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_q td:eq(4)').html(xodqf[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_q td:eq(3)').html(xodqf[i][1]);
				}				
			}
			for (i = 0, l = xodq4.length; i < l; i++) {
				var date = new Date(xodq4[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_q td:eq(8)').html(xodq4[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_q td:eq(7)').html(xodq4[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_q td:eq(6)').html(xodq4[i][1]);
				}				
			}
			for (i = 0, l = xodqo.length; i < l; i++) {
				var date = new Date(xodqo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_q td:eq(11)').html(xodqo[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_q td:eq(10)').html(xodqo[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_q td:eq(9)').html(xodqo[i][1]);
				}				
			}
			for (i = 0, l = xmdqt.length; i < l; i++) {
				var date = new Date(xmdqt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_q td:eq(14)').html(xmdqt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_q td:eq(13)').html(xmdqt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_q td:eq(12)').html(xmdqt[i][1]);
				}
			}
			for (i = 0, l = xrdqt.length; i < l; i++) {
				var date = new Date(xrdqt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_q td:eq(17)').html(xrdqt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_q td:eq(16)').html(xrdqt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_q td:eq(15)').html(xrdqt[i][1]);
				}				
			}
			for (i = 0, l = xbdqt.length; i < l; i++) {
				var date = new Date(xbdqt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_q td:eq(20)').html(xbdqt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_q td:eq(19)').html(xbdqt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_q td:eq(18)').html(xbdqt[i][1]);
				}
			}
			for (i = 0, l = xsdqt.length; i < l; i++) {
				var date = new Date(xsdqt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_q td:eq(23)').html(xsdqt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_q td:eq(22)').html(xsdqt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_q td:eq(21)').html(xsdqt[i][1]);
				}				
			}
			// 自主开发
			for (i = 0, l = zhdq5.length; i < l; i++) {
				var date = new Date(zhdq5[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_q td:eq(2)').html(zhdq5[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_q td:eq(1)').html(zhdq5[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_q td:eq(0)').html(zhdq5[i][1]);
				}				
			}
			for (i = 0, l = zmdqt.length; i < l; i++) {
				var date = new Date(zmdqt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_q td:eq(5)').html(zmdqt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_q td:eq(4)').html(zmdqt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_q td:eq(3)').html(zmdqt[i][1]);
				}				
			}
			for (i = 0, l = zkdq4.length; i < l; i++) {
				var date = new Date(zkdq4[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_q td:eq(8)').html(zkdq4[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_q td:eq(7)').html(zkdq4[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_q td:eq(6)').html(zkdq4[i][1]);
				}				
			}
			for (i = 0, l = bmdqt.length; i < l; i++) {
				var date = new Date(bmdqt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_q td:eq(11)').html(bmdqt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_q td:eq(10)').html(bmdqt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_q td:eq(9)').html(bmdqt[i][1]);
				}
			}
			//非结构化
			for (i = 0, l = fhdqs.length; i < l; i++) {
				var date = new Date(fhdqs[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_nosql_q td:eq(2)').html(fhdqs[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_nosql_q td:eq(1)').html(fhdqs[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_nosql_q td:eq(0)').html(fhdqs[i][1]);
				}
			}
			//审计信息/报表
			for (i = 0, l = audqt.length; i < l; i++) {
				var date = new Date(audqt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_au_q td:eq(2)').html(audqt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_au_q td:eq(1)').html(audqt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_au_q td:eq(0)').html(audqt[i][1]);
				}
			}
			//决策支持
			for (i = 0, l = bodq6.length; i < l; i++) {
				var date = new Date(bodq6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_q td:eq(2)').html(bodq6[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_q td:eq(1)').html(bodq6[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_q td:eq(0)').html(bodq6[i][1]);
				}
			}
			for (i = 0, l = bodqd_2.length; i < l; i++) {
				var date = new Date(bodqd_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_q td:eq(5)').html(bodqd_2[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_q td:eq(4)').html(bodqd_2[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_q td:eq(3)').html(bodqd_2[i][1]);
				}
			}
			for (i = 0, l = bodqd_1.length; i < l; i++) {
				var date = new Date(bodqd_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_q td:eq(8)').html(bodqd_1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_q td:eq(7)').html(bodqd_1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_q td:eq(6)').html(bodqd_1[i][1]);
				}
			}
			for (i = 0, l = bodq9_2.length; i < l; i++) {
				var date = new Date(bodq9_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_q td:eq(11)').html(bodq9_2[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_q td:eq(10)').html(bodq9_2[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_q td:eq(9)').html(bodq9_2[i][1]);
				}
			}
			for (i = 0, l = bodq9_1.length; i < l; i++) {
				var date = new Date(bodq9_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_q td:eq(14)').html(bodq9_1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_q td:eq(13)').html(bodq9_1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_q td:eq(12)').html(bodq9_1[i][1]);
				}
			}
			for (i = 0, l = bodqc_2.length; i < l; i++) {
				var date = new Date(bodqc_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_q td:eq(17)').html(bodqc_2[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_q td:eq(16)').html(bodqc_2[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_q td:eq(15)').html(bodqc_2[i][1]);
				}
			}
			for (i = 0, l = bodqc_1.length; i < l; i++) {
				var date = new Date(bodqc_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_q td:eq(20)').html(bodqc_1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_q td:eq(19)').html(bodqc_1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_q td:eq(18)').html(bodqc_1[i][1]);
				}
			}
			for (i = 0, l = bodqo.length; i < l; i++) {
				var date = new Date(bodqo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_q td:eq(23)').html(bodqo[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_q td:eq(22)').html(bodqo[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_q td:eq(21)').html(bodqo[i][1]);
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

		var today = new Date();
		var yesterday = new Date(today.getTime() - 24*60*60*1000);
		var day_bf_yst = new Date(today.getTime() - 2*24*60*60*1000);
		$('table').find('th').each(function() {
			if ($(this).text() == '今天') {
				$(this).text(today.getMonth()+1 +"月"+today.getDate() +"日");
			} else if ($(this).text() == '昨天') {
				$(this).text(yesterday.getMonth()+1 +"月"+yesterday.getDate() +"日");
			} else if ($(this).text() == '前天') {
				$(this).text(day_bf_yst.getMonth()+1 +"月"+day_bf_yst.getDate() +"日");
			}
		});
	});