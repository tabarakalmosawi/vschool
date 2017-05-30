/*var formatMoney = function (num) {
    var num = num.toString().split("")
    if (num[1] === undefined) {
        return "$" +"0,"+ num.join("") 
    } else if (num[2] === undefined) {
        return "$" + "0." + num[0] + num[1]
    } else if (num[3] === undefined) {
        return "$" + num[0] + "." + +num[1] + num[2]
    } else if (num[4] === undefined) {
        return "$" + num[0] + "," + num[1] + num[2] + num[3]
    } else if (num[5] === undefined) {
        return "$" + num[0] + "," + num[1] + num[2] + num[3] + "." + num[4]
    } else if (num[6] === undefined) {
        return "$" + num[0] + "," + num[1] + num[2] + num[3] + "." + num[4] + num[5]
    } else if (num[7] === undefined) {
        return "$" + num[0] + "," + num[1] + num[2] + num[3] + "," + num[4] + num[5] + num[6]
    } else if (num[8] === undefined) {
        return "$" + num[0] + "," + num[1] + num[2] + num[3] + "," + num[4] + num[5] + num[6] + "." + num[7]
    } else if (num[9] === undefined) {
        return "$" + num[0] + "," + num[1] + num[2] + num[3] + "," + num[4] + num[5] + num[6] + "." + num[7] + num[8]
    } else return "$" + num.join("")
}
console.log(formatMoney(4643432))*/

/*var formatMoney = function (num) {
    
  var str = num.toString().split("")
  for (var i=0 ; i<str.length ; i++){
    
  }
}
console.log(formatMoney(4643432))*/

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return "$" + x1 + x2;
}
console.log(addCommas(1224324))