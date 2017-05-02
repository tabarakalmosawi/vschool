var antiCaps = function (str) {
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            temp += str[i].toLowerCase()
        } else {
            temp += str[i].toUpperCase()
        }
    }
    return temp;
}
console.log(antiCaps("Hello World"))
