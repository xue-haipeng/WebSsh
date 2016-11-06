$.ajax({
	url : './static/data/Book1.csv',
	type : "GET",
	success : function(data) {
		var xData = []
		var yData = {}

		var lines = data.split('\n');
		if (lines.length <= 1) {
			return;
		}
		var dic = lines[0].split(',')
		var current = []
		for (var i = 1; i < lines.length; i++) {
			current = lines[i].split(',')
			xData.push(current[0])
			for (var j = 1; j < dic.length; j++) {
				if (yData[dic[j]]) {
					yData[dic[j]].push(current[j])
				} else {
					yData[dic[j]] = []
				}
			}
		}
		drawChart(xData, yData, dic,'OSB上市生产系统',"main")
	}
});

$.ajax({
	url : './static/data/Book1.csv',
	type : "GET",
	success : function(data) {
		var xData = []
		var yData = {}

		var lines = data.split('\n');
		if (lines.length <= 1) {
			return;
		}
		var dic = lines[0].split(',')
		var current = []
		for (var i = 1; i < lines.length; i++) {
			current = lines[i].split(',')
			xData.push(current[0])
			for (var j = 1; j < dic.length; j++) {
				if (yData[dic[j]]) {
					yData[dic[j]].push(current[j])
				} else {
					yData[dic[j]] = []
				}
			}
		}
		drawChart(xData, yData, dic,'人力资源HP1系统',"chart3")
	}
});

$.ajax({
	url : './static/data/Book1.csv',
	type : "GET",
	success : function(data) {
		var xData = []
		var yData = {}

		var lines = data.split('\n');
		if (lines.length <= 1) {
			return;
		}
		var dic = lines[0].split(',')
		var current = []
		for (var i = 1; i < lines.length; i++) {
			current = lines[i].split(',')
			xData.push(current[0])
			for (var j = 1; j < dic.length; j++) {
				if (yData[dic[j]]) {
					yData[dic[j]].push(current[j])
				} else {
					yData[dic[j]] = []
				}
			}
		}
		drawChart(xData, yData, dic,'勘探生成EP6系统',"chart4")
	}
});

$.ajax({
	url : './static/data/xbapt.csv',
	type : "GET",
	success : function(data) {
		var xData = []
		var yData = {}

		var lines = data.split('\n');
		if (lines.length <= 1) {
			return;
		}
		var dic = lines[0].split(',')
		var current = []
		for (var i = 1; i < lines.length; i++) {
			current = lines[i].split(',')
			xData.push(current[0])
			for (var j = 1; j < dic.length; j++) {
				if (yData[dic[j]]) {
					yData[dic[j]].push(current[j])
				} else {
					yData[dic[j]] = []
				}
			}
		}

		drawChart(xData, yData, dic,'BPM流程域生产系统',"chart1")
	}
});

function drawChart(xd, yd, dic,title,ele) {
	dic.shift();
	var myChart = echarts.init(document.getElementById(ele));
	var series = []
	$.each(dic, function(i, d) {
		var se = {
			name : d,
			type : 'line',
			hoverAnimation : false,
			lineStyle : {
				normal : {
					width : 2
				}
			},
			data : yd[d]
		};
		series.push(se);
	});

	var option = {
		title : {
			text : title,

			x : 'center',
			align : 'right'
		},
		grid : {
			bottom : 80
		},
		legend : {
			data : dic.shift(),
			x : 'left'
		},
		tooltip : {
			trigger : 'axis',
			formatter : function(params) {
				var str = [];
				$.each(params, function(i, d) {
					str.push(params[i].name + " " + params[i].seriesName
							+ ' : ' + params[i].value)
				})
				return str.join('<br>')
			},
			axisPointer : {
				animation : false
			}
		},

		xAxis : [ {
			type : 'category',
			axisLine : {
				onZero : false
			},
			data : xd
		} ],
		yAxis : [ {
			name : '百分比 %',
			type : 'value',
			max : 100
		} ],
		series : series
	}
	myChart.setOption(option);
}
