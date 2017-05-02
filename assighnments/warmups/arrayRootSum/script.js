var arr= [1 , 2 , 2]
var squareAndsum = function(arr){
    sum = 0
    for (var i=0 ; i<arr.length ; i++){
        sum += arr[i] * arr[i]
    }
   return sum     
}
console.log(squareAndsum(arr))