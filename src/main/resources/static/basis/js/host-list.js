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
        $.post("/basis/host/host/getHostList", {
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
        var data = $("#hostList").bootstrapTable("getSelections")[0];
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
        } else {
            $("#updateHostModal").load($(this).attr("data-url"),data, function() {
                var origin_dilivery_date = new Date(data.delivery_Date);
                formated_delivery_Date = origin_dilivery_date.pattern("yyyy-MM-dd"); // requires date-time-formating.js pre-imported.
                var orgin_expired_Date = new Date(data.expired_Date);
                formated_expired_Date = orgin_expired_Date.pattern("yyyy-MM-dd");
                // var data = $("#hostList").bootstrapTable("getSelections")[0];
                $("#updateId").val(data.id);
                $("#updateHostname").val(data.hostname);
                $("#updateDomain_Suffix").val(data.domain_Suffix);
                $("#updateIp_Address").val(data.ip_Address);
                $("#updateSystem").val(data.system);
                $("#updateProduct").val(data.product);
                $("#updateOs_Release").val(data.os_Release);
                $("#updateHa_Type").val(data.ha_Type);
                $("#updateLocation").val(data.location);
                $("#updateApplicant").val(data.applicant);
                $("#updateApprover").val(data.approver);
                $("#updateDelivery_Date").val(formated_delivery_Date);
                $("#updateExpired_Date").val(formated_expired_Date);
                $("#updateCurrent_Status").val(data.current_Status);
                $("#updateRemarks").val(data.remarks);
                $("#updateLifecycle_Status").val(data.lifecycle_Status);
                $("#updateNode_Type").val(data.node_Type);
                $("#updateIs_Virtualized").val(data.is_Virtualized);
            });
            $('#updateHostModal').on('hidden.bs.modal', function (e) {
                location.reload();
                //search();
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
            url: '/basis/host/host/deleteHost?ids=' + ids,
            method: 'post',
            dataType: 'json',
            complete: function(jqXHR, textStatus) {
                search();
            }
        });
    });
})
