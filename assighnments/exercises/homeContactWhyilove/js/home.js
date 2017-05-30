var app= angular.module("app.home", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl: "../view/home.html",
        controller: "homeCtrl"
    })
})