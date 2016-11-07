/**
 * Created by Xue on 11/07/16.
 */

$(':input[name=addLifecycle_Status]').labelauty();
$(':input[name=addOs_Release]').labelauty();
$(':input[name=addIs_Virtualized]').labelauty();
$(':input[name=addHa_Type]').labelauty();
$("#addHost").on("click", function() {
    var obj = new Object();
    obj.hostname = $("#addHostname").val();
    obj.domain_Suffix = $("#addDomain_Suffix").val();
    obj.ip_Address = $("#addIp_Address").val();
    obj.system = $("#addSystem").val();
    obj.product = $("#addProduct").val();
    obj.node_Type = $("#addNode_Type").val();
    obj.lifecycle_Status = $("input[name='addLifecycle_Status']:checked").val();
    obj.os_Release = $("input[name='addOs_Release']:checked").val();
    obj.is_Virtualized = $("input[name='addIs_Virtualized']:checked").val();
    obj.ha_Type = $("input[name='addHa_Type']:checked").val();
    obj.location = $("#addLocation").val();
    obj.applicant = $("#addApplicant").val();
    obj.approver = $("#addApprover").val();
    obj.delivery_Date = $("#addDelivery_Date").val();
    obj.expired_Date = $("#addExpired_Date").val();
    obj.current_Status = $("#addCurrent_Status").val();
    obj.remarks = $("#addRemarks").val();
    $.ajax({
        url: 'basis/host/host/addHost',
        data: obj,
        method: 'post',
        dataType: 'json',
        complete: function(jqXHR, textStatus) {
            $("#addHostModal").modal("hide");
        }
    });
});
