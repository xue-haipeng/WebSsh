/**
 * Created by Xue on 03/08/17.
 */
$(function () {
    var current_user = $('#authority').text();
    function translateUser() {
        switch (current_user) {
            case 'admin':
                return '管理员';
            case 'xuehaipeng':
                return '薛海鹏';
            case 'zhouwei':
                return '周惟';
            case 'xiongxiaojun':
                return '熊晓军';
            case 'hesiyang':
                return '何思洋';
            case 'jiangyongrui':
                return '姜永锐';
            case 'wenduzi':
                return '文都子';
            case 'jiaolong':
                return '焦龙';
            case 'wangyubo':
                return '王禹博';
            case 'hushuai':
                return '胡帅';
            case 'zhaoxin':
                return '赵鑫';
            case 'hanxinyi':
                return '韩心怡';
            case 'wangqian':
                return '王茜';
            case 'xuguanxiong':
                return '徐冠雄';
            case 'baijie':
                return '白洁';
            case 'lvshuhua':
                return '吕淑华';
        }
    }

    var table = $('#report_table').DataTable({
        "retrieve": true,
        "pageLength": 8,
            "order": [[ 0, "desc" ]],
        "ajax": {
            "url": "/basis/report/retrieve_reports",
            "dataSrc": ""
        },
        "columnDefs": [
            { "targets": [ 0 ], "visible": false }
/*            { "targets": [ 3 ], "visible": false },
            { "targets": [ 4 ], "visible": false },
            { "targets": [ 9 ], "visible": false },
            { "targets": [ 10 ], "visible": false },
            { "targets": [ 11 ], "visible": false },
            { "targets": [ 12 ], "visible": false }*/
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
/*            { "data": "updateDate" },  //3
            { "data": "updateUser" },  //4*/
            // { "data": "systemName" },  //5
            { "data": "project" },  //5
            { "data": "appType" },  //6
            { "data": "workType" },  //7
            { "data": "issueBrief" }  //8
/*            { "data": "issueDetail" },  //9
            { "data": "solveProcedure" },  //10
            { "data": "fileName" },  //11
            { "data": "referenceDoc" }  //12*/
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
            bootbox.alert("<span style='font-family: 'Microsoft Yahei UI'; color: '#C71585';'>您还未选择任何条目，请先选中一行记录！</span>");
            return;
        }
        var id = table.row('.selected').data().id;
        var createDate;
        var createUser;
        var updateDate;
        var updateUser;
        // var systemName;
        var project;
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
                // systemName = result["systemName"];
                project = result["project"];
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
        $('#reportModal').on('shown.bs.modal', function () {
            $('#title').text('查看事项');
            $('#ok').show();
            $('#save').hide();
            $('#update').hide();
            $('#file_name').hide();
        });
/*        $('#system_name').val(systemName).attr('readonly', 'readonly');*/
        $('#issue_brief').val(issueBrief).attr('readonly', 'readonly');
        $('#project').val(project).attr("disabled", 'disabled');

        if ( appType != undefined && appType != null && appType != "" ) {
            var apps = appType.split(",");
            for (var i = 0; i < apps.length; i++) {
                var app = apps[i];
                // $('input:checkbox[value=app]').attr('checked', true);
                $('input[type="checkbox"]').each(function () {
                    if (this.value == app) {
                        this.checked = true;
                    } else {
                        this.checked = false;
                    }
                });
            }
        }
        $("input[type='checkbox']").click(function(){
            this.checked = !this.checked;
        });

        if ( workType != undefined && workType != null && workType != "" ) {
            $("input[type='radio']").each(function () {
                if (this.value == workType) {
                    this.checked = true;
                } else {
                    this.checked = false;
                }
            });
        }
        $('input[type="radio"]').click(function () {
            this.checked = !this.checked;
        });

        $('#issue_detail').val(issueDetail).attr('readonly', 'readonly');
        $('#solve_procedure').val(solveProcedure).attr('readonly', 'readonly');
        $('#reference_doc').val(referenceDoc).attr('readonly', 'readonly');
        $('#download_file').removeAttr('hidden');
        if (fileName != null) {
            $('#download_file').text(fileName).attr('href', '/basis/report/files/' + fileName);
        }

    } );

    $('#create').click( function () {
        $('#reportModal').on('shown.bs.modal', function () {
            $('#title').text('添加事项');
            $('#ok').hide();
            $('#save').show();
            $('#update').hide();
            $('#file_name').show();
            $('#download_file').hide();
            // $('#system_name').removeAttr('readonly').val('');
            $('#project').removeAttr('disabled').val('');
            $('#issue_brief').removeAttr('readonly').val('');
            $("input[type='checkbox']").each(function () {
                this.checked = false;
            });
            $("input[type='checkbox']").click(function(){
                this.checked = true;
            });
            $("input[type='radio']").each(function () {
                this.checked = false;
            });
            $("input[type='radio']").click(function(){
                $("input[type='radio']").each(function () {
                    this.checked = false;
                });
                this.checked = true;
            });
            $('#issue_detail').removeAttr('readonly').val('');
            $('#solve_procedure').removeAttr('readonly').val('');
            $('#reference_doc').removeAttr('readonly').val('');
        });
    });

    $('#edit').click( function () {
        if ( table.row('.selected').data() == undefined || table.row('.selected').data().length == 0 ) {
            bootbox.alert("<span style='font-family: 'Microsoft Yahei UI'; color: '#C71585';'>您还未选择任何条目，请先选中一行记录！</span>");
            return;
        }
        if (  current_user != 'admin' && translateUser() != table.row('.selected').data().createUser ) {
            bootbox.alert("<span style='font-family: 'Microsoft Yahei UI'; color: '#C71585';'>对不起，您木有权限编辑此条目。</span>");
            return;
        }
        console.log("data selected to edit: " + table.row('.selected').data());
        var id = table.row('.selected').data().id;
        var createDate;
        var createUser;
        var updateDate;
        var updateUser;
        // var systemName;
        var project;
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
                // systemName = result["systemName"];
                project = result["project"];
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
        $('#reportModal').on('shown.bs.modal', function () {
            $('#title').text('更新事项');
            $('#ok').hide();
            $('#save').hide();
            $('#update').show();
            $('#file_name').show();
            $('#download_file').hide();
        });

        $('#report_id').val(id);
        $('#create_date').val(createDate);
        $('#create_user').val(createUser);
        // $('#system_name').removeAttr('readonly').val(systemName);
        $('#project').removeAttr('disabled').val(project);
        $('#issue_brief').removeAttr('readonly').val(issueBrief);
        if ( appType != undefined && appType != null && appType != "" ) {
            var apps = appType.split(",");
            for (var i = 0; i < apps.length; i++) {
                var app = apps[i];
                // $('input:checkbox[value=app]').attr('checked', true);
                $('input[type="checkbox"]').each(function () {
                    if (this.value == app) {
                        this.checked = true;
                    } else {
                        this.checked = false;
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
        // var system_name = $('#system_name').val();
        var project = $('#project').val();
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
        var file_name = file_path == undefined || null || '' ? '': file_path[file_path.length - 1];

        if ( issue_brief == undefined || issue_brief == null || issue_brief == '' ) {
            bootbox.alert("<span style='font-family: 'Microsoft Yahei UI'; color: '#C71585';'>您没有填写工作事项！</span>");
            return;
        }
        if ( radio == undefined || radio == null || radio == '' ) {
            bootbox.alert("<span style='font-family: 'Microsoft Yahei UI'; color: '#C71585';'>您没有填写工作类型！</span>");
            return;
        }

        var data = {"project": project, "issueBrief": issue_brief, "appType": app_type, "workType": radio,
            "issueDetail": issue_detail, "solveProcedure": solve_procedure, "referenceDoc": reference_doc, "fileName": file_name};

        if (file_path != undefined && file_path != null && file_path != '') {
            var formData = new FormData();
            formData.append('file', $('#file_name')[0].files[0]);
            $.ajax({
                url: '/basis/report/upload',
                type: 'POST',
                cache: false,
                data: formData,
                processData: false,
                contentType: false
            })
        }
        $.get("/basis/report/save_report", data, function (response, status, xhr) {
            $('#reportModal').modal('hide');
            location.reload();
        });
    } );

    $('#update').click(function () {
        var report_id = $('#report_id').val();
        var create_date = $('#create_date').val();
        var create_user = $('#create_user').val();
        // var system_name = $('#system_name').val();
        var project = $('#project').val();
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

        var data = {"id": report_id, "project": project, "issueBrief": issue_brief, "appType": app_type, "workType": radio,
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
    });

    $('#delete').click(function () {
        if ( table.row('.selected').data() == undefined || table.row('.selected').data().length == 0 ) {
            bootbox.alert("<span style='font-family: 'Microsoft Yahei UI';'>您还未选择任何条目，请先选中一行记录！</span>");
            return;
        } else if (translateUser() != table.row('.selected').data().createUser) {
            bootbox.alert("<span style='font-family: 'Microsoft Yahei UI'; color: '#C71585';'>对不起，您木有权限删除此条目。</span>");
            return;
        } else {
            console.log("data: " + table.row('.selected').data());
            var id = table.row('.selected').data().id;

            bootbox.confirm({
                title: "<span style='font-family: 'Microsoft Yahei UI'; color: chocolate;'>确认删除</span>",
                message: "<span style='font-family: 'Microsoft Yahei UI'; color: forestgreen;'>您确定要删除该条目吗？此操作将不可恢复！</span>",
                buttons: {
                    cancel: {
                        label: '<i class="fa fa-times"></i> Cancel'
                    },
                    confirm: {
                        label: '<i class="fa fa-check"></i> Confirm'
                    }
                },
                callback: function (result) {
                    if (result == true) {
                        $.get("/basis/report/delete_report", {id: id}, function (response, status, xhr) {
                            location.reload();
                            console.log('已成功删除')
                        });
                    }
                }
            });
        }
    });
});