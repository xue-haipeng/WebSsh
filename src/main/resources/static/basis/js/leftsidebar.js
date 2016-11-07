/**
 * Created by Xue on 11/06/16.
 */
$(".leftsidebar_box dt").css({
    "background-color": "#fff"
});
$(".leftsidebar_box dt img").attr("src", "/basis/img/left/select_xl01.png");
$(function() {
    $(".leftsidebar_box dd").hide();
    $(".leftsidebar_box dt").click(function() {
        $(".leftsidebar_box dt").css({
            "background-color": "#fff"
        })
        $(this).css({
            "background-color": "#42b4f0"
        });
        $(this).parent().find('dd').removeClass("menu_chioce");
        $(".leftsidebar_box dt img").attr("src", "/basis/img/left/select_xl01.png");
        $(this).parent().find('img').attr("src", "/basis/img/left/select_xl.png");
        $(".menu_chioce").slideUp();
        $(this).parent().find('dd').slideToggle();
        $(this).parent().find('dd').addClass("menu_chioce");
    });
})
