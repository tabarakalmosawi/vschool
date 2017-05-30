angular.module("app").directive("myDirc" , function(){
    return {
        restrict: "E",
        templateUrl : "./views/dirc.html",
        scope: {
            image: "@",
            name : "@",
            price : "@"
        },
        link : function(scope, element, attr){
            
        }
    }
})