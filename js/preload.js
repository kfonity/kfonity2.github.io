$(document).ready(function() {

//Detecting viewpot dimension
    var vH = $(window).height();
    var vW = $(window).width();


//PRELOADER
    $('#preloader').css('width', vW);
    $('#preloader').css('height', vH);
    $('#all').addClass('preloader-running');
    $('#all').css('visibility ', 'hidden');
    $(document).ready(function () {
        $("#status").delay(800).fadeOut();
        $("#preloader").delay(1000).fadeOut(1000);
        $('#all').removeClass('preloader-running');
        $('#all').addClass('preloader-done');
        $("#all").delay(1000).css('visibility', 'visible');
    });
});