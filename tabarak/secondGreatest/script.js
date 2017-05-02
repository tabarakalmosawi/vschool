var arr = [3, 5, 8, 4, 6, 1, 7, 10]
var greatestLowerstNum = function(){
    var num = arr.sort(function(a, b){
        return a - b
    })
    console.log(num[1])
    console.log(num[num.length - 2])
}
greatestLowerstNum()
