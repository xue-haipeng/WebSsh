	$(document).ready(function() {
		$.getJSON('/getBackupStatus', function (data) {
			var xodps = [];
			var xodpf = [];
			var xodp4 = [];
			var xodpo = [];
			var xrdpt = [];
			var xmdpt = [];
			var xbdpt = [];
			var xsdpt = [];
			var zhdp5 = [];
			var zmdpt = [];
			var zkdp4 = [];
			var bmdpt = [];
			var audpt = [];
			var fhdps = [];
			var bodp6 = [];
			var bodpd_2 = [];
			var bodpd_1 = [];
			var bodp9_2 = [];
			var bodp9_1 = [];
			var bodpc_2 = [];
			var bodpc_1 = [];
			var bodpo = [];
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
				if(data[i].ipAddress == '10.30.37.11') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xodps[j1++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.3.58') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xodpf[j2++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.4.58') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xodp4[j3++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.3.250') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xodpo[j4++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.36.56') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xrdpt[j5++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.36.11') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xmdpt[j6++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.36.8') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xbdpt[j7++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.36.55') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xsdpt[j8++] = [date, status];
				}
				//自主开发
				if(data[i].ipAddress == '10.30.36.67') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					zhdp5[j9++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.148.121') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					zmdpt[j10++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.150.251') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					zkdp4[j11++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.148.119') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bmdpt[j21++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.148.120') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					audpt[j22++] = [date, status];
				}
				//非结构化
				if(data[i].ipAddress == '10.30.147.132') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					fhdps[j12++] = [date, status];
				}
				//决策平台
				if(data[i].ipAddress == '10.30.147.122') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodp6[j13++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.5.250') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodpd_2[j14++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.37.251') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodpd_1[j15++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.3.121') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodp9_2[j16++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.35.123') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodp9_1[j17++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.3.186') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodpc_2[j18++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.35.187') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodpc_1[j19++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.35.251') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodpo[j20++] = [date, status];
				}
			}
			
			var today = new Date();
			var ms_ystd = today.getTime() - 1000*60*60*24;
			var ms_dbyd = today.getTime() - 1000*60*60*48;
			var ystd = new Date(ms_ystd);
			var dbyd = new Date(ms_dbyd);
			for (i = 0, l = xodps.length; i < l; i++) {
				var date = new Date(xodps[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(2)').html(xodps[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(1)').html(xodps[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(0)').html(xodps[i][1]);
				}				
			}
			for (i = 0, l = xodpf.length; i < l; i++) {
				var date = new Date(xodpf[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(5)').html(xodpf[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(4)').html(xodpf[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(3)').html(xodpf[i][1]);
				}				
			}
			for (i = 0, l = xodp4.length; i < l; i++) {
				var date = new Date(xodp4[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(8)').html(xodp4[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(7)').html(xodp4[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(6)').html(xodp4[i][1]);
				}				
			}
			for (i = 0, l = xodpo.length; i < l; i++) {
				var date = new Date(xodpo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(11)').html(xodpo[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(10)').html(xodpo[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(9)').html(xodpo[i][1]);
				}				
			}
			for (i = 0, l = xmdpt.length; i < l; i++) {
				var date = new Date(xmdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(14)').html(xmdpt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(13)').html(xmdpt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(12)').html(xmdpt[i][1]);
				}
			}
			for (i = 0, l = xrdpt.length; i < l; i++) {
				var date = new Date(xrdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(17)').html(xrdpt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(16)').html(xrdpt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(15)').html(xrdpt[i][1]);
				}				
			}
			for (i = 0, l = xbdpt.length; i < l; i++) {
				var date = new Date(xbdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(20)').html(xbdpt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(19)').html(xbdpt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(18)').html(xbdpt[i][1]);
				}
			}
			for (i = 0, l = xsdpt.length; i < l; i++) {
				var date = new Date(xsdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(23)').html(xsdpt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(22)').html(xsdpt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(21)').html(xsdpt[i][1]);
				}				
			}
			// 自主开发
			for (i = 0, l = zhdp5.length; i < l; i++) {
				var date = new Date(zhdp5[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_d td:eq(2)').html(zhdp5[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_d td:eq(1)').html(zhdp5[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_d td:eq(0)').html(zhdp5[i][1]);
				}				
			}
			for (i = 0, l = zmdpt.length; i < l; i++) {
				var date = new Date(zmdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_d td:eq(5)').html(zmdpt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_d td:eq(4)').html(zmdpt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_d td:eq(3)').html(zmdpt[i][1]);
				}				
			}
			for (i = 0, l = zkdp4.length; i < l; i++) {
				var date = new Date(zkdp4[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_d td:eq(8)').html(zkdp4[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_d td:eq(7)').html(zkdp4[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_d td:eq(6)').html(zkdp4[i][1]);
				}				
			}
			for (i = 0, l = bmdpt.length; i < l; i++) {
				var date = new Date(bmdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_d td:eq(11)').html(bmdpt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_d td:eq(10)').html(bmdpt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_d td:eq(9)').html(bmdpt[i][1]);
				}
			}
			//非结构化
			for (i = 0, l = fhdps.length; i < l; i++) {
				var date = new Date(fhdps[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_nosql_d td:eq(2)').html(fhdps[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_nosql_d td:eq(1)').html(fhdps[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_nosql_d td:eq(0)').html(fhdps[i][1]);
				}
			}
			//审计信息/报表
			for (i = 0, l = audpt.length; i < l; i++) {
				var date = new Date(audpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_au_d td:eq(2)').html(audpt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_au_d td:eq(1)').html(audpt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_au_d td:eq(0)').html(audpt[i][1]);
				}
			}
			//决策支持
			for (i = 0, l = bodp6.length; i < l; i++) {
				var date = new Date(bodp6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(2)').html(bodp6[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(1)').html(bodp6[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(0)').html(bodp6[i][1]);
				}
			}
			for (i = 0, l = bodpd_2.length; i < l; i++) {
				var date = new Date(bodpd_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(5)').html(bodpd_2[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(4)').html(bodpd_2[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(3)').html(bodpd_2[i][1]);
				}
			}
			for (i = 0, l = bodpd_1.length; i < l; i++) {
				var date = new Date(bodpd_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(8)').html(bodpd_1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(7)').html(bodpd_1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(6)').html(bodpd_1[i][1]);
				}
			}
			for (i = 0, l = bodp9_2.length; i < l; i++) {
				var date = new Date(bodp9_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(11)').html(bodp9_2[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(10)').html(bodp9_2[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(9)').html(bodp9_2[i][1]);
				}
			}
			for (i = 0, l = bodp9_1.length; i < l; i++) {
				var date = new Date(bodp9_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(14)').html(bodp9_1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(13)').html(bodp9_1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(12)').html(bodp9_1[i][1]);
				}
			}
			for (i = 0, l = bodpc_2.length; i < l; i++) {
				var date = new Date(bodpc_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(17)').html(bodpc_2[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(16)').html(bodpc_2[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(15)').html(bodpc_2[i][1]);
				}
			}
			for (i = 0, l = bodpc_1.length; i < l; i++) {
				var date = new Date(bodpc_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(20)').html(bodpc_1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(19)').html(bodpc_1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(18)').html(bodpc_1[i][1]);
				}
			}
			for (i = 0, l = bodpo.length; i < l; i++) {
				var date = new Date(bodpo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(23)').html(bodpo[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(22)').html(bodpo[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(21)').html(bodpo[i][1]);
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