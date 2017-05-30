var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope, mainSvc ) {
    $scope.arr = mainSvc.arr
    $scope.btn = function () {
        $scope.cartoon = {
            img: $scope.img,
            imgTitle: $scope.imgTitle,
            imgDescriptions: $scope.imgDescriptions
        }
        mainSvc.cartoon($scope.img, $scope.imgTitle , $scope.imgDescriptions)
        console.log($scope.cartoon)
    }
})
