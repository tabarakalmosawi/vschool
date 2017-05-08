var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope) {
    $scope.end1 = 0;
    $scope.end2 = 0;
    $scope.end3 = 0;
    $scope.money1 = 0;
    $scope.money2 = 0;
    $scope.money3 = 0;
    $scope.money11 = 0;
    $scope.money22 = 0;
    $scope.money33 = 0;




    $scope.btn = function () {
        $scope.end1 = $scope.money1 - $scope.money11
        $scope.end2 = $scope.money2 - $scope.money22
        $scope.end3 = $scope.money3 - $scope.money33


    }
})
