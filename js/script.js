$(document).ready(function () {
    // Modal close
    $('.modal').click(function () {
        $(this).fadeOut();
    });

    // Head Area
    const header = $('.header');
    const gnb = header.find('.gnb');
    const header_class = 'header_open'

    gnb.mouseenter(function () {
        header.addClass(header_class);
    });

    gnb.mouseleave(function () {
        header.removeClass(header_class);
    });

    // Main Menu Focus
    for(let i = 0; i <= $('.mainmenu').length; i++) {
        $('.depth1 > li > a').eq(i).mouseenter(function(){
            $('.mainmenu').eq(i).addClass('mainmenu-focus')
        });
        $('.depth1 > li > a').eq(i).mouseleave(function(){
            $('.mainmenu').eq(i).removeClass('mainmenu-focus')
        });

        $('.depth2').eq(i).mouseenter(function(){
            $('.mainmenu').eq(i).addClass('mainmenu-focus')
        });
        $('.depth2').eq(i).mouseleave(function(){
            $('.mainmenu').eq(i).removeClass('mainmenu-focus')
        });
    };

    // Move to business
    $('.move-cate').click(function (e) {
        // event return
        e.preventDefault();

        const tg_y = $('.cate').offset().top;
        $('html, body').animate({
            scrollTop: tg_y
        });
    });
});