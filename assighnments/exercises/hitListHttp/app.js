var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope, $http) {

    $http.get("https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json").then(function (response) {
        console.log(response)
        var config = 'ISBN:9780980200447';
        $scope.hitList = response.data[config].table_of_contents;
        $scope.link = response.data[config].links

        console.log(response.data[config].table_of_contents)

    })

})
