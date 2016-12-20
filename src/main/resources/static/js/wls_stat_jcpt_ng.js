/**
 * Created by Xue on 12/15/16.
 */
/*
$(function () {

});*/

var myChart = echarts.init(document.getElementById('jcpt_ng'), 'macarons');

var bcBySeriesIndex = ['P', 'P', 'P', 'Q', 'Q', 'Q', 'D', 'D', 'D'];

var option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var html = [];

            var category = {};
            echarts.util.each(params, function (param) {
                var catName = param.seriesName;
                var bc = bcBySeriesIndex[param.seriesIndex];
                if (!category[catName]) {
                    category[catName] = {};
                }
                category[catName][bc] = param.value;
            });
            console.log(category);
            echarts.util.each(category, function (cate, key) {
                html.push(
                    '<tr>',
                    '<td>', key, '</td>',
                    '<td>', cate.P, '</td>',
                    '<td>', cate.Q, '</td>',
                    '<td>', cate.D, '</td>',
                    '</tr>'
                );
            })

            return '<table border=1><tbody>'
                + '<tr><td></td><td>P</td><td>Q</td><td>D</td></tr>'
                + html.join('')
                + '</tbody></table>';
        }
    },
    legend: {
        data: [
            'Running', 'Illness', 'Shutdown'
        ]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['OSB监控','OER','OSB海外','OSB上市','OSB未上市','OSB总部','BPM流程', 'BPM表单', 'OAM']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Running',
            type:'bar',
            barWidth : 12,
            stack: 'P',
            data:[320, 332, 301, 334, 390, 330, 334, 390, 330]
        },
        {
            name:'Illness',
            type:'bar',
            stack: 'P',
            data:[120, 132, 101, 134, 90, 230, 134, 90, 230]
        },
        {
            name:'Shutdown',
            type:'bar',
            stack: 'P',
            data:[50, 70, 31, 124, 90, 30, 124, 90, 30],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: 'P',
                    textStyle: {color: '#333'}
                }
            }
        },
        {
            name:'Running',
            type:'bar',
            barWidth : 12,
            stack: 'Q',
            data:[620, 732, 701, 734, 1000, 600, 734, 400, 300]
        },
        {
            name:'Illness',
            type:'bar',
            stack: 'Q',
            data:[120, 132, 101, 134, 290, 230, 134, 290, 230]
        },
        {
            name:'Shutdown',
            type:'bar',
            stack: 'Q',
            data:[60, 72, 71, 74, 190, 130, 74, 190, 130],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: 'Q',
                    textStyle: {color: '#333'}
                }
            }
        },
        {
            name:'Running',
            type:'bar',
            barWidth : 12,
            stack: 'D',
            data:[120, 400, 301, 300, 390, 260, 300, 390, 260]
        },
        {
            name:'Illness',
            type:'bar',
            stack: 'D',
            data:[80, 132, 101, 70, 90, 50, 70, 90, 50]
        },
        {
            name:'Shutdown',
            type:'bar',
            stack: 'D',
            data:[50, 70, 31, 124, 90, 30, 124, 90, 30],
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: 'D',
                    textStyle: {color: '#333'}
                }
            }
        }
    ]
};

myChart.setOption(option);