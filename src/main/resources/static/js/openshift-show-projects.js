/**
 * Created by Xue on 12/04/16.
 */
$(function() {
    alert('loaded!');
    $.getJSON('/openshift/getProjectResources', function (data) {
        alert(data);
        $('#abc').text('abcdefghijklmnopqrstuvwxyz');

        $("#project_ul").empty();
        var u = $("#project_ul").append("<ul>");
        for (var i = 0; i < data.length; i++) {
            u.append("<li>" + data[i] + "</li>");
        }
        $("#project_ul").append("</ul>");
    });
});
