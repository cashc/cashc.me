function analytics(){
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-77730098-1', 'auto');
    ga('send', 'pageview');
}

function mobileFriendly() {
    var x = document.getElementById("top-navigation");
    if (x.className === "topnav") {
        x.className += " mobile-friendly";
    } else {
        x.className = "topnav";
    }
}

function welcomeFadeIn(){
    var intro = $(".welcome");
    intro.hide();
    intro.fadeIn(250);
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
    var hobbies = $("#hobbies");
    var hobbiesBool = false;
    var assets = $("#assets");
    var assetsBool = false;
    var favorites = $("#favorites");
    var favoritesBool = false;
    var history = $("#history");
    var historyBool = false;

    hobbies.hide();
    assets.hide();
    favorites.hide();
    history.hide();

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
    var expand = $("#expand");
    $("#msu").hide();
    $("#gmail").hide();
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
    var expand = $("#expand");
    $("#color").hide();
    expand.click(function(){
        if(expand.html() == "-"){
            expand.html("+");
            $("#color").slideUp();
        }
        else{
            expand.html("-");
            $("#color").slideDown();
        }
    });
}
