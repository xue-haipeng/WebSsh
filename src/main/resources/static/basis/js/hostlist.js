/**
 * Created by Xue on 11/06/16.
 */
$(function() {

    $("#hostList").bootstrapTable({
        height:$(window).height()-130
    });
    //搜索事件
    $("#search").on("click", function() {
        search();
    });

    function search() {
        var $table = $("#hostList");
        $.post("host/host/getHostList", {
            limit: 10,
            offset: 0,
            order: "desc",
            sort: 'hostname',
            search:$('#searchBox').val()
        }, function(res) {
            $table.bootstrapTable("getOptions").pageNumber = 1; //默认排序从第一页开始
            $table.bootstrapTable('load', res);
        });
    }
    //排序事件
    $("#hostList").on('sort.bs.table', function(name, order) {
        $(this).bootstrapTable("getOptions").pageNumber = 1; //默认排序从第一页开始
    });

    //添加系统
    $("#add").on("click",function(){
        $("#addHostModal").load($(this).attr("data-url"));
        $('#addHostModal').on('hidden.bs.modal', function (e) {
            search();
        })
    });

    //更新系统
    $("#edit").on("click", function() {
        var data = $("#hostList").bootstrapTable("getSelections");
        if (data.length > 1||data.length<1) {
            new $.flavr({
                animateEntrance: "rollIn",
                animateClosing: "rollOut",
                content: '请选择一条记录',
                autoclose: true,
                timeout: 3000
            });
            $('#updateHostModal').modal({backdrop:false});//去掉蒙板
            return;
        }else{
            $("#updateHostModal").load($(this).attr("data-url"));
            $('#updateHostModal').on('hidden.bs.modal', function (e) {
                search();
            });
        }
    });


    //删除系统
    $("#delete").on("click", function() {
        var datas = $("#hostList").bootstrapTable("getSelections");
        var ids = "";
        var i = 0;
        if (datas.length < 1) {
            new $.flavr({
                animateEntrance: "rollIn",
                animateClosing: "rollOut",
                content: '请选择一条记录',
                autoclose: true,
                timeout: 3000
            });
            return;
        }
        for (i = 0; i < datas.length; i++) {
            ids += datas[i].id + ",";
        }
        $.ajax({
            url: 'host/host/deleteHost?ids=' + ids,
            method: 'post',
            dataType: 'json',
            complete: function(jqXHR, textStatus) {
                search();
            }
        });
    });
})
