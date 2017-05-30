var nonRepeated = function(str){
    var arr = str.split("")
    for (var i=0  ; i<arr.length ; i++){
        if (arr[i] !== arr[i+1]){
            return arr[i+1]
        }
    }
}
console.log(nonRepeated("hhhhxsjj"))