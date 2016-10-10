$(function () {
    $.getJSON('/cpuInfo', function (data) {
    	var exbapt001 = []
    	var exbapt002 = []
		var exbapt003 = []
		var exbapt004 = []
		var exbapt005 = []
		var exbapt006 = []
    	var j1 = 0
    	var j2 = 0
    	var j3 = 0
    	var j4 = 0
    	var j5 = 0
    	var j6 = 0
		for (i=0; i<data.length; i++) {
			if(data[i].hostname == 'EXBAPT001') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exbapt001[j1++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXBAPT002') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exbapt002[j2++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXBAPT003') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exbapt003[j3++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXBAPT004') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exbapt004[j4++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXBAPT005') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exbapt005[j5++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXBAPT006') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exbapt006[j6++] = [timepoint, cpuusage]
			}
		}
    	
    	Highcharts.setOptions({
    		global: {
    			useUTC: false
    		}
    	});
    	    	
    	$('#xbapt').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'BPM流程生产系统CPU使用率'
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

            series: [{name: 'EXBAPT001', data: exbapt001},
					 {name: 'EXBAPT002', data: exbapt002},
                     {name: 'EXBAPT003', data: exbapt003},
                     {name: 'EXBAPT004', data: exbapt004},
                     {name: 'EXBAPT005', data: exbapt005},
                     {name: 'EXBAPT006', data: exbapt006}]
        });
    });
});