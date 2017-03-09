/**
 * Created by Xue on 03/08/17.
 */
$(function () {
/*    if ( $.fn.dataTable.isDataTable( '#report_table' ) ) {
        $('#report_table').DataTable().destroy();
    }*/
    $('#report_table').DataTable({
        "retrieve": true,
        "pageLength": 7,
            "order": [[ 0, "desc" ]],
        "ajax": {
            "url": "/basis/report/retrieve_reports",
            "dataSrc": ""
        },
        "columnDefs": [
            { "targets": [ 0 ], "visible": false },
            { "targets": [ 3 ], "visible": false },
            { "targets": [ 4 ], "visible": false },
            { "targets": [ 9 ], "visible": false },
            { "targets": [ 10 ], "visible": false },
            { "targets": [ 11 ], "visible": false },
            { "targets": [ 12 ], "visible": false }
        ],
        "columns": [
            { "data": "id" }, //0
            // { "data": "createDate" }, //1
            { "data": "createDate",
                render : function(data, type, full, meta) {
                    if (!full["createDate"]) {
                        return ""
                    } else {
                        date = new Date(data);
                        return date.format("MMM dd  hh:mm");
                    }
                } }, //1
            { "data": "createUser" },  //2
            { "data": "updateDate" },  //3
            { "data": "updateUser" },  //4
            { "data": "systemName" },  //5
            { "data": "appType" },  //6
            { "data": "workType" },  //7
            { "data": "issueBrief" },  //8
            { "data": "issueDetail" },  //9
            { "data": "solveProcedure" },  //10
            { "data": "fileName" },  //11
            { "data": "referenceDoc" }  //12
        ]
    })
});