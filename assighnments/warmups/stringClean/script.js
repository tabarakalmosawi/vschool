First Solution :
var num = [0,1,2,3,4,5,6,7,8,9]
var stringClean = function(str){
    var arr = str.split("")
    for (var i=0 ; i<arr.length ; i++){ 
        if(arr[i] == "0" || arr[i] =="1" || arr[i] == "2" || arr[i] =="3" || arr[i]=="4" || arr[i]=="5" || arr[i]=="6" || arr[i]=="7" || arr[i]=="8" || arr[i]=="9"){
            arr[i] = " "
        }
    }
    return arr.join("")
}
console.log(stringClean("my0st5ri6n4g321is2clean333"))
//Second Solution :
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var stringClean = function (str) {
    var arr = str.split("")
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < num.length; j++) {
            if (arr[i] == num[j])
                arr[i] = " "
        }

    }
    return arr.join("")
}
console.log(stringClean("my string5 is 4clean"))
