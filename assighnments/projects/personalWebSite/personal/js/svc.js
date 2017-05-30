angular.module("myApp").service("actorSvc", function ($http) {
    this.getAReq = function () {
        return $http.get("http://sg.media-imdb.com/suggests/a/aa.json")
    }
    this.getCReq = function () {
        return $http.get("http://sg.media-imdb.com/suggests/c/cc.json")
    }
    this.getEReq = function () {
        return $http.get("http://sg.media-imdb.com/suggests/e/ee.json")
    }
    this.getGReq = function () {
        return $http.get("http://sg.media-imdb.com/suggests/g/gg.json")
    }
    this.getIReq = function () {
        return $http.get("http://sg.media-imdb.com/suggests/i/ii.json")
    }
    this.getMReq = function () {
        return $http.get("http://sg.media-imdb.com/suggests/m/mm.json")
    }
    this.getPReq = function () {
        return $http.get("http://sg.media-imdb.com/suggests/p/pp.json")
    }
    this.getDReq = function () {
        return $http.get("http://sg.media-imdb.com/suggests/d/dd.json")
    }
    /*    this.getUReq = function () {
        return $http.get("http://sg.media-imdb.com/suggests/u/uu.json")
    }
    */

})
