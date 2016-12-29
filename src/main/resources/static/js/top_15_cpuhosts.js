$(function () {
	$.getJSON('/topCpuHosts', function (data) {		
		var h1 = data[0];
		var h2 = data[1];
		var h3 = data[2];
		var h4 = data[3];
		var h5 = data[4];
		var h6 = data[5];
		var h7 = data[6];
		var h8 = data[7];
		var h9 = data[8];
		var h10 = data[9];
		var h11 = data[10];
		var h12 = data[11];
		var h13 = data[12];
		var h14 = data[13];
		var h15 = data[14];
		
		$('#topcpu').highcharts({
	        chart: {
	            type: 'bar'
	        },
	        title: {
	            text: 'ERP项目各主机CPU使用情况',
				style: {
					'font-family': 'Microsoft YaHei'
				}
	        },
	        subtitle: {
	            text: '数据来源于F5项目Tivoli系统数据库',
				style: {
					'font-family': 'Microsoft YaHei'
				}
	        },
	        xAxis: {
	            categories: [h1.hostname, h2.hostname, h3.hostname, h4.hostname, h5.hostname, h6.hostname, h7.hostname, h8.hostname, h9.hostname, h10.hostname, h11.hostname, h12.hostname, h13.hostname, h14.hostname, h15.hostname],
	            title: {
	                text: null
	            }
	        },
	        yAxis: {
	            min: 0,
	            title: {
	                text: 'CPU使用率(%)',
	                align: 'high',
					style: {
						'font-family': 'Microsoft YaHei'
					}
	            },
	            labels: {
	                overflow: 'justify'
	            }
	        },
	        tooltip: {
	            valueSuffix: ' %'
	        },
	        plotOptions: {
	            bar: {
	                dataLabels: {
	                    enabled: true,
						style: {
							'font-family': 'Microsoft YaHei'
						}
	                }
	            }
	        },
            colors: [
                '#F08080',
                '#0091c8',
                '#5dab00'
            ],
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'top',
	            x: -40,
	            y: 80,
	            floating: true,
	            borderWidth: 1,
	            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
	            shadow: true
	        },
	        credits: {
	            enabled: false
	        },
	        series: [{
	            name: '%Avg, 3h',
	            data: [h1.avgcpu3, h2.avgcpu3, h3.avgcpu3, h4.avgcpu3, h5.avgcpu3, h6.avgcpu3, h7.avgcpu3, h8.avgcpu3, h9.avgcpu3, h10.avgcpu3, h11.avgcpu3, h12.avgcpu3, h13.avgcpu3, h14.avgcpu3, h15.avgcpu3]
	        }, {
	            name: '%Avg, 6h',
	            data: [h1.avgcpu6, h2.avgcpu6, h3.avgcpu6, h4.avgcpu6, h5.avgcpu6, h6.avgcpu6, h7.avgcpu6, h8.avgcpu6, h9.avgcpu6, h10.avgcpu6, h11.avgcpu6, h12.avgcpu6, h13.avgcpu6, h14.avgcpu6, h15.avgcpu6]
	        }, {
				name: '%Avg, 12h',
				data: [h1.avgcpu12, h2.avgcpu12, h3.avgcpu12, h4.avgcpu12, h5.avgcpu12, h6.avgcpu12, h7.avgcpu12, h8.avgcpu12, h9.avgcpu12, h10.avgcpu12, h11.avgcpu12, h12.avgcpu12, h13.avgcpu12, h14.avgcpu12, h15.avgcpu12]
			}]
	    });
	});    
});