$(document).ready(function () {
    $(".progress-bar").circularProgress({
        color: "#134E5E",
        line_width: 18,
        height: "350px",
        width: "350px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 25
    }).circularProgress('animate', 100, 1500);
});

$(window).on('load', function () {
    var $preloader = $('#preloader');
    $preloader.delay(2500).fadeOut('slow');
});