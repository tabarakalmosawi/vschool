angular.module("app").controller("homeCtrl", function($scope, bookSvc){
    bookSvc.getReq().then(function(response){
        var config = 'ISBN:9780980200447';
        $scope.authors = response.data[config].authors
    })
         
     })
})