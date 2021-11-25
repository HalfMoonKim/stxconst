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