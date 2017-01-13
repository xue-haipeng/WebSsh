/**
 * Created by Xue on 12/04/16.
 */
$(function () {
    $.getJSON('/openshift/objectCount', function (data) {

        var namespaces = data.namespaces;
        var nodes = data.nodes;
        var routes = data.routes;
        var services = data.services;
        var dcs = data.dcs;
        var bcs = data.bcs;
        var iss = data.iss;
        var pods = data.pods;

        $('#projectcount').text(namespaces);
        $('#nodecount').text(nodes);
        $('#routecount').text(routes);
        $('#servicecount').text(services);
        $('#dccount').text(dcs);
        $('#bccount').text(bcs);
        $('#iscount').text(iss);
        $('#podcount').text(pods);
    });
});
