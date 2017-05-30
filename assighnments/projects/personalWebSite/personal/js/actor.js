angular.module("myApp").controller("actorCtrl", function ($scope, actorSvc) {
    var allList = [];
    actorSvc.getAReq().then(function (response) {
        allList = response.data;
        allList = allList.split("imdb$aa(").join("");
        allList = allList.split(")").join("");
        allList = JSON.parse(allList).d
        console.log(allList)
        cFunc()
    })
    var cFunc = function () {
        actorSvc.getCReq().then(function (response) {
            var list = response.data;
            console.log(list)
            list = list.split("imdb$cc(").join("");
            list = list.split(")").join("");
            list = JSON.parse(list).d
            allList = allList.concat(list)
            console.log(allList)
            eFunc()
        })
    }

    var eFunc = function () {
        actorSvc.getEReq().then(function (response) {
            var list = response.data;
            list = list.split("imdb$ee(").join("");
            list = list.split(")").join("");
            list = JSON.parse(list).d
            allList = allList.concat(list)
            console.log(allList)
            gFunc()
        })
    }
    var gFunc = function () {
        actorSvc.getGReq().then(function (response) {
            var list = response.data;
            list = list.split("imdb$gg(").join("");
            list = list.split(")").join("");
            list = JSON.parse(list).d
            allList = allList.concat(list)
            console.log(allList)
            iFunc()
        })
    }
    var iFunc = function () {
        actorSvc.getIReq().then(function (response) {
            var list = response.data;
            list = list.split("imdb$ii(").join("");
            list = list.split(")").join("");
            list = JSON.parse(list).d
            allList = allList.concat(list)
            console.log(allList)
            mFunc()
        })
    }
    var mFunc = function () {
        actorSvc.getMReq().then(function (response) {
            var list = response.data;
            list = list.split("imdb$mm(").join("");
            list = list.split(")").join("");
            list = JSON.parse(list).d
            allList = allList.concat(list)
            console.log(allList)
            pFunc()
        })
    }

    var pFunc = function () {
        actorSvc.getPReq().then(function (response) {
            var list = response.data;
            list = list.split("imdb$pp(").join("");
            list = list.split(")").join("");
            list = JSON.parse(list).d
            allList = allList.concat(list)
            $scope.list = allList
            console.log(allList)
            dFunc()

        })
    }
    var dFunc = function () {
        actorSvc.getDReq().then(function (response) {
            var list = response.data;
            list = list.split("imdb$dd(").join("");
            list = list.split(")").join("");
            list = JSON.parse(list).d
            allList = allList.concat(list)
            $scope.list = allList
            console.log(allList)
            uFunc()
        })
    }
    var uFunc = function () {
        actorSvc.getUReq().then(function (response) {
            var list = response.data;
            list = list.split("imdb$uu(").join("");
            list = list.split(")").join("");
            list = JSON.parse(list).d
            allList = allList.concat(list)
            $scope.list = allList
            console.log(allList)
        })
    }



})
