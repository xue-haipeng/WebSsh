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
