$(function() {
    menu_top = $('.menu').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > menu_top) {
            if ($('.menu').css ('position') != 'fixed') {
                $('.menu').css ('position', 'fixed');
                $('.menu').css ('top', '0');
                $('.content').css ('margin-top', '80px');
            }
        } else {
            if ($('.menu').css ('positio') == 'fixed') {
                $('.menu').css ('position', '');
                $('.menu').css ('top', '');
                $('.content').css ('margin-top', '');
            }
        }
    });
});