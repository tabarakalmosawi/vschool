var app = angular.module("myApp", []);
app.controller("mainCtrl", function ($scope, $http) {

    $http.get("https://api.vschool.io/tabarak/todo").then(function (response) {

        console.log(response.data)
        $scope.arr = response.data
    })
    $scope.btn = function () {
        $scope.todoList = {
            title: $scope.title,
            imgUrl: $scope.imgUrl,
            price: $scope.price,
            description: $scope.description
        }
        $http.post('https://api.vschool.io/tabarak/todo/', $scope.todoList).then(function (obj) {
            $scope.arr.push(obj)
        }, function (err) {
            console.log(err.status)
        });

    }
})