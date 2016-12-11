/**
 * Created by Xue on 12/01/16.
 */
$(function () {
    $.getJSON('/bpm_cpuInfo', function (data) {
        var exbapt001 = [];
        var exbapt002 = [];
        var exbapt003 = [];
        var exbapt004 = [];
        var exbapt005 = [];
        var exbapt006 = [];
        var exfapt001 = [];
        var exfapt002 = [];
        var exfapt003 = [];
        var exfapt004 = [];
        var exfapt005 = [];
        var exfapt006 = [];
        var exfapt007 = [];
        var j1 = 0;
        var j2 = 0;
        var j3 = 0;
        var j4 = 0;
        var j5 = 0;
        var j6 = 0;
        var j7 = 0;
        var j8 = 0;
        var j9 = 0;
        var j10 = 0;
        var j11 = 0;
        var j12 = 0;
        var j13 = 0;

        for (i=0; i<data.length; i++) {
            if(data[i].hostname == 'EXBAPT001') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exbapt001[j1++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXBAPT002') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exbapt002[j2++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXBAPT003') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exbapt003[j3++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXBAPT004') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exbapt004[j4++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXBAPT005') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exbapt005[j5++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXBAPT006') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exbapt006[j6++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXFAPT001') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exfapt001[j7++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXFAPT002') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exfapt002[j8++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXFAPT003') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exfapt003[j9++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXFAPT004') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exfapt004[j10++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXFAPT005') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exfapt005[j11++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXFAPT006') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exfapt006[j12++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EXFAPT007') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                exfapt007[j13++] = [timepoint, cpuusage];
            }
        }

        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#bpm').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: '',
                style: {
                    'font-family': 'Microsoft YaHei'
                }
            },
            subtitle: {
                text: 'BPM最近6小时CPU使用率',
                style: {
                    'font-family': 'Microsoft YaHei'
                }
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 50,
                dateTimeLabelFormats: { // don't display the dummy year
                    second: '%H:%M:%S',
                    minute: '%H:%M',
                    hour: '%H:%M'
                },
                title: {
                    text: 'Time'
                }
            },
            yAxis: {
                title: {
                    text: 'CPU使用率(100%)',
                    style: {
                        'font-family': 'Microsoft YaHei'
                    }
                },
                min: 0
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%b.%e, %H:%M}  <b>{point.y:.2f} %</b>'
//            	pointFormat: '{point.x:%X}  <b>{point.y:.2f} %</b>'
            },

            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },

            series: [{name: 'exbapt001', data: exbapt001},
                {name: 'exbapt002', data: exbapt002},
                {name: 'exbapt003', data: exbapt003},
                {name: 'exbapt004', data: exbapt004},
                {name: 'exbapt005', data: exbapt005},
                {name: 'exbapt006', data: exbapt006},
                {name: 'exfapt001', data: exfapt001},
                {name: 'exfapt002', data: exfapt002},
                {name: 'exfapt003', data: exfapt003},
                {name: 'exfapt004', data: exfapt004},
                {name: 'exfapt005', data: exfapt005},
                {name: 'exfapt006', data: exfapt006},
                {name: 'exfapt007', data: exfapt007}]
        });
    });
});

function compare(a, b) {
    return a[0] - b[0]
}