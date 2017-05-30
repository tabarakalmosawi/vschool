var fibs = function () {
    var arr = [0, 1];
    for (var i = 2; i < 100; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    console.log(arr);
};
fibs();
