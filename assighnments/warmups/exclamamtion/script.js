var removeExclamation = function(str){
    var arr = str.split("")
    for (var i=0 ; i<arr.length ; i++){ 
        if(arr[i] === "!"){
            arr[i] =""
        }
    }
    return arr.join("")
}
console.log(removeExclamation("hello!!!!!"))