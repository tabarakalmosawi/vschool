var app = angular.module("app", []);
app.service("pokeReq", function($http){
    this.getPokemon = function(pokeNum){
    return $http.get("http://pokeapi.co/api/v2/pokemon/" + pokeNum)
    }
})
app.controller("pokemonCtrl", function ($scope, pokeReq) {
    $scope.pokeMon = {};
    $scope.search = function () {
      pokeReq.getPokemon($scope.pokeNum).then(function (response) {
            $scope.pokeMon = response.data;
            console.log(response.data)
        }, (function (err) {
            console.log(err.status);
        }))
    }
});
