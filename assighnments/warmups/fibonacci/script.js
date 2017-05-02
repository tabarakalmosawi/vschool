/*fibonacci [ 0 , 1 ]
write a function
for loop until 100 
return */

var fibonacci = function (nums) {
    var fibNum = [0, 1]
    for (var i = 2; i < nums; i++) {
        var num = fibNum[i - 2] + fibNum[i - 1]
        fibNum.push(num)
    }
    return fibNum
}
var result = fibonacci(7);
console.log(result);
console.log(result.length);


/*function fib(n) {
    if(n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
fib(3);*/


/*function fibNaive(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibNaive(n - 2) + fibNaive(n - 1);
  }
}*/
