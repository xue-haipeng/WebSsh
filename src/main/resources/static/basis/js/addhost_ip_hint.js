/**
 * Created by Xue on 11/21/16.
 */

$("#addIp_Address").blur(function(){
    var url = "/basis/host/host/judgeLocation?ip=" + $(this).val();

    $.get(url, function(response, status, xhr){

            if (response == 'M08'){
                $("#ip_hint").html("<span style='color:#ff7272;'><em>提示：</em>系统判断当前主机位于吉林8号机房，供参考，请以实际为准！</span>");
            } else if (response == 'M10') {
                $("#ip_hint").html("<span style='color:#ff7272;'><em>提示：</em>系统判断当前主机位于吉林10号机房，供参考，请以实际为准！</span>");
            } else if (response == 'M01') {
                $("#ip_hint").html("<span style='color:#ff7272;'><em>提示：</em>系统判断当前主机位于北京1号机房，供参考，请以实际为准！</span>");
            } else if (response == 'M03') {
                $("#ip_hint").html("<span style='color:#ff7272;'><em>提示：</em>系统判断当前主机位于北京3号机房，供参考，请以实际为准！</span>");
            }
        });
});