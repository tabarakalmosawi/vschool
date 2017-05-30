angular.module("app").service("bookSvc", function($http){
    this.getReq = function(){
        return $http.get("https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=data&format=json")
    }
})