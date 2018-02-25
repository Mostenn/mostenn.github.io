$(document).ready(function () {
    $(".progress-bar").circularProgress({
        color: "#01151e",
        line_width: 17,
        height: "350px",
        width: "350px",
        percent: 20,
        counter_clockwise: false,
        starting_position: 25
    }).circularProgress('animate', 100, 2300);
});

$(window).on('load', function () {
    var $preloader = $('#preloader');
    $preloader.delay(2500).fadeOut('slow');
});