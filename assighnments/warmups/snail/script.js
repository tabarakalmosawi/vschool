var array = [[1, 2, 3],
            [6, 7, 8],
             [10, 11, 12],
            ]

var one = array[0];
var two = array[1].pop();
var three = array[2].pop();
var four = array[2].slice(1, 2);
var five = array[2].slice(0, 1);
var six = array[1].slice(0, 2);
var newArr = one.concat(two, three, four, five, six)
console.log(newArr)

/*
function SnailSort(arr) {
    var result = [];

    while (arr.length > 0) {
        result = result.concat.apply(result, arr.splice(0, 1));
        for (var i = 0; i <= arr.length - 1; i++) {
            result = result.concat(arr[i].splice(arr.length));
        }
        var temp = [].concat.apply([], arr.splice(arr.length - 1)).reverse();
        result = result.concat.apply(result, temp);
        for (var i = arr.length - 1; i >= 0; i--) {
            result = result.concat(arr[i].splice(0, 1));
        }
    }
    return result;
}
array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
array2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
console.log(SnailSort(array1));
console.log(SnailSort(array2));

*/
