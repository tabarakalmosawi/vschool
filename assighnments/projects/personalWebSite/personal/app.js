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
