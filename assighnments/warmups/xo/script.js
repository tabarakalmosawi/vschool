var XO = function(str){
    var str = str.toLowerCase()
    var x = 0;
    var o =0;
    for (var i=0 ; i<str.length ; i++){
        if (str[i]==="o"){
            o+=1
        } else if (str[i] === "x"){
            x+=1
        }
    }
    if(x===o){
        return true
    }else {
        return false
    }
}
console.log(xo("Xxoo"))
