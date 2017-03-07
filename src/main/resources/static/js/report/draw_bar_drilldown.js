/**
 * Created by Xue on 03/06/17.
 */
$(function () {
    // Create the chart
    Highcharts.setOptions({
        colors: [
            '#f25252',  //第一个颜色
            '#9e6df0',  //第二个颜色
            '#f9823a',  //第三个颜色
            '#77aaee',  //第四个颜色
            '#e5b1a2',
            '#68b28b'
        ]
    });

    Highcharts.chart('drilldown', {
        chart: {
            type: 'column'
        },
        title: {
            text: '',
            style: {
                fontSize: '1px'
            }
        },
/*        subtitle: {
            text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
        },*/
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: '处理问题件数',
                style: {
                    fontFamily: "'Microsoft Yahe UI', Arial"
                }
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: 'Categories',
            style: {
              fontFamily: 'Microsoft Yahei UI'
            },
            colorByPoint: true,
            data: [{
                name: 'ERP',
                y: 56.33,
                drilldown: 'ERP'
            }, {
                name: '中间件/UEP',
                style: {
                    fontFamily: 'Microsoft Yahei UI'
                },
                y: 24.03,
                drilldown: '中间件/UEP'
            }, {
                name: 'DB',
                y: 10.38,
                drilldown: 'DB'
            }, {
                name: 'OS',
                y: 4.77,
                drilldown: 'OS'
            }, {
                name: 'HANA',
                y: 0.91,
                drilldown: 'HANA'
            }, {
                name: 'PaaS/大数据/SRE',
                style: {
                    fontFamily: 'Microsoft Yahei UI'
                },
                y: 0.2,
                drilldown: null
            }]
        }],
        credits: {
            enabled: false
        },
        drilldown: {
            series: [{
                name: 'ERP',
                id: 'ERP',
                data: [
                    [
                        'v11.0',
                        24.13
                    ],
                    [
                        'v8.0',
                        17.2
                    ],
                    [
                        'v9.0',
                        8.11
                    ],
                    [
                        'v10.0',
                        5.33
                    ],
                    [
                        'v6.0',
                        1.06
                    ],
                    [
                        'v7.0',
                        0.5
                    ]
                ]
            }, {
                name: '中间件/UEP',
                style: {
                    fontFamily: 'Microsoft Yahei UI'
                },
                id: '中间件/UEP',
                data: [
                    [
                        'v40.0',
                        5
                    ],
                    [
                        'v41.0',
                        4.32
                    ],
                    [
                        'v42.0',
                        3.68
                    ],
                    [
                        'v39.0',
                        2.96
                    ],
                    [
                        'v36.0',
                        2.53
                    ],
                    [
                        'v43.0',
                        1.45
                    ],
                    [
                        'v31.0',
                        1.24
                    ],
                    [
                        'v35.0',
                        0.85
                    ],
                    [
                        'v38.0',
                        0.6
                    ],
                    [
                        'v32.0',
                        0.55
                    ],
                    [
                        'v37.0',
                        0.38
                    ],
                    [
                        'v33.0',
                        0.19
                    ],
                    [
                        'v34.0',
                        0.14
                    ],
                    [
                        'v30.0',
                        0.14
                    ]
                ]
            }, {
                name: 'DB',
                id: 'DB',
                data: [
                    [
                        'v35',
                        2.76
                    ],
                    [
                        'v36',
                        2.32
                    ],
                    [
                        'v37',
                        2.31
                    ],
                    [
                        'v34',
                        1.27
                    ],
                    [
                        'v38',
                        1.02
                    ],
                    [
                        'v31',
                        0.33
                    ],
                    [
                        'v33',
                        0.22
                    ],
                    [
                        'v32',
                        0.15
                    ]
                ]
            }, {
                name: 'OS',
                id: 'OS',
                data: [
                    [
                        'v8.0',
                        2.56
                    ],
                    [
                        'v7.1',
                        0.77
                    ],
                    [
                        'v5.1',
                        0.42
                    ],
                    [
                        'v5.0',
                        0.3
                    ],
                    [
                        'v6.1',
                        0.29
                    ],
                    [
                        'v7.0',
                        0.26
                    ],
                    [
                        'v6.2',
                        0.17
                    ]
                ]
            }, {
                name: 'HANA',
                id: 'HANA',
                data: [
                    [
                        'v12.x',
                        0.34
                    ],
                    [
                        'v28',
                        0.24
                    ],
                    [
                        'v27',
                        0.17
                    ],
                    [
                        'v29',
                        0.16
                    ]
                ]
            }]
        }
    });
});