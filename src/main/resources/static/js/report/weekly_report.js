/**
 * Created by Xue on 03/07/17.
 */
$(function() {
    var table = $('#report_table').DataTable({
        "order": [[ 0, "desc" ]]
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

    $('#detail').click( function () {
        if ( table.row('.selected').data() == undefined || table.row('.selected').data().length == 0 ) {
            $.alert({
                title: '警告：',
                content: '您尚未选择任何条目，请选择一行！'
            });
            return;
        }

        $('#reportModal').modal('show');

        $('#system_name').val('OSB上市生产');
        $('#item_brief').val('处理Server无法启动问题');

    } );
} );