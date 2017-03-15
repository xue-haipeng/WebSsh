/**
 * Created by Xue on 03/15/17.
 */
var currentShowCity=0;
$(document).ready(function(){
    $("#domain").change(function(){
        $("#domain option").each(function(i,o){
            if($(this).attr("selected"))
            {

                $(".project").hide();
                $(".project").eq(i).show();
                currentShowCity=i;
            }
        });
    });
    $("#domain").change();
});
