var app = angular.module("app", ["ngRoute"]);
app.config(function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix("");
    $routeProvider
    .when("/",{
        templateUrl : "./views/home.html",
        controller : "homeCtrl"
    })
    .when("/book",{
        templateUrl : "./views/aboutTheBook.html",
        controller : "aboutCtrl"
    })
})
/*app.controller("ctrl", function ($scope, $http) {
    $http.get("https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json").then(function (response) {
        console.log(response)
        var config = 'ISBN:9780980200447';
        $scope.tableOfcont = response.data[config].table_of_contents;
        $scope.links = response.data[config].links
        $scope.weight = response.data[config].weight
        $scope.title = response.data[config].title
        $scope.url = response.data[config].url
        $scope.publishDate = response.data[config].publish_date
        $scope.notes = response.data[config].notes
        $scope.cover = response.data[config].cover
        $scope.publishers = response.data[config].publishers
        $scope.puplishPlaces = response.data[config].publish_places
        console.log(response.data[config].table_of_contents)

    })
})*/
