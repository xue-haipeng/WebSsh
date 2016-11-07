$(function () {	
	$.getJSON('/appPie', function (data) {
		var jcpt = 0;
		var jczc = 0;
		var yhpt = 0;
		var erp2 = 0;
		var erp1 = 0;
		var fjgh = 0;
		var qxpt = 0;
		var zhkf = 0;
		var other = 0;
		for (i=0; i<data.length; i++) {
			if(data[i].name=="决策支持平台") {
				jczc = data[i].count;
			}
			if(data[i].name=="集成平台") {
				jcpt = data[i].count;
			}
			if(data[i].name=="用户平台") {
				yhpt = data[i].count;
			}
			if(data[i].name=="ERP 2.0") {
				erp2 = data[i].count;
			}
			if(data[i].name=="ERP1.0迁移") {
				erp1 = data[i].count;
			}
			if(data[i].name=="非结构化平台") {
				fjgh = data[i].count;
			}
			if(data[i].name=="权限平台") {
				qxpt = data[i].count;
			}
			if(data[i].name=="自开发平台") {
				zhkf = data[i].count;
			}
			if(data[i].name=="其他") {
				other = data[i].count;
			}
		}
		
		$('#appdistr').highcharts({
	        chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false,
	            type: 'pie'
	        },
	        title: {
	            text: 'ERP应用集成项目各平台系统数分布',
				style: {
					'font-family': 'Microsoft YaHei'
				}
	        },
	        subtitle: {
	            text: '2016年9月权威发布',
				style: {
					'font-family': 'Microsoft YaHei'
				}
	        },
	        tooltip: {
	            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
				style: {
					'font-family': 'Microsoft YaHei'
				}
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
	                    style: {
	                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
							'font-family': 'Microsoft YaHei'
	                    }
	                }
	            }
	        },
	        series: [{
	            name: '数量',
	            colorByPoint: true,
	            data: [{
	                name: '集成平台',
//	                y: jcpt
	                y: 7
	            }, {
	                name: '决策支持平台',
//	                y: jczc,
	                y: 48,
	                sliced: true,
	                selected: true
	            }, {
	                name: 'ERP 2.0',
//	                y: erp2
	                y: 9
	            }, {
	                name: 'ERP 1.0',
//	                y: erp1
	                y:14
	            }, {
	                name: '用户平台',
//	                y: yhpt
	                y: 11
	            },{
	                name: '非结构化平台',
//	                y: fjgh
	                y: 6
	            },{
	                name: '自主开发平台',
//	                y: zhkf
	                y: 15
	            }, {
	                name: '权限管理平台',
//	                y: qxpt
	                y: 1
	            }, {
	                name: '其它平台',
//	                y: qxpt
	                y: 0
	            }]
	        }]
	    });
	});   
});