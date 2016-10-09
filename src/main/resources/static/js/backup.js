	$(document).ready(function() {
		$.getJSON('/getBackupStatus', function (data) {
			var xodps = []
			var xodpf = []
			var xodp4 = []
			var xodpo = []
			var xrdpt = []
			var xmdpt = []
			var xbdpt = []
			var xsdpt = []
			var zhdp5 = []
			var zmdpt = []
			var zkdp4 = []
			var fhdps = []
			var bodp6 = []
			var bodpd_2 = []
			var bodpd_1 = []
			var bodp9_2 = []
			var bodp9_1 = []
			var j1 = 0
	    	var j2 = 0
	    	var j3 = 0
	    	var j4 = 0
	    	var j5 = 0
	    	var j6 = 0
	    	var j7 = 0
	    	var j8 = 0
	    	var j9 = 0
	    	var j10 = 0
	    	var j11 = 0
			var j12 = 0
			var j13 = 0
			var j14 = 0
			var j15 = 0
			var j16 = 0
			var j17 = 0
	    	
			for (i=0; i<data.length; i++) {
				if(data[i].ipAddress == '10.30.37.11') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					xodps[j1++] = [date, status]			
				}
				if(data[i].ipAddress == '11.11.3.58') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					xodpf[j2++] = [date, status]			
				}
				if(data[i].ipAddress == '11.11.4.58') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					xodp4[j3++] = [date, status]			
				}
				if(data[i].ipAddress == '11.11.3.250') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					xodpo[j4++] = [date, status]			
				}
				if(data[i].ipAddress == '10.30.36.56') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					xrdpt[j5++] = [date, status]			
				}
				if(data[i].ipAddress == '10.30.36.11') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					xmdpt[j6++] = [date, status]			
				}
				if(data[i].ipAddress == '10.30.36.8') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					xbdpt[j7++] = [date, status]			
				}
				if(data[i].ipAddress == '10.30.36.55') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					xsdpt[j8++] = [date, status]			
				}
				//自主开发
				if(data[i].ipAddress == '10.30.36.67') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					zhdp5[j9++] = [date, status]			
				}
				if(data[i].ipAddress == '10.30.148.121') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					zmdpt[j10++] = [date, status]			
				}
				if(data[i].ipAddress == '10.30.150.251') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					zkdp4[j11++] = [date, status]			
				}
				//非结构化
				if(data[i].ipAddress == '10.30.147.132') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					fhdps[j12++] = [date, status]
				}
				//决策平台
				if(data[i].ipAddress == '10.30.147.122') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					bodp6[j13++] = [date, status]
				}
				if(data[i].ipAddress == '11.11.5.250') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					bodpd_2[j14++] = [date, status]
				}
				if(data[i].ipAddress == '10.30.37.251') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					bodpd_1[j15++] = [date, status]
				}
				if(data[i].ipAddress == '11.11.3.121') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					bodp9_2[j16++] = [date, status]
				}
				if(data[i].ipAddress == '10.30.35.123') {
					var date = data[i].recordDate
					var status = data[i].backupStatus
					bodp9_1[j17++] = [date, status]
				}
			}
			
			var today = new Date();
			for (i = 0, l = xodps.length; i < l; i++) {
				var date = new Date(xodps[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo td:eq(2)').html(xodps[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_xo td:eq(1)').html(xodps[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_xo td:eq(0)').html(xodps[i][1]);
				}				
			}
			for (i = 0, l = xodpf.length; i < l; i++) {
				var date = new Date(xodpf[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo td:eq(5)').html(xodpf[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_xo td:eq(4)').html(xodpf[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_xo td:eq(3)').html(xodpf[i][1]);
				}				
			}
			for (i = 0, l = xodp4.length; i < l; i++) {
				var date = new Date(xodp4[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo td:eq(8)').html(xodp4[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_xo td:eq(7)').html(xodp4[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_xo td:eq(6)').html(xodp4[i][1]);
				}				
			}
			for (i = 0, l = xodpo.length; i < l; i++) {
				var date = new Date(xodpo[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo td:eq(11)').html(xodpo[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_xo td:eq(10)').html(xodpo[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_xo td:eq(9)').html(xodpo[i][1]);
				}				
			}
			for (i = 0, l = xrdpt.length; i < l; i++) {
				var date = new Date(xrdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo td:eq(14)').html(xrdpt[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_xo td:eq(13)').html(xrdpt[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_xo td:eq(12)').html(xrdpt[i][1]);
				}				
			}
			for (i = 0, l = xmdpt.length; i < l; i++) {
				var date = new Date(xmdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo td:eq(17)').html(xmdpt[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_xo td:eq(16)').html(xmdpt[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_xo td:eq(15)').html(xmdpt[i][1]);
				}				
			}
			for (i = 0, l = xbdpt.length; i < l; i++) {
				var date = new Date(xbdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo td:eq(20)').html(xbdpt[i][1]);
					$('#t_xo td:eq(23)').html(xbdpt[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_xo td:eq(19)').html(xbdpt[i][1]);
					$('#t_xo td:eq(22)').html(xbdpt[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_xo td:eq(18)').html(xbdpt[i][1]);
					$('#t_xo td:eq(21)').html(xbdpt[i][1]);
				}				
			}
			for (i = 0, l = xsdpt.length; i < l; i++) {
				var date = new Date(xsdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_xo td:eq(26)').html(xsdpt[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_xo td:eq(25)').html(xsdpt[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_xo td:eq(24)').html(xsdpt[i][1]);
				}				
			}
			// 自主开发
			for (i = 0, l = zhdp5.length; i < l; i++) {
				var date = new Date(zhdp5[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk td:eq(2)').html(zhdp5[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_zk td:eq(1)').html(zhdp5[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_zk td:eq(0)').html(zhdp5[i][1]);
				}				
			}
			for (i = 0, l = zmdpt.length; i < l; i++) {
				var date = new Date(zmdpt[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk td:eq(5)').html(zmdpt[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_zk td:eq(4)').html(zmdpt[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_zk td:eq(3)').html(zmdpt[i][1]);
				}				
			}
			for (i = 0, l = zkdp4.length; i < l; i++) {
				var date = new Date(zkdp4[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_zk td:eq(8)').html(zkdp4[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_zk td:eq(7)').html(zkdp4[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_zk td:eq(6)').html(zkdp4[i][1]);
				}				
			}
			//非结构化
			for (i = 0, l = fhdps.length; i < l; i++) {
				var date = new Date(fhdps[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_nosql td:eq(2)').html(fhdps[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_nosql td:eq(1)').html(fhdps[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_nosql td:eq(0)').html(fhdps[i][1]);
				}
			}
			//决策支持
			for (i = 0, l = bodp6.length; i < l; i++) {
				var date = new Date(bodp6[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb td:eq(2)').html(bodp6[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_bb td:eq(1)').html(bodp6[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_bb td:eq(0)').html(bodp6[i][1]);
				}
			}
			for (i = 0, l = bodpd_2.length; i < l; i++) {
				var date = new Date(bodpd_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb td:eq(5)').html(bodpd_2[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_bb td:eq(4)').html(bodpd_2[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_bb td:eq(3)').html(bodpd_2[i][1]);
				}
			}
			for (i = 0, l = bodpd_1.length; i < l; i++) {
				var date = new Date(bodpd_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb td:eq(8)').html(bodpd_1[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_bb td:eq(7)').html(bodpd_1[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_bb td:eq(6)').html(bodpd_1[i][1]);
				}
			}
			for (i = 0, l = bodp9_2.length; i < l; i++) {
				var date = new Date(bodp9_2[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb td:eq(11)').html(bodp9_2[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_bb td:eq(10)').html(bodp9_2[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_bb td:eq(9)').html(bodp9_2[i][1]);
				}
			}
			for (i = 0, l = bodp9_1.length; i < l; i++) {
				var date = new Date(bodp9_1[i][0]);
				if (date.getDate() == today.getDate()) {
					$('#t_bb td:eq(14)').html(bodp9_1[i][1]);
				}
				if (date.getDate() == today.getDate()-1) {
					$('#t_bb td:eq(13)').html(bodp9_1[i][1]);
				}
				if (date.getDate() == today.getDate()-2) {
					$('#t_bb td:eq(12)').html(bodp9_1[i][1]);
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
					$(this).text('Error').css('color', 'yellow');
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