// interval is in milliseconds. 1000 = 1 second -> so 1000 * 10 = 10 seconds

$(document).ready(function() {
    $('.carousel').carousel({
        interval: 500 * 10
    });

    setTimeout(function(){
        $('.loader').css('display', 'none');
    }, 4000);
    $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 280) {
            $('.navbar').addClass('navbar-fixed');
            $('.navbar-brand').addClass('fixed-brand');
            $('.nav-nav-light').css('background-color','rgba(1,2,3,0.58)');

        }
        if ($(window).scrollTop() < 281) {
            $('.navbar').removeClass('navbar-fixed');
            $('.navbar-brand').removeClass('fixed-brand');

        }
    });
    // optional
    $('#blogCarousel').carousel({
        interval: 9000
    });
});