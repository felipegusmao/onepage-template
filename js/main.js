
$(document).ready(function() {

    $('section#screenshots a').on('click', function() {
        $('div#modal img').attr('src',$(this).attr('data-image-url'));
    });

    var nav = $('.navbar-fixed-top');

    var distance = $('.navbar-fixed-top').offset();

    if(distance.top >= 300) {
        nav.addClass('effect');
    }

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if(scroll>=300) {
            nav.addClass('effect');
        }else {
            nav.removeClass('effect');
        }
    });

    $('#about .blue-circle').waypoint(function() {
        $('#about .blue-circle').addClass('animated fadeInUp');
    },{
        offset: '50%'
    });

    $('.tools-image img').waypoint(function() {
        $('.tools-image img').addClass('animated rubberBand');
    },{
        offset: '50%'
    });

    $('#tools .blue-circle').waypoint(function() {
        $(this.element).addClass('animated fadeInUp');
    },{
        offset: '50%'
    });

    $('#screenshots  .col-xs-4').waypoint(function() {
        $(this.element).addClass('animated zoomIn');
        $(this.element).css({'opacity':1})

    },{
        offset: '50%'
    });

    $('#dowload div.phone img').waypoint(function() {
        $(this.element).addClass('animated fadeInRight');
    },{
        offset: '50%'
    });

    $('#download .platforms > div').waypoint(function() {
        $(this.element).addClass('animated fadeInUp');
    },{
        offset: '50%'
    });

});

smoothScroll.init({
    speed: 700,
    easing: 'easeInOutQuad',
    updateURL: false,
    offset: 0
});
