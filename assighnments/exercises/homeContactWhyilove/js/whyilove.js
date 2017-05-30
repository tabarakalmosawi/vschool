var app=angular.module("app.whyilove", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when("/whyilove",{
        templateUrl : "../view/whyilove.html",
        controller: "whyiloveCtrl"
    })
})