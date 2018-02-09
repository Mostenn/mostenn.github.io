$(document).ready(function () {
    $(".progress-bar").circularProgress({
        color: "#1F1C2C",
        line_width: 10,
        height: "350px",
        width: "350px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 25
    }).circularProgress('animate', 100, 2300);
});

$(window).on('load', function () {
    var $preloader = $('#preloader');
    $preloader.delay(2500).fadeOut('slow');
});