/**
 * Created by cash on 5/9/16.
 */
function analytics(){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-77730098-1', 'auto');
    ga('send', 'pageview');
}

function index(){
    var intro = $(".intro");
    intro.hide();
    intro.fadeIn(500);
}

function resetAbout(hobbies, favorites, assets, history){
    $("#com").text("");
    hobbies.slideUp();
    favorites.slideUp();
    assets.slideUp();
    history.slideUp();
    $("#com").text("");
    $("#hob").removeClass("selected1");
    $("#ass").removeClass("selected1");
    $("#fav").removeClass("selected1");
    $("#his").removeClass("selected1");
}

function about(){
    var intro = $(".welcome");
    var hobbies = $("#hobbies");
    var hobbiesBool = false;
    var assets = $("#assets");
    var assetsBool = false;
    var favorites = $("#favorites");
    var favoritesBool = false;
    var history = $("#history");
    var historyBool = false;

    $(".green").addClass("selected");
    intro.hide();
    hobbies.hide();
    assets.hide();
    favorites.hide();
    history.hide();
    intro.fadeIn(500);

    $("#hob").click(function () {
        resetAbout(hobbies, favorites, assets, history);
        if(!hobbiesBool){
            hobbies.slideDown();
            $("#hob").addClass("selected1");
            hobbiesBool = true;
        } else{
            hobbiesBool = false;
        }
    });

    $("#ass").click(function () {
        resetAbout(hobbies, favorites, assets, history);
        if(!favoritesBool){
            assets.slideDown();
            $("#ass").addClass("selected1");
            favoritesBool = true;
        } else{
            favoritesBool = false;
        }
    });

    $("#fav").click(function () {
        resetAbout(hobbies, favorites, assets, history);
        if(!assetsBool){
            favorites.slideDown();
            $("#fav").addClass("selected1");
            assetsBool = true;
        } else{
            assetsBool = false;
        }
    });

    $("#his").click(function () {
        resetAbout(hobbies, favorites, assets, history);
        if(!historyBool){
            history.slideDown();
            $("#his").addClass("selected1");
            historyBool = true;
        } else{
            historyBool = false;
        }
    });
}

function contact(){
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

function resume(){
    var intro = $(".welcome");
    $(".blue").addClass("selected");
    intro.hide();
    intro.fadeIn(500);
}

function extras(){
    var intro = $(".welcome");
    $(".purple").addClass("selected");
    intro.hide();
    intro.fadeIn(500);
}