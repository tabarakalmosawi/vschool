var app = angular.module("myApp", []);
app.service("todoReq", function ($http) {
    this.getTodo = function () {
        return $http.get("https://api.vschool.io/tabarak/todo")
    }
    this.postTodo = function (info) {
        return $http.post('https://api.vschool.io/tabarak/todo/', info)
    }
    this.deleteTodo = function (item) {
        return $http.delete("https://api.vschool.io/tabarak/todo/" + item._id)
    }
    this.putTodo = function (item, data) {
        return $http.put("https://api.vschool.io/tabarak/todo/" + item._id, data)
    }
})
app.controller("mainCtrl", function ($scope, todoReq) {
    todoReq.getTodo().then(function (response) {
        console.log(response.data)
        $scope.arr = response.data
    })
    $scope.btn = function () {
        $scope.todoList = {
            title: $scope.title,
            imgUrl: $scope.imgUrl,
            price: $scope.price,
            description: $scope.description,
            checkBox: $scope.checkBox
        }
        todoReq.postTodo($scope.todoList).then(function (obj) {
            $scope.arr.push(obj.data)
        }, function (err) {
            console.log(err.status)
        });
    }
    $scope.remove = function (item) {
        todoReq.deleteTodo(item).then(function (response) {
            todoReq.getTodo().then(function (response) {
                console.log(response.data)
                $scope.arr = response.data
            })
        })
    }
    $scope.update = function (item) {
        var data = {
            title: $scope.title,
            imgUrl: $scope.imgUrl,
            price: $scope.price,
            description: $scope.description,
            checkBox: $scope.checkBox

        }
        todoReq.putTodo(item, data).then(function (response) {
            todoReq.getTodo().then(function (response) {

                console.log(response.data)
                $scope.arr = response.data
            })


        })
    }
})
