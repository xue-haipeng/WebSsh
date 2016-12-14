	$(document).ready(function() {
		$.getJSON('/getBackupStatus', function (data) {
			var xodds = [];
			var xoddf = [];
			var xodd4 = [];
			var xoddo = [];
			var xrddt = [];
			var xmddt = [];
			var xbddt = [];
			var xsddt = [];
			var zhdd5 = [];
			var zmddt = [];
			var zkdd4 = [];
			var bmddt = [];
			var auddt = [];
			var fhdds = [];
			var bodd6 = [];
			var boddd_2 = [];
			var boddd_1 = [];
			var bodd9_2 = [];
			var bodd9_1 = [];
			var boddc_2 = [];
			var boddc_1 = [];
			var boddo = [];
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
				if(data[i].ipAddress == '10.30.47.138') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xodds[j1++] = [date, status];
                    xoddf[j2++] = [date, status];
                    xodd4[j3++] = [date, status];
                    xoddo[j4++] = [date, status];
                    xrddt[j5++] = [date, status];
				}/*
				if(data[i].ipAddress == '11.11.3.58') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xoddf[j2++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.4.58') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xodd4[j3++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.3.250') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xoddo[j4++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.36.56') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xrddt[j5++] = [date, status];
				}*/
				if(data[i].ipAddress == '10.30.47.139') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xmddt[j6++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.142') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xbddt[j7++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.187') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					xsddt[j8++] = [date, status];
				}
				//自主开发
				if(data[i].ipAddress == '10.30.47.152') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					zhdd5[j9++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.49.69') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					zmddt[j10++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.16') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					zkdd4[j11++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.49.64') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bmddt[j21++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.49.94') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					auddt[j22++] = [date, status];
				}
				//非结构化
				if(data[i].ipAddress == '10.30.47.165') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					fhdds[j12++] = [date, status];
				}
				//决策平台
				if(data[i].ipAddress == '10.30.47.103') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodd6[j13++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.68') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					boddd_2[j14++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.118') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					boddd_1[j15++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.66') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodd9_2[j16++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.122') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					bodd9_1[j17++] = [date, status];
				}
				if(data[i].ipAddress == '11.11.49.67') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					boddc_2[j18++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.124') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					boddc_1[j19++] = [date, status];
				}
				if(data[i].ipAddress == '10.30.47.120') {
					var date = data[i].recordDate;
					var status = data[i].backupStatus;
					boddo[j20++] = [date, status];
				}
			}
			
			var today = new Date();
			var ms_ystd = today.getTime() - 1000*60*60*24;
			var ms_dbyd = today.getTime() - 1000*60*60*48;
			var ystd = new Date(ms_ystd);
			var dbyd = new Date(ms_dbyd);
			for (i = 0, l = xodds.length; i < l; i++) {
				var date = new Date(xodds[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(2)').html(xodds[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(1)').html(xodds[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(0)').html(xodds[i][1]);
				}				
			}
			for (i = 0, l = xoddf.length; i < l; i++) {
				var date = new Date(xoddf[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(5)').html(xoddf[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(4)').html(xoddf[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(3)').html(xoddf[i][1]);
				}				
			}
			for (i = 0, l = xodd4.length; i < l; i++) {
				var date = new Date(xodd4[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(8)').html(xodd4[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(7)').html(xodd4[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(6)').html(xodd4[i][1]);
				}				
			}
			for (i = 0, l = xoddo.length; i < l; i++) {
				var date = new Date(xoddo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(11)').html(xoddo[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(10)').html(xoddo[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(9)').html(xoddo[i][1]);
				}				
			}
			for (i = 0, l = xmddt.length; i < l; i++) {
				var date = new Date(xmddt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(14)').html(xmddt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(13)').html(xmddt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(12)').html(xmddt[i][1]);
				}
			}
			for (i = 0, l = xrddt.length; i < l; i++) {
				var date = new Date(xrddt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(17)').html(xrddt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(16)').html(xrddt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(15)').html(xrddt[i][1]);
				}				
			}
			for (i = 0, l = xbddt.length; i < l; i++) {
				var date = new Date(xbddt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(20)').html(xbddt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(19)').html(xbddt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(18)').html(xbddt[i][1]);
				}
			}
			for (i = 0, l = xsddt.length; i < l; i++) {
				var date = new Date(xsddt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo_d td:eq(23)').html(xsddt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_xo_d td:eq(22)').html(xsddt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_xo_d td:eq(21)').html(xsddt[i][1]);
				}				
			}
			// 自主开发
			for (i = 0, l = zhdd5.length; i < l; i++) {
				var date = new Date(zhdd5[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_d td:eq(2)').html(zhdd5[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_d td:eq(1)').html(zhdd5[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_d td:eq(0)').html(zhdd5[i][1]);
				}				
			}
			for (i = 0, l = zmddt.length; i < l; i++) {
				var date = new Date(zmddt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_d td:eq(5)').html(zmddt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_d td:eq(4)').html(zmddt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_d td:eq(3)').html(zmddt[i][1]);
				}				
			}
			for (i = 0, l = zkdd4.length; i < l; i++) {
				var date = new Date(zkdd4[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_d td:eq(8)').html(zkdd4[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_d td:eq(7)').html(zkdd4[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_d td:eq(6)').html(zkdd4[i][1]);
				}				
			}
			for (i = 0, l = bmddt.length; i < l; i++) {
				var date = new Date(bmddt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk_d td:eq(11)').html(bmddt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_zk_d td:eq(10)').html(bmddt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_zk_d td:eq(9)').html(bmddt[i][1]);
				}
			}
			//非结构化
			for (i = 0, l = fhdds.length; i < l; i++) {
				var date = new Date(fhdds[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_nosql_d td:eq(2)').html(fhdds[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_nosql_d td:eq(1)').html(fhdds[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_nosql_d td:eq(0)').html(fhdds[i][1]);
				}
			}
			//审计信息/报表
			for (i = 0, l = auddt.length; i < l; i++) {
				var date = new Date(auddt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_au_d td:eq(2)').html(auddt[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_au_d td:eq(1)').html(auddt[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_au_d td:eq(0)').html(auddt[i][1]);
				}
			}
			//决策支持
			for (i = 0, l = bodd6.length; i < l; i++) {
				var date = new Date(bodd6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(2)').html(bodd6[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(1)').html(bodd6[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(0)').html(bodd6[i][1]);
				}
			}
			for (i = 0, l = boddd_2.length; i < l; i++) {
				var date = new Date(boddd_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(5)').html(boddd_2[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(4)').html(boddd_2[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(3)').html(boddd_2[i][1]);
				}
			}
			for (i = 0, l = boddd_1.length; i < l; i++) {
				var date = new Date(boddd_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(8)').html(boddd_1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(7)').html(boddd_1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(6)').html(boddd_1[i][1]);
				}
			}
			for (i = 0, l = bodd9_2.length; i < l; i++) {
				var date = new Date(bodd9_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(11)').html(bodd9_2[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(10)').html(bodd9_2[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(9)').html(bodd9_2[i][1]);
				}
			}
			for (i = 0, l = bodd9_1.length; i < l; i++) {
				var date = new Date(bodd9_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(14)').html(bodd9_1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(13)').html(bodd9_1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(12)').html(bodd9_1[i][1]);
				}
			}
			for (i = 0, l = boddc_2.length; i < l; i++) {
				var date = new Date(boddc_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(17)').html(boddc_2[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(16)').html(boddc_2[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(15)').html(boddc_2[i][1]);
				}
			}
			for (i = 0, l = boddc_1.length; i < l; i++) {
				var date = new Date(boddc_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(20)').html(boddc_1[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(19)').html(boddc_1[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(18)').html(boddc_1[i][1]);
				}
			}
			for (i = 0, l = boddo.length; i < l; i++) {
				var date = new Date(boddo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb_d td:eq(23)').html(boddo[i][1]);
				}
				if (date.getDate() == ystd.getDate()) {
					$('#t_bb_d td:eq(22)').html(boddo[i][1]);
				}
				if (date.getDate() == dbyd.getDate()) {
					$('#t_bb_d td:eq(21)').html(boddo[i][1]);
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