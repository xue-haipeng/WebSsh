/**
 * Created by Xue on 03/06/17.
 */
$(function () {
    var source_type = [];
    var source_data = [];
    $.ajax({
        type: 'GET',
        url: '/basis/report/worktype_count',
        async: false,
        success: function (data) {
            if (data['A'] != null) {
                source_type.push('运维');
                source_data.push(data['A'])
            }
            if (data['B'] != null) {
                source_type.push('排错');
                source_data.push(data['B'])
            }
            if (data['C'] != null) {
                source_type.push('实施');
                source_data.push(data['C'])
            }
            if (data['D'] != null) {
                source_type.push('新技术');
                source_data.push(data['D'])
            }
            if (data['E'] != null) {
                source_type.push('培训');
                source_data.push(data['E'])
            }
        }
    });
    var categories = source_type,
        data = [{
            drilldown: {
                name: '',
                categories: source_type,
                data: source_data   //数据，即this.y
            }
        }];

    var fuhuiData = [];
    var percentData = [];
    for (var i = 0; i < data.length; i++) {
        fuhuiData.push({
            name: categories[i],
            y: data[i].y,
        });

        for (var j = 0; j < data[i].drilldown.data.length; j++) {
            var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
            percentData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j]
            });
        }
    }

    $('#chartdemo').highcharts({
        chart: {
            type: 'pie'   //图表的类型
        },
        title: {  //设置标题并将标题置于环形图表中间
            text: '<span style="font-size:16px; font-family: Arial; color:#606060;">工作分布</span>',
            verticalAlign: 'middle'
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        plotOptions: {
            pie: {
                size: '76%',
                innerSize: '66%',   //配置环形大小
                shadow: true,
                center: ['50%', '50%'],  //水平和垂直方向居中
                colors: [            //设置饼状图的颜色
                    '#f25252',  //第一个颜色
                    '#9e6df0',  //第二个颜色
                    '#f9823a',  //第三个颜色
                    '#77aaee',  //第四个颜色
                    '#68b28b'
                ],
                dataLabels: {
                    //connectorColor: '#f00',  //设置连接线的颜色
                    style: {  //设置标识文字的样式
                        color: '#424242',
                        fontSize: '12px',
                        fontWeight: 'normal',   //字体不加粗
                        fontFamily: 'Microsoft YaHei UI'
                    }
                },
                showInLegend: false
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: '百分比',  //数据列名
            data: percentData,
            dataLabels: {
                /*formatter: function() {
                    // display only if larger than 1
                    //return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;    //这串代码设置了加粗
                    return this.y > 1 ? ''+ this.point.name +': '+ this.y +'%'  : null;
                }*/
                enabled: true,
                format: '{point.name}: {point.percentage:.1f}%',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            },
            style: {
                fontFamily: 'Microsoft Yahei UI'
            }
        }],
        credits: {
            enabled:false              // 默认值，如果想去掉版权信息Highcharts.com，设置为false即可
        }
    });

    // ***********************************************************************************

    //设置饼状图中间文字的上下间隔
    // $(".highcharts-title").find("tspan").last().attr("dy",22);

});