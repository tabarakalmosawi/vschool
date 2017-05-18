var app = angular.module("myApp", []);
var count =10;
app.service("blueService", function () {
    this.increment = function () {
        return count ++
    }
    this.decrement = function(){
        return count --
    }
})
app.service("redService", function () {
      this.increment = function () {
        return count --
    }
    this.decrement = function(){
        return count ++
    }

})
app.controller("mainCtrl", function ($scope, "blueService", "redService") {
    $scope.test ="working";
    $scope.red = function () {
        console.log(redService.increment())
        console.log(blueService.decrement())
        
    }
    $scope.blue = function () {
        redService.decrement()
        blueService.increment()
    }
})
