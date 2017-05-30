var app = angular.module("myApp", []);
var config = {  
    headers: {
        'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
    }
};
app.service("yodaReq", function($http){
    this.getYoda = function(text){
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + text,config )
    }
})

app.controller("mainCtrl", function($scope, yodaReq){
    $scope.btn = function(){
        yodaReq.getYoda($scope.text).then(function(response){
            $scope.yoda = response.data
        }, function(err){
            console.log(err.status)
        })
    }
})