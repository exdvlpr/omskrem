var win = $(window),
    nav = $('.menu__container'),

    pos = nav.offset().top,
    sticky = function(){
        win.scrollTop() > pos ?
            nav.addClass('sticky')
            : nav.removeClass('sticky')
    };

win.scroll(sticky);

/*--cssmenu--*/
( function( $ ) {
    $( document ).ready(function() {
        $('.menu').prepend('<div class="menu-button">Меню</div>');
        $('.menu .menu-button').on('click', function(){
            var menu = $(this).next('ul');
            if (menu.hasClass('open')) {
                menu.removeClass('open');
            }
            else {
                menu.addClass('open');
            }
        });
    });
} )( jQuery );
