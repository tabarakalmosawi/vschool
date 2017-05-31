var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
        .when("/", {
            templateUrl: "./views/home.html",
            controller: "homeCtrl"
        })
        .when("/actor", {
            templateUrl: "./views/actor.html",
            controller: "actorCtrl"
        })
        .when("/contactus", {
            templateUrl: "./views/contact.html",
            controller: "contactCtrl"
        })
})



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}