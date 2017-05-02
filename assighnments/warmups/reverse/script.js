var palindromecheck = function(str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    if (joinArray === str){
        console.log(true)
    } else {
        console.log(false)
    }
    
}
palindromecheck("noon")

