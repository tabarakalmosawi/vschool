var app = angular.module("myApp", [])
app.controller("mainCtrl", function ($scope) {
    $scope.arr = []

    $scope.btn = function () {
        $scope.stuff = {
            img: $scope.img,
            title: $scope.title,
            Description: $scope.Description
        }
        $scope.arr.push($scope.stuff)
    }

})
