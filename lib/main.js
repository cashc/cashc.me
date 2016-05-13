/**
 * Created by cash on 5/9/16.
 */
function Index(){
    var intro = $(".intro");
    intro.hide();
    intro.fadeIn(500);
}

function About(){
    var intro = $(".welcome");
    var hobbies = $("#hobbies");
    var assets = $("#assets");
    var favorites = $("#favorites");
    var history = $("#history");
    $(".green").addClass("selected");
    intro.hide();
    hobbies.hide();
    assets.hide();
    favorites.hide();
    history.hide();
    intro.fadeIn(500);
    $("#hob").click(function () {
        favorites.slideUp();
        assets.slideUp();
        history.slideUp();
        $("#com").hide();
        $("#ass").removeClass("selected1");
        $("#fav").removeClass("selected1");
        $("#his").removeClass("selected1");
        hobbies.slideDown();
        $("#hob").addClass("selected1");
    });
    $("#ass").click(function () {
        hobbies.slideUp();
        favorites.slideUp();
        history.slideUp();
        $("#com").hide();
        $("#fav").removeClass("selected1");
        $("#hob").removeClass("selected1");
        $("#his").removeClass("selected1");
        assets.slideDown();
        $("#ass").addClass("selected1");
    });
    $("#fav").click(function () {
        hobbies.slideUp();
        assets.slideUp();
        history.slideUp();
        $("#com").hide();
        $("#hob").removeClass("selected1");
        $("#ass").removeClass("selected1");
        $("#his").removeClass("selected1");
        favorites.slideDown();
        $("#fav").addClass("selected1");
    });
    $("#his").click(function () {
        hobbies.slideUp();
        assets.slideUp();
        favorites.slideUp();
        $("#com").hide();
        $("#hob").removeClass("selected1");
        $("#ass").removeClass("selected1");
        $("#fav").removeClass("selected1");
        history.slideDown();
        $("#his").addClass("selected1");
    });
}

function Contact(){
    var intro = $(".welcome");
    $(".yellow").addClass("selected");
    intro.hide();
    intro.fadeIn(500);
}

function Resume(){
    var intro = $(".welcome");
    $(".blue").addClass("selected");
    intro.hide();
    intro.fadeIn(500);
}

function Extras(){
    var intro = $(".welcome");
    $(".purple").addClass("selected");
    intro.hide();
    intro.fadeIn(500);
}