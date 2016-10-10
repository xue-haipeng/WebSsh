$(function () {
    $.getJSON('/cpuInfo', function (data) {
    	var xfapt001 = []
    	var xfapt002 = []
		var xfapt003 = []
		var xfapt004 = []
		var xfapt005 = []
		var xfapt006 = []
		var xfapt007 = []
    	var j1 = 0
    	var j2 = 0
    	var j3 = 0
    	var j4 = 0
    	var j5 = 0
    	var j6 = 0
    	var j7 = 0
		for (i=0; i<data.length; i++) {
			if(data[i].hostname == 'XFAPT001') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				xfapt001[j1++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'XFAPT002') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				xfapt002[j2++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'XFAPT003') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				xfapt003[j3++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'XFAPT004') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				xfapt004[j4++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'XFAPT005') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				xfapt005[j5++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'XFAPT006') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				xfapt006[j6++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'XFAPT007') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				xfapt007[j7++] = [timepoint, cpuusage]
			}
		}
    	
    	Highcharts.setOptions({
    		global: {
    			useUTC: false
    		}
    	});
    	    	
    	$('#xfapt').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'ADF表单生产系统CPU使用率'
            },
            subtitle: {
                text: '最近24小时'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 70,
                dateTimeLabelFormats: { // don't display the dummy year
                	second: '%H:%M:%S',
                	minute: '%H:%M',
                	hour: '%H:%M'
                },
                title: {
                    text: 'Time'
                }
            },
            yAxis: {
                title: {
                    text: 'CPU使用率(100%)'
                },
                min: 0
            },
            tooltip: {
            	headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%b.%e, %H:%M}  <b>{point.y:.2f} %</b>'
//            	pointFormat: '{point.x:%X}  <b>{point.y:.2f} %</b>'
            },

            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },

            series: [{name: 'xfapt001', data: xfapt001},
					 {name: 'xfapt002', data: xfapt002},
                     {name: 'xfapt003', data: xfapt003},
                     {name: 'xfapt004', data: xfapt004},
                     {name: 'xfapt005', data: xfapt005},
                     {name: 'xfapt006', data: xfapt006},
                     {name: 'xfapt007', data: xfapt007}]
        });
    });
});