$(document).ready(function() {
    var date = new Date();
    //Background color of pagination changed by time 
    $("a:hover").css('color', function() {
        var r = date.getHours() % 16;
        var g = date.getMinutes() % 16;
        var b = date.getSeconds() % 16;
        var color = r + 16 * (g + 16 * b);
        return '#' + color.toString(16);
    });

    //Copyright time
    $('p#cop').html(function() {
        return $(this).html().replace(/2012/, '2012-' + date.getFullYear());
    });
});
