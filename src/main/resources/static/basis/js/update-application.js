/**
 * Created by Xue on 11/10/16.
 */

$(function() {
    $("#updateApplication").on("click", function() {
        var id = $("#updateId").val();
        var system = $("#updateSystem").val();
        var project_Name = $("#updateProject_Name").val();
        var platform_Name = $("#updatePlatform_Name").val();
        var business_Line = $("#updateBusiness_Line").val();
        var product = $("#updateProduct").val();
        var company = $("#updateCompany").val();
        var administrator = $("#updateAdministrator").val();
        var lifecycle_Status = $("#updateLifecycle_Status").val();
        var mw_Type = $("#updateMw_Type").val();
        var data = {id: id, system: system, project_Name: project_Name, platform_Name: platform_Name, business_Line: business_Line,
            product: product, company: company, administrator: administrator, lifecycle_Status: lifecycle_Status, mw_Type: mw_Type};
        $.ajax({
            url: '/basis/host/application/updateApplication',
            data: data,
            method: 'post',
            dataType: 'json',
            complete: function(jqXHR, textStatus) {
                $("#updateApplicationModal").modal("hide");
                location.reload();
            }
        });
    });
});