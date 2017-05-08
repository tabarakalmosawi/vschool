var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope) {
/*
    $scope.text = ""
*/
            $scope.person = {};

    $scope.people = [];
    $scope.info = function () {
        $scope.person = {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            email: $scope.email,
            placeOfBirth: $scope.placeOfBirth,
            phone: $scope.phone,
            favoriteFood: $scope.favoriteFood,
            text : $scope.text

        };
        $scope.people.push($scope.person)
        $scope.person = {};
    }
})
