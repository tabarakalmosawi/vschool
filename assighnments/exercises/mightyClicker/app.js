var app = angular.module("myApp", []);
app.service("blueService", function () {
    this.increment = function (countBlue) {

        return countBlue + 1
    }
    this.decrement = function (countBlue) {
        return countBlue - 1
    }
    this.reset = function (re) {
       return re =10
    }
})
app.service("redService", function () {
    this.increment = function (countred) {
        return countred + 1
    }
    this.decrement = function (countred) {
        return countred - 1
    }
    this.reset = function (re) {
        return re = 10
    }
})
app.controller("mainCtrl", function ($scope, blueService, redService) {
    $scope.numRed = 10;
    $scope.numBlue = 10;
    $scope.red = function () {
        $scope.numRed = redService.increment($scope.numRed)
        $scope.numBlue = blueService.decrement($scope.numBlue)
        if ($scope.numBlue < 0) {
            $scope.numBlue = blueService.reset($scope.numBlue)
        }
    }
    $scope.blue = function () {
        $scope.numRed = redService.decrement($scope.numRed)
        $scope.numBlue = blueService.increment($scope.numBlue)
        if ($scope.numRed <0){
            $scope.numRed = redService.reset($scope.numRed)
        }
        
    }
})
