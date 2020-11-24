window.addEventListener('DOMContentLoaded', function () {

    /*about inspiration news 메뉴 클릭*/
    $(document).ready(function () {
        $(".ins").hide();
        $(".news").hide();
        $(".slide_1 .slide_menu").click(function (e) {
            var a = $(this).index();
            $(".aa").hide();
            $(".aa").eq(a).show();
        });
    });
    /*inspiration 서브메뉴*/
    $(document).ready(function () {
        /*첫화면*/
        $("#inspiration").click(function () {
            $(".bb").show();
            $(".cc").hide();
        });
        /*클릭*/
        $(".ins_menus").click(function (e) {
            var a = $(this).index();
            $(".ins_2_2").hide();
            $(".ins_2_2").eq(a).show();
        });
    });
    $(document).ready(function () {

        $(".ham").click(function () {
            $(".slide").addClass("active");
        });

        $("main").click(function (e) {
            if (e.target.className != 'ham') {
                $(".main_1").css({
                    opacity: 1
                });
                $(".slide").removeClass("active");
            }
        });

    });

});
$(document).ready(function () {
    $("#section4").css({
        transform: 'translateY(200%)'
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1030) {
            $("#section4").css({
                transform: 'translateY(0)'
            });
        } else {
            $("#section4").css({
                transform: 'translateY(200%)'
            });
        }
    });
});


$(window).scroll(function () {
    if ($(this).scrollTop() >= 1500) {
        $("#fd1").width('45%');
        $("#section3 h2").css({opacity:0});
    }
    if ($(this).scrollTop() >= 2000) {
        $("#fd2").width('45%');
    }
    if ($(this).scrollTop() >= 2500) {
        $("#fd3").width('45%');
    }
    if ($(this).scrollTop() >= 3000) {
        $("#fd4").width('45%');
    }
    if ($(this).scrollTop() >= 3500) {
        $("#fd5").width('45%');
    }
});
$(window).scroll(function () {
    if ($(this).scrollTop() <= 1500) {
        $("#fd1").width('50%');
        $("#section3 h2").css({opacity:1});
    }
    if ($(this).scrollTop() <= 2000) {
        $("#fd2").width('50%');
    }
    if ($(this).scrollTop() <= 2500) {
        $("#fd3").width('50%');
    }
    if ($(this).scrollTop() <= 3000) {
        $("#fd4").width('50%');
    }
    if ($(this).scrollTop() <= 3500) {
        $("#fd5").width('50%');
    }
});

$(document).ready(function () {
    $(".sec9_text").css({
        transform: 'translateX(-95%)'
    });
    $(".sec9 p").on('click',function(){
        $(this).toggleClass('active');
        $("#text").toggleClass('active');
        $(".sec9_1").toggleClass('active');
    });
    
});
$('.footTop a').click(function (e) {
        e.preventDefault();
    });



