var getMiddle = function(str){
    var oddMid = str.length /2 -.5
    var evenMid = str.length /2 -1
    if (str.length % 2  === 0){
        console.log(str[evenMid] + str[evenMid+1])
    }else if(str.length %2 !== 0) {
        console.log(str[oddMid])
    }

}
getMiddle("middle");