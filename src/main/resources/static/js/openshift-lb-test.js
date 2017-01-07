/**
 * Created by Xue on 12/04/16.
 */
$(function () {
    $.getJSON('/loadbalanceTest', function (data) {

        var hostname = data[0].hostname;
        var nic = data[0].nic;
        var ip = data[0].ip;
        var mac = data[0].mac;
        var pid = data[data.length-1].pid;

        $('#hostname').text(hostname);
        $('#nic').text(nic);
        $('#ip').text(ip);
        $('#mac').text(mac);
        $('#pid').text(pid);
    });
});
