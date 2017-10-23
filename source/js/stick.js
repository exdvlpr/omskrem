var win = $(window),
    nav = $('nav'),

    pos = nav.offset().top,
    sticky = function(){
        win.scrollTop() > pos ?
            nav.addClass('sticky')
            : nav.removeClass('sticky')
    };

win.scroll(sticky);

$(function () {
    $('.menu__toggle').on('click', function () {
        $('.menu__list').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});