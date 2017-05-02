var attemptCall = function (name, dontCall, call, sendText) {
    if (name.toLowerCase().split("a").length > 2){
        sendText(name)
    }
     else if (name.length % 2 != 0) {
        dontCall(name);

    } else if (name.length % 2 === 0) {
        call(name);

    }

}
var dontCallFunc = function (name) {
    console.log("dont call me " + name)
}
var callFunc = function (name) {
    console.log("call me babe " + name)
}
var dancing = function (name){
    console.log("sorry " + name + " I will not call you")
}

var names = ["Mohammed", "Ahmad", "Hasan", "Hossain", "Zainab", "Hawraa", "Fatima", "Roqaia", "Noor", "Huda"]

for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCallFunc, callFunc, dancing);
}
