/**
 * Created by Xue on 03/08/17.
 */
$(function () {
    var table = $('#report_table').DataTable({
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
    });
    $('#report_table tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );

    $('#reportModal').on('shown.bs.modal', function () {
        $("input[type='radio']").click(function(){
            $("input[type='radio']").each(function () {
                this.checked = false;
            });
            this.checked = true;
        });
    });

    $('#detail').click( function () {
        if ( table.row('.selected').data() == undefined || table.row('.selected').data().length == 0 ) {
            $.alert({
                title: '警告：',
                content: '您尚未选择任何条目，请选择一行！'
            });
            return;
        }
        $('#reportModal').modal('show');
        $('#title').text('查看事项');
        $('#system_name').val('OSB上市生产').attr('readonly', 'readonly');
        $('#issue_brief').val('处理Server无法启动问题').attr('readonly', 'readonly');
        $('input:checkbox[value="2"]').attr('checked', true);
        $('input:checkbox').eq(4).attr('checked', true);

        $("input[type='checkbox']").click(function(){
            this.checked = !this.checked;
        });

        $('input:radio[value="D"]').attr('checked', true);

        $('input[type="radio"]').not('input:radio[value="D"]').click(function () {
            this.checked = !this.checked;
        });

        $('#issue_detail').val('Server无法启动，日志无具体原因').attr('readonly', 'readonly');
        $('#solve_procedure').val('删除tmp、data、stage目录，重新启动，问题解决').attr('readonly', 'readonly');
        $('#reference_doc').val('SR 3-1071405234').attr('readonly', 'readonly');
        $('#file_name').attr('unselectable', 'on');

    } );

    $('#edit').click( function () {
        if ( table.row('.selected').data() == undefined || table.row('.selected').data().length == 0 ) {
            $.alert({
                title: '警告：',
                content: '您尚未选择任何条目，请先选中一行！'
            });
            return;
        }
        console.log("data: " + table.row('.selected').data());
        var id = table.row('.selected').data().id;
        var createDate;
        var createUser;
        var updateDate;
        var updateUser;
        var systemName;
        var appType;
        var workType;
        var issueBrief;
        var issueDetail;
        var solveProcedure;
        var fileName;
        var referenceDoc;
        $.ajax( {
            method: "GET",
            url: "/basis/report/specific_report?id=" + id,
            async: false,
            success: function (result) {
                console.log("response: " + result);
                createDate = result["createDate"];
                createUser = result["createUser"];
                updateDate = result["updateDate"];
                updateUser = result["updateUser"];
                systemName = result["systemName"];
                appType = result["appType"];
                workType = result["workType"];
                issueBrief = result["issueBrief"];
                issueDetail = result["issueDetail"];
                solveProcedure = result["solveProcedure"];
                fileName = result["fileName"];
                referenceDoc = result["referenceDoc"];
            }
        });

        $('#reportModal').modal('show');
        $('#title').text('更新事项');
        $('#report_id').val(id);
        $('#create_date').val(createDate);
        $('#create_user').val(createUser);
        $('#system_name').removeAttr('readonly').val(systemName);
        $('#issue_brief').removeAttr('readonly').val(issueBrief);
        if ( appType != undefined && appType != null && appType != "" ) {
            var apps = appType.split(",");
            for (var i = 0; i < apps.length; i++) {
                var app = apps[i];
                // $('input:checkbox[value=app]').attr('checked', true);
                $('input[type="checkbox"]').each(function () {
                    if (this.value == app) {
                        this.checked = true;
                    }
                });
            }
        }
        if ( workType != undefined && workType != null && workType != "" ) {
            // $('input:radio[value=workType]').attr('checked', true);
            $("input[type='radio']").each(function () {
                if (this.value == workType) {
                    this.checked = true;
                } else {
                    this.checked = false;
                }
            });
        }
        $('#issue_detail').removeAttr('readonly').val(issueDetail);
        $('#solve_procedure').removeAttr('readonly').val(solveProcedure);
        $('#reference_doc').removeAttr('readonly').val(referenceDoc);
    } );

    $('#save').click( function () {
        var system_name = $('#system_name').val();
        var issue_brief = $('#issue_brief').val();
        var checkbox = [];
        $('input[type="checkbox"]:checked').each(function() {
            checkbox.push($(this).val());
        });
        var app_type = checkbox.join(",");
        var radio = '';
        $('input[type="radio"]:checked').each(function() {
            radio += $(this).val();
        });
        var issue_detail = $('#issue_detail').val();
        var solve_procedure = $('#solve_procedure').val();
        var reference_doc = $('#reference_doc').val();
        var file_path = $('#file_name').val().split("\\");
        var file_name = file_path == undefined || null ? '': file_path[file_path.length - 1];

        var data = {"systemName": system_name, "issueBrief": issue_brief, "appType": app_type, "workType": radio,
            "issueDetail": issue_detail, "solveProcedure": solve_procedure, "referenceDoc": reference_doc, "fileName": file_name};

        $.get("/basis/report/save_report", data, function (response, status, xhr) {
            $('#reportModal').modal('hide');
            location.reload();
        });
    } );

    $('#update').click(function () {
        var report_id = $('#report_id').val();
        var create_date = $('#create_date').val();
        var create_user = $('#create_user').val();
        var system_name = $('#system_name').val();
        var issue_brief = $('#issue_brief').val();
        var checkbox = [];
        $('input[type="checkbox"]:checked').each(function() {
            checkbox.push($(this).val());
        });
        var app_type = checkbox.join(",");
        var radio = '';
        $('input[type="radio"]:checked').each(function() {
            radio += $(this).val();
        });
        var issue_detail = $('#issue_detail').val();
        var solve_procedure = $('#solve_procedure').val();
        var reference_doc = $('#reference_doc').val();
        var file_path = $('#file_name').val().split("\\");
        var file_name = file_path == undefined || null ? '': file_path[file_path.length - 1];

        var data = {"id": report_id, "systemName": system_name, "issueBrief": issue_brief, "appType": app_type, "workType": radio,
            "createDate": create_date, "createUser": create_user, "issueDetail": issue_detail, "solveProcedure": solve_procedure, "referenceDoc": reference_doc, "fileName": file_name};

        $.ajax({
            method: "POST",
            url: "/basis/report/update_report",
            contentType: "application/json",
            async: true,
            dataType: "json",
            data: JSON.stringify(data),
            success: function (response, status, xhr) {
                console.log("callback executed");
                $('#reportModal').modal('hide');
                location.reload();
            }
        });
    })

});