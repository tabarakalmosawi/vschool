$("#btn1").click(function () {
    var num = document.getElementById("myNum2").value;
    if (num == '') num = 100;
    document.getElementById("myNum2").value = parseInt(num, 10) - 1;

    showPoints();
})

$("#btn2").click(function () {
    var num = document.getElementById("myNum1").value;
    if (num == '') num = 100;
    document.getElementById("myNum1").value = parseInt(num, 10) - 1;
})
