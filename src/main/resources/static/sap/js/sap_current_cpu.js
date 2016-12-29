$(function () {
    $.getJSON('/sapascs_bar', function (data) {
        Highcharts.chart('current_ascs', {
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
                text: '最近6小时 (Source: Tivoli History Database)',
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
                    'HP1',
                    'EP6',
                    'EP7',
                    'CP6',
                    'CPF',
                    'CPO',
                    'EP8',
                    'CP8',
                    'EP3',
                    'CP3',
                    'EP2',
                    'CP2'
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
                headerFormat: '<span style="font-size:10px"><b>{point.key}</b></span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
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
                data: data.curr

            }, {
                name: '最高值',
                style: {
                    'font-family': 'Microsoft YaHei'
                },
                data: data.max

            }, {
                name: '平均值',
                style: {
                    'font-family': 'Microsoft YaHei'
                },
                data: data.avg

            }]
        });
    });
});