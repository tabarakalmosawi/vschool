angular.module("app").directive("myNav", function(){
    return {
        restrict : "A E",
        templateUrl : "./view/dir.html",
        link : function(scope, element, attr){
            scope.changeColor= function(){
                var colors = ["red", "pink", "yellow", "green", "blue"];
               var index = Math.floor(Math.random() * colors.length)
                console.log(colors[index])
                document.querySelector("nav").style.backgroundColor= colors[index]
            }
        }
    }
})