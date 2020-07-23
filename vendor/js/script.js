// interval is in milliseconds. 1000 = 1 second -> so 1000 * 10 = 10 seconds
$('.carousel').carousel({
    interval: 500 * 10
});

setTimeout(function(){
    $('.loader').css('display', 'none');
}, 4000);