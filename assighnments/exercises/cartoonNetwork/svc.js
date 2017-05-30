angular.module("myApp").service("mainSvc", function () {
    this.arr = []
    this.cartoon = function (img, title, description) {
        var obj = {
            img: img,
            imgTitle: title,
            imgDescriptions: description
        }
        this.arr.push(obj)
    }
})
