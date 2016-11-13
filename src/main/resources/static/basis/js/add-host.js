/**
 * Created by Xue on 11/07/16.
 */

$("#addHost").on("click", function() {
    var obj = new Object();
    obj.hostname = $("#addHostname").val();
    obj.domain_Suffix = $("#addDomain_Suffix").val();
    obj.ip_Address = $("#addIp_Address").val();
    obj.system = $("#addSystem").val();
    obj.product = $("#addProduct").val();
    obj.node_Type = $("#addNode_Type").val();
    obj.lifecycle_Status = $("#addLifecycle_Status").val();
    obj.os_Release = $("#addOs_Release").val();
    obj.is_Virtualized = $("#addIs_Virtualized").val();
    obj.ha_Type = $("#addHa_Type").val();
    obj.location = $("#addLocation").val();
    obj.applicant = $("#addApplicant").val();
    obj.approver = $("#addApprover").val();
    obj.delivery_Date = $("#addDelivery_Date").val();
    obj.expired_Date = $("#addExpired_Date").val();
    obj.current_Status = $("#addCurrent_Status").val();
    obj.remarks = $("#addRemarks").val();
    $.ajax({
        url: 'addHost',
        data: obj,
        method: 'post',
        dataType: 'json',
        complete: function(jqXHR, textStatus) {
            $("#addHostModal").modal("hide");
            location.reload();
        }
    });
});
