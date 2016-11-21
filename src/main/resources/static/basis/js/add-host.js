/**
 * Created by Xue on 11/07/16.
 */
function checkIP(value){
    var exp=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    var reg = value.match(exp);
    if(reg==null) { return false; }
    return true;
}
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
    if ($.isEmptyObject(obj.hostname)) {
        alert("主机名不能为空");
        return;
    }
    if ($.isEmptyObject(obj.ip_Address)) {
        alert("IP地址不能为空");
        return;
    }
    if (!checkIP(obj.ip_Address)) {
        alert("IP地址不合法");
        return;
    }
    if ($.isEmptyObject(obj.system)) {
        alert("系统名称不能为空");
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
