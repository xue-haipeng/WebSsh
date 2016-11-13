/**
 * Created by Xue on 11/10/16.
 */

$(function() {
    var data = $("#applicationList").bootstrapTable("getSelections")[0];
    $("#updateSystem").val(data.system);
    $("#updateProject_Name").val(data.project_Name);
    $("#updatePlatform_Name").val(data.platform_Name);
    $("#updateBusiness_Line").val(data.business_Line);
    $("#updateProduct").val(data.product);
    $("#updateCompany").val(data.company);
    $("#updateAdministrator").val(data.administrator);
    var lifecycle_Status = data.lifecycle_Status;
    var mw_Type = data.mw_Type;
    //根据value值设置radio选中项
    $("#updateApplication").on("click", function() {
        data.system = $("#updateSystem").val();
        data.project_Name = $("#updateProject_Name").val();
        data.platform_Name = $("#updatePlatform_Name").val();
        data.business_Line = $("#updateBusiness_Line").val();
        data.product = $("#updateProduct").val();
        data.company = $("#updateCompany").val();
        data.administrator = $("#updateAdministrator").val();
        data.lifecycle_Status = $("#updateLifecycle_Status").val();
        data.mw_Type = $("#updateMw_Type").val();
        $.ajax({
            url: '/basis/host/application/updateApplication',
            data: data,
            method: 'post',
            dataType: 'json',
            complete: function(jqXHR, textStatus) {
                $("#updateSystem").val("");
                $("#updateProject_Name").val("");
                $("#updatePlatform_Name").val("");
                $("#updateBusiness_Line").val("");
                $("#updateProduct").val("");
                $("#updateCompany").val("");
                $("#updateAdministrator").val("");
                $("#updateApplicationModal").modal("hide");
            }
        });
    });
});