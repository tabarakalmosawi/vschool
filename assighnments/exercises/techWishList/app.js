var app=angular.module("app", ["ngRoute"]);
app.config(function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix("")
    $routeProvider.when("/", {
        templateUrl : "./views/computer.html",
        controller : "computerCtrl"
    })
    .when ("/phone",{
        templateUrl : "./views/phone.html",
        controller: "phoneCtrl"
    })
})

app.controller("ctrl", function($scope){
    
})
