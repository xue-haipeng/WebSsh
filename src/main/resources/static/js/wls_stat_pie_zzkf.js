/**
 * Created by Xue on 12/04/16.
 */
$(function () {
    $.getJSON('/tivoliPolling/wls', function (data) {
        var runningPie = data.pieData.running;
        var illnessPie = data.pieData.illness;
        var shutdownPie = data.pieData.shutdown;
        var runningBar = data.barData.running;
        var illnessBar = data.barData.illness;
        var shutdownBar = data.barData.shutdown;

        Highcharts.setOptions({
            colors: ['#90ed7d', '#7CB5EC', '#f7a35c']
        });
        Highcharts.chart('jcpt', {
            title: {
                text: '集成平台生产系统当前Server状态',
                style: {
                    'font-family': 'Microsoft YaHei, Arial'
                }
            },
            xAxis: {
                categories: ['OER', 'OSB海外', 'OSB监控', 'OSB上市', 'OSB未上市', 'OSB总部', 'BPM流程', 'BPM表单'],
                labels: {
                    style: {
                        'font-family': 'Microsoft YaHei, Arial'
                    }
                }
            },
            labels: {
                items: [{
                    html: '汇总',
                    style: {
                        left: '50px',
                        top: '18px',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black',
                        'font-family': 'Microsoft YaHei, Arial'
                    }
                }]
            },
            series: [{
                type: 'column',
                name: 'RUNNING',
                data: runningBar,
                style: {color: '#90ed7d'}
            }, {
                type: 'column',
                name: 'ILLNESS',
                data: illnessBar,
                style: {color: '#7CB5EC'}
            },  {
                type: 'column',
                name: 'SHUTDOWN',
                data: shutdownBar,
                style: {color: '#f7a35c'}
            }, {
                type: 'pie',
                name: '汇总视图',
                data: [{
                    name: 'RUNNING',
                    y: runningPie,
                    color: '#90ed7d' // OK's color
                }, {
                    name: 'ILLNESS',
                    y: illnessPie,
                    color: '#7CB5EC' // WARNING's color
                }, {
                    name: 'SHUTDOWN',
                    y: shutdownPie,
                    color: '#f7a35c' // FAILED's color
                }],
                center: [100, 80],
                size: 100,
                showInLegend: true,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    });
});
