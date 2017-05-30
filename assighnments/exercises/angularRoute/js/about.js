var app = angular.module("app.about", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/about", {
        templateUrl : "../view/about.html",
        controller: "aboutCtrl"
    })
})
