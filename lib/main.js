/**
 * Created by cash on 5/9/16.
 */
function Analytics(){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-77730098-1', 'auto');
    ga('send', 'pageview');
}

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
    var expand = $("#expand");
    $(".yellow").addClass("selected");
    intro.hide();
    $("#msu").hide();
    $("#gmail").hide();
    intro.fadeIn(500);
    expand.click(function(){
        if(expand.html() == "-"){
            expand.html("+");
            $("#msu").slideUp();
            $("#gmail").slideUp();
        }
        else{
            expand.html("-");
            $("#msu").slideDown();
            $("#gmail").slideDown();
        }
    });
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