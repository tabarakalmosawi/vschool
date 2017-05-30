var app= angular.module("app", []);
app.controller("mainCtrl", function($scope, $http){
    $scope.person = {}
    $scope.loadData = function(){
    $http.get("http://swapi.co/api/people/1/").then(function(response){
      $scope.person = response.data
      console.log(response.data)
  }, (function(err){
      console.log(err.status);
  }))
}})

