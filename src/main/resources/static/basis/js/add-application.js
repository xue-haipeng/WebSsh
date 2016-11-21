/**
 * Created by Xue on 11/07/16.
 */

$("#addApplication").on("click", function() {
    var obj = new Object();
    obj.system = $("#addSystem").val();
    obj.project_Name = $("#addProject_Name").val();
    obj.platform_Name = $("#addPlatform_Name").val();
    obj.business_Line = $("#addBusiness_Line").val();
    obj.lifecycle_Status = $("#addLifecycle_Status").val();
    obj.product = $("#addProduct").val();
    obj.mw_Type = $("#addMw_Type").val();
    obj.company = $("#addCompany").val();
    obj.administrator = $("#addAdministrator").val();

    if ($.isEmptyObject(obj.system)) {
        alert("系统名称不能为空");
        // $('#addApplicationModal').modal({backdrop:false});//去掉蒙板
        return;
    }
    if ($.isEmptyObject(obj.lifecycle_Status)) {
        alert("系统类型不能为空");
        return;
    }
    if ($.isEmptyObject(obj.product)) {
        alert("产品名称不能为空");
        return;
    }
    $.ajax({
        url: '/basis/host/application/addApplication',
        data: obj,
        method: 'post',
        dataType: 'json',
        complete: function(jqXHR, textStatus) {
            $("#addApplicationModal").modal("hide");
            location.reload();
        }
    });

});
