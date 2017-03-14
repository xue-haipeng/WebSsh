/**
 * Created by Xue on 03/06/17.
 */
$(function () {
    var source_data = [];
    $.get('');
    // highchart demo
    var categories = ['日常运维', '排错', '安装/实施', '新技术/开发', '培训/布道'],
        data = [{
            drilldown: {
                name: '',
                categories: ['日常运维', '排错', '安装/实施', '新技术/开发', '培训/布道'],
                data: [10, 20, 30, 40, 20],   //数据，即this.y
            }
        }];

    // 创建数组
    var fuhuiData = [];
    var percentData = [];
    for (var i = 0; i < data.length; i++) {
        // 添加名称
        fuhuiData.push({
            name: categories[i],
            y: data[i].y,
        });

        // 添加百分比
        for (var j = 0; j < data[i].drilldown.data.length; j++) {
            var brightness = 0.2 - (j / data[i].drilldown.data.length) / 5 ;
            percentData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
            });
        }
    }

    // 创建图表
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
                    },
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
                formatter: function() {
                    // display only if larger than 1
                    //return this.y > 1 ? '<b>'+ this.point.name +':</b> '+ this.y +'%'  : null;    //这串代码设置了加粗
                    return this.y > 1 ? ''+ this.point.name +': '+ this.y +'%'  : null;
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