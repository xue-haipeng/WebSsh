/**
 * Created by Xue on 11/23/16.
 */
$(document).ready(function(){

    $('#basis').on('click', function(){

        var html =
            '   <div class="form-row">' +
            '       <input type="text" name="username" placeholder="Username" />' +
            '   </div>' +
            '   <div class="form-row">' +
            '       <input type="password" name="password" placeholder="Password" />' +
            '   </div>' +
            '   <div class="form-row">' +
            '       <input type="checkbox" name="remember" id="check"/>' +
            '       <label for="check">Remember me</label>' +
            '   </div>';

        new $.flavr({
            title       : '登陆',
            iconPath    : 'image/',
            icon        : 'CNPC-logo.png',
            content     : 'Please Logon to Continue',
            dialog      : 'form',
            form        : { content: html, method: 'post' },
            onSubmit    : function( $container, $form ){
                $.get('/login', $form.serialize(), function (response, status) {
                    location.reload();
                });
            }
        });

    });
});