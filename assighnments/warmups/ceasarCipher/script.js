var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
var shiftKey = 1;
var text = "Hello".toLowerCase()
var shiftMessage = function (message, key) {
    if (key <0){
        key = key % alpha.length
        key += 26
    }
    var result = ""
    for (var i = 0; i < message.length; i++) {
        if (alpha.indexOf(message[i]) !== -1) {
/*
            console.log(message[i])*/
            var indexInAlpha = alpha.indexOf(message[i])
            indexShift = indexInAlpha + key;
            if (indexShift >= alpha.length){
                indexShift = indexShift % alpha.length
            }
            result += alpha[indexShift]
        } else {
            result += message[i];
        }
    }
                console.log(result)

}
shiftMessage(text, shiftKey)
shiftMessage("ifmmp", shiftKey * -1)






/*
var alpha = 'abcdefghijklmnopqrstuvwxyz'.split("")
var text = "Hello How Are you ?????".toLowerCase()
var shiftKey = 2;
var Moving = function (message, shiftKey) {
    for (var i = 0; i < message.length; i++) {
        if (alpha.indexOf(message[i]) !== -1) {
            var indexInAlpha = alpha.indexOf(message[i])
            console.log(indexInAlpha)
            var indexInShift = indexInAlpha + shiftKey
            console.log(indexInShift)
        }
    }
}
Moving(text, shiftKey)
*/
