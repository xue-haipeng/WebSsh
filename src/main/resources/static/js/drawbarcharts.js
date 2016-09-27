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
	            text: '云平台各主机CPU使用情况'
	        },
	        subtitle: {
	            text: '数据来源于F5项目Tivoli系统数据库'
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
	                align: 'high'
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
	                    enabled: true
	                }
	            }
	        },
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
	            name: '最近12小时平均CPU使用率',
	            data: [h1.avgcpu12, h2.avgcpu12, h3.avgcpu12, h4.avgcpu12, h5.avgcpu12, h6.avgcpu12, h7.avgcpu12, h8.avgcpu12, h9.avgcpu12, h10.avgcpu12, h11.avgcpu12, h12.avgcpu12, h13.avgcpu12, h14.avgcpu12, h15.avgcpu12]
	        }, {
	            name: '最近24小时平均CPU使用率',
	            data: [h1.avgcpu24, h2.avgcpu24, h3.avgcpu24, h4.avgcpu24, h5.avgcpu24, h6.avgcpu24, h7.avgcpu24, h8.avgcpu24, h9.avgcpu24, h10.avgcpu24, h11.avgcpu24, h12.avgcpu24, h13.avgcpu24, h14.avgcpu24, h15.avgcpu24]
	        }]
	    });
	});    
});