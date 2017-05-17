var app= angular.module("myApp", ["ngRoute", "app.home", "app.about" , "app.whyilove"]);
app.config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix("")
})
app.controller("mainCtrl", function($scope){
})