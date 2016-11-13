/**
 * Created by Xue on 11/06/16.
 */
$(function() {

    $("#applicationList").bootstrapTable({
        height:$(window).height()-130
    });
    //搜索事件
    $("#search").on("click", function() {
        search();
    });

    function search() {
        var $table = $("#applicationList");
        $.post("/basis/host/application/getApplicationList", {
            limit: 10,
            offset: 0,
            order: "desc",
            sort: 'system',
            search:$('#searchBox').val()
        }, function(res) {
            $table.bootstrapTable("getOptions").pageNumber = 1; //默认排序从第一页开始
            $table.bootstrapTable('load', res);
        });
    }
    //排序事件
    $("#applicationList").on('sort.bs.table', function(name, order) {
        $(this).bootstrapTable("getOptions").pageNumber = 1; //默认排序从第一页开始
    });

    //添加系统
    $("#add").on("click",function(){
        $("#addApplicationModal").load($(this).attr("data-url"));
        $('#addApplicationModal').on('hidden.bs.modal', function (e) {
            search();
        })
    });

    //更新系统
    $("#edit").on("click", function() {
        var data = $("#applicationList").bootstrapTable("getSelections");
        if (data.length > 1||data.length<1) {
            new $.flavr({
                animateEntrance: "rollIn",
                animateClosing: "rollOut",
                content: '请选择一条记录',
                autoclose: true,
                timeout: 3000
            });
            $('#updateApplicationModal').modal({backdrop:false});//去掉蒙板
            return;
        }else{
            $("#updateApplicationModal").load($(this).attr("data-url"));
            $('#updateApplicationModal').on('hidden.bs.modal', function (e) {
                search();
            });
        }
    });


    //删除系统
    $("#delete").on("click", function() {
        var datas = $("#applicationList").bootstrapTable("getSelections");
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
            url: '/basis/host/application/deleteApplication?ids=' + ids,
            method: 'post',
            dataType: 'json',
            complete: function(jqXHR, textStatus) {
                search();
            }
        });
    });
})
