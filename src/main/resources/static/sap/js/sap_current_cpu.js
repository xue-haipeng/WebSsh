$(function () {
    $.getJSON('/sapascs_bar', function (data) {
        Highcharts.chart('current_emp', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'SAP ASCS主机CPU使用情况',
                style: {
                    'font-family': 'Microsoft YaHei'
                }
            },
            subtitle: {
                text: '最近6小时(数据取自Tivoli History Database)',
                style: {
                    'font-family': 'Microsoft YaHei'
                }
            },
            xAxis: {
                categories: [
                    'EMP',
                    'OSP',
                    'COP',
                    'EP9',
                    'ZYP',
                    'EP1',
                    'EP4',
                    'TKM',
                    'EP6',
                    'EP7',
                    'CP6',
                    'CPF',
                    'CPO'
                ],
                style: {
                    'font-family': 'Microsoft YaHei'
                },
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'CPU 使用率 (100%)',
                    style: {
                        'font-family': 'Microsoft YaHei'
                    }
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            colors: [
                '#3CB371',
                '#d08080',
                '#6f9bc6'
            ],
            series: [{
                name: '当前值',
                style: {
                    'font-family': 'Microsoft YaHei'
                },
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 32.3]

            }, {
                name: '最高值',
                style: {
                    'font-family': 'Microsoft YaHei'
                },
                data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3, 41.0]

            }, {
                name: '平均值',
                style: {
                    'font-family': 'Microsoft YaHei'
                },
                data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2, 42.4]

            }]
        });
    });
});