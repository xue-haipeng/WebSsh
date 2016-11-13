/**
 * Created by Xue on 11/10/16.
 */

$(function () {
    $("#updateHost").on("click", function() {
        var id = $("#updateId").val();
        var hostname = $("#updateHostname").val();
        var domain_Suffix = $("#updateDomain_Suffix").val();
        var ip_Address = $("#updateIp_Address").val();
        var system = $("#updateSystem").val();
        var product = $("#updateProduct").val();
        var os_Release = $("#updateOs_Release").val();
        var ha_Type = $("#updateHa_Type").val();
        var location = $("#updateLocation").val();
        var applicant = $("#updateApplicant").val();
        var approver = $("#updateApprover").val();
        var delivery_Date = $("#updateDelivery_Date").val();
        var expired_Date = $("#updateExpired_Date").val();
        var current_Status = $("#updateCurrent_Status").val();
        var remarks = $("#updateRemarks").val();
        var lifecycle_Status = $("#updateLifecycle_Status").val();
        var node_Type = $("#updateNode_Type").val();
        var is_Virtualized = $("#updateIs_Virtualized").val();
        var data = {id: id, hostname: hostname, domain_Suffix: domain_Suffix, ip_Address: ip_Address, system: system, product: product,
            os_Release: os_Release, ha_Type: ha_Type, location: location, applicant: applicant, approver: approver, delivery_Date: delivery_Date,
            expired_Date: expired_Date, current_Status: current_Status, remarks: remarks, lifecycle_Status: lifecycle_Status, node_Type: node_Type,
            is_Virtualized: is_Virtualized}
        $.post('/basis/host/host/updateHost', data, function (response, status, xhr) {
            $("#updateHostModal").modal("hide");
            location.reload();
        });
    });
})