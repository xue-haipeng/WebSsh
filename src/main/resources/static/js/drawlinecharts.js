$(function () {
    $.getJSON('/cpuInfo', function (data) {
    	var exoaps001 = []
    	var exoaps002 = []
		var exoaps003 = []
		var exoaps004 = []
		var exoaps005 = []
		var exoaps006 = []
		var exoaps007 = []
		var exoaps008 = []
		var exoaps009 = []
		var exoaps010 = []
		var exoaps011 = []
		var exoaps012 = []
		var exoaps013 = []
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
		for (i=0; i<data.length; i++) {
			if(data[i].hostname == 'EXOAPS001') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps001[j1++] = [timepoint, cpuusage]			
			}
			if(data[i].hostname == 'EXOAPS002') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps002[j2++] = [timepoint, cpuusage]			
			}
			if(data[i].hostname == 'EXOAPS003') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps003[j3++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXOAPS004') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps004[j4++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXOAPS005') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps005[j5++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXOAPS006') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps006[j6++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXOAPS007') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps007[j7++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXOAPS008') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps008[j8++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXOAPS009') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps009[j9++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXOAPS010') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps010[j10++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXOAPS011') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps011[j11++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXOAPS012') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps012[j12++] = [timepoint, cpuusage]
			}
			if(data[i].hostname == 'EXOAPS013') {
				var timepoint = data[i].datetime
				var cpuusage = data[i].cpuusage
				exoaps013[j13++] = [timepoint, cpuusage]
			}
		}
    	
    	Highcharts.setOptions({
    		global: {
    			useUTC: false
    		}
    	});
    	    	
    	$('#xoaps').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'OSB上市生产系统CPU使用率',
				style: {
					'font-family': 'Microsoft YaHei'
				}
            },
            subtitle: {
                text: '最近24小时',
				style: {
					'font-family': 'Microsoft YaHei'
				}
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
                    text: 'CPU使用率(100%)',
					style: {
						'font-family': 'Microsoft YaHei'
					}
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

            series: [{name: 'exoaps001', data: exoaps001},
					 {name: 'exoaps002', data: exoaps002},
                     {name: 'exoaps003', data: exoaps003}, 
                     {name: 'exoaps004', data: exoaps004}, 
                     {name: 'exoaps005', data: exoaps005}, 
                     {name: 'exoaps006', data: exoaps006}, 
                     {name: 'exoaps007', data: exoaps007}, 
                     {name: 'exoaps008', data: exoaps008}, 
                     {name: 'exoaps009', data: exoaps009}, 
                     {name: 'exoaps010', data: exoaps010}, 
                     {name: 'exoaps011', data: exoaps011}, 
                     {name: 'exoaps012', data: exoaps012},
                     {name: 'exoaps013', data: exoaps013}]
        });
    });
});

function compare(a, b) {
	return a[0] - b[0]
}