/**
 * Created by Xue on 12/01/16.
 */
$(function () {
    $.getJSON('/ascs_cpu_line', function (data) {
        var emp = [];
        var osp = [];
        var cop = [];
        var ep9 = [];
        var zyp = [];
        var ep1 = [];
        var ep4 = [];
        var tkm = [];
        var hp1 = [];
        var ep6 = [];
        var ep7 = [];
        var cp6 = [];
        var cpf = [];
        var cpo = [];
        var ep8 = [];
        var cp8 = [];
        var ep3 = [];
        var cp3 = [];
        var ep2 = [];
        var cp2 = [];

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
        var j14 = 0;
        var j15 = 0;
        var j16 = 0;
        var j17 = 0;
        var j18 = 0;
        var j19 = 0;
        var j20 = 0;

        for (i=0; i<data.length; i++) {
            if(data[i].hostname == 'EMPSCS') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                emp[j1++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'OSPSCS') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                osp[j2++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'COPSCS') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                cop[j3++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'VSCSERPEP09') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                ep9[j4++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'ZYPSCS') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                zyp[j5++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'VSCSERPEP01') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                ep1[j6++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'VSCSERPEP04') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                ep4[j7++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'ERPTKM01') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                tkm[j8++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'VSCSERPHP01') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                hp1[j9++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'VSCSERPEP06') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                ep6[j10++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'VSCSERPEP07') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                ep7[j11++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EESAP6001') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                cp6[j12++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EESAPF001') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                cpf[j13++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EESAPO001') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                cpo[j14++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'VSCSERPEP08') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                ep8[j15++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EESAP8001') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                cp8[j16++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'VSCSERPEP03') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                ep3[j17++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EESAP3001') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                cp3[j18++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'VSCSERPEP02') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                ep2[j19++] = [timepoint, cpuusage];
            }
            if(data[i].hostname == 'EESAP2001') {
                var timepoint = data[i].datetime;
                var cpuusage = data[i].cpuusage;
                cp2[j20++] = [timepoint, cpuusage];
            }
        }

        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#ascs_line').highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'ASCS最近6小时CPU使用率',
                style: {
                    'font-family': 'Microsoft YaHei'
                }
            },
/*            subtitle: {
                text: 'ASCS最近6小时CPU使用率',
                style: {
                    'font-family': 'Microsoft YaHei'
                }
            },*/
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
                    text: 'CPU使用率 (100%)',
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

            series: [{name: 'EMP', data: emp},
                {name: 'OSP', data: osp},
                {name: 'COP', data: cop},
                {name: 'EP9', data: ep9},
                {name: 'ZYP', data: zyp},
                {name: 'EP1', data: ep1},
                {name: 'EP4', data: ep4},
                {name: 'TKM', data: tkm},
                {name: 'HP1', data: hp1},
                {name: 'EP6', data: ep6},
                {name: 'EP7', data: ep7},
                {name: 'CP6', data: cp6},
                {name: 'CPF', data: cpf},
                {name: 'CPO', data: cpo},
                {name: 'EP8', data: ep8},
                {name: 'CP8', data: cp8},
                {name: 'EP3', data: ep3},
                {name: 'CP3', data: cp3},
                {name: 'EP2', data: ep2},
                {name: 'CP2', data: cp2}]
        });
    });
});

function compare(a, b) {
    return a[0] - b[0]
}