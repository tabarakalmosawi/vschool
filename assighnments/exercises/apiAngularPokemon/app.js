var app= angular.module("myApp", []);
app.controller("mainCtrl", function($scope, $http){
    $scope.getPokemon = function(){
        $http.get("http://pokeapi.co/api/v2/pokemon/" + $scope.pokeNum).then(function(response){
            $scope.pokemon= response.data.name
        }),function(err){
            alert(err)
        }
    }
})





























/*var app = angular.module("myApp", []);
app.controller("mainCtrl", function($scope, $http){
    $scope.getPokemon = function(){
        $http.get("http://pokeapi.co/api/v2/pokemon/" + $scope.pokeNum).then(function(response){
            $scope.pokemon = response.data.name
            console.log(response)
        },function(err){
            console.log(err)
        })
    }
})*/


























/*var app = angular.module("myApp", [])
app.controller("mainCtrl", function($scope, $http){
    $scope.getStarWars = function(){
        $http.get("http://swapi.co/api/people/1/").then(function(data){
            console.log(data)
        },function(err){
            console.log(err)
        })
    }
})*/