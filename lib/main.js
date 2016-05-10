/**
 * Created by cash on 5/9/16.
 */
function Cash(){
    var intro = $(".intro");
    var hi = $("#hello");
    var wel = $("#welcome");
    hi.hide();
    wel.hide();
    hi.fadeIn(500);
    setTimeout(function(){
        wel.fadeIn(250);
    }, 500);
}