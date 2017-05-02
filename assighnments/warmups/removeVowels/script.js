var removeVowels = function(str){
/*
    var str= str.toLowerCase()
*/
    var sameLine = ""
    var changeStr = str.split("")
    for (var i =0 ; i<changeStr.length ; i++){
        if (changeStr[i] != "a" && changeStr[i] != "e" && changeStr[i] !="o" && changeStr[i]!= "i" && changeStr[i] !="u" ){
            sameLine += changeStr[i]
        }
    }
    console.log(sameLine)
}
removeVowels("hello WEAOorld")
             
