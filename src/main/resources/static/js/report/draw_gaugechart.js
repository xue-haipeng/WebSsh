$(function() {
    var complete_ratio = [];
    $.ajax({
        type: 'GET',
        url: '/basis/report/complete_ratio',
        async: false,
        success: function (data) {
            console.log(data)
            complete_ratio.push(data);
        }
    });

    var gaugeOptions = {
        chart: {
            type: 'solidgauge'
        },
        title: null,
        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#DF5353'], // red
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#55BF3B'] // green
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

// The speed gauge
    var chartSpeed = Highcharts.chart('gaugechart', Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 100,
            title: {
                text: '填报完成率',
                style: {
                    fontFamily: 'Microsoft YaHei UI',
                    fontSize: '14px'
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'rate',
            data: complete_ratio,
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span>%</div>'
            },
            tooltip: {
                valueSuffix: ' %'
            }
        }]
    }));
});