/**
 * Created by Xue on 03/07/17.
 */
$(function() {
/*    var table = $('#report_table').DataTable({
        "destroy": true,
        "order": [[ 0, "desc" ]]
    });*/

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
                content: '您尚未选择任何条目，请选择一行！'
            });
            return;
        }
        $('#reportModal').modal('show');
        $('#title').text('更新事项');
        $('#system_name').removeAttr('readonly').val('OSB上市生产');
        $('#issue_brief').removeAttr('readonly').val('处理Server无法启动问题');

        $('input:checkbox[value="2"]').attr('checked', true);

        $('input:checkbox').eq(4).attr('checked', true);
/*
        $("input[type='radio']").click(function(){
            $("input[type='radio']").each(function () {
                this.checked = false;
            });
            this.checked = true;

        });*/
        $('input:radio[value="D"]').attr('checked', true);

        $('#issue_detail').removeAttr('readonly').val('Server无法启动，日志无具体原因');
        $('#solve_procedure').removeAttr('readonly').val('删除tmp、data、stage目录，重新启动，问题解决');
        $('#reference_doc').removeAttr('readonly').val('SR 3-1071405234');
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

} );