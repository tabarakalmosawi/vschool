/* example for camel case 
I went to the mall >> iWentToTheMall
 make a function
 var name = function(){
console.log("example for function")
}
name()
code :*/
/*
make a for loop
*/


var camelCase = function (str) {
    var words = str.split(" "); str.split("-"); str.split(",");
    
    var arr = []
    for (var i = 0; i < words.length; i++) {
        if (i === 0) {
            arr.push(words[0].toLowerCase())
        } else {
            var upper = words[i][0].toUpperCase()
            var lower = words[i].substr(1), words[i].length).toLowerCase()
            var word= upper + lower
            arr.push(word)
        }
    }
    console.log(arr.join(""))
}
camelCase("Making,a camel-case")
