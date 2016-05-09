/**
 * Created by cash on 5/9/16.
 */
function Cash(){
    var intro = $(".intro");
    var hi = $("#hello");
    var wel = $("#welcome");
    //hi.hide();
    //wel.hide();
    hi.html("Hello Cash");
    hi.fadeIn(2000);
    wel.html("Welcome...");
    wel.fadeIn(1000);
}