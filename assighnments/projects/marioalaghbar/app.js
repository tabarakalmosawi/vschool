$("#total-button").on("click", function () {
    var goombaAmount = $("#goomba-amount").val();
    var goombaTotal = goombaAmount * 5;
    $("#goomba-total").val(goombaTotal);

    var cheepAmount = $("#cheep-amount").val();
    var cheepTotal = cheepAmount * 7;
    $("#cheep-total").val(cheepTotal);

    var bobomboAmount = $("#goomba-amount").val();
    var bobomboTotal = bobomboAmount * 11
    $("#bobomba-amount").val(bobomboTotal);

    var all = goombaTotal + cheepTotal + bobomboTotal
    $("#total").val(all);
})
$("#goomba-amount").click(function () {
    $("#goomba-amount").css("background", "red")
})
$("#cheep-amount").click(function () {
    $("#cheep-amount").css("background", "red")
})
$("#bobomba-amount").click(function () {
    $("#bobomba-amount").css("background", "red")
})


$("#goomba-total").click(function () {
    $("#goomba-total").css("background", "red")
})
$("#cheep-total").click(function () {
    $("#cheep-total").css("background", "red")
})
$("#bobomba-total").click(function () {
    $("#bobomba-total").css("background", "red")
})
$("#total").click(function () {
    $("#total").css("background", "red")
})
var totalSound = new Audio("Mario-coin-sound.mp3");
$("#total-button").click(function () {
    totalSound.play()

})
$("#night").click(function () {
    $("body").toggleClass("viewImg")

})



//var goomba = document.getElementById('goomba-price');
//var total = document.getElementById("total-button");
//var bobombo = document.getElementById("bobomba-price")
//var cheep = document.getElementById("cheep-price")
//var all = document.getElementById("total")

/*
total.addEventListener("click", function () {
    var goombaAmount = document.getElementById("goomba-amount").value = goombaNum * 5;
    var bobombaNum = bobombo.value;
    var bobombaAmount = document.getElementById("bobomba-amount").value = bobombaNum * 11;
    var cheepNum = cheep.value;
    var cheepAmount = document.getElementById("cheep-amount").value = cheepNum * 7;
    all.value = goombaAmount + bobombaAmount + cheepAmount
})
*/





//total.addEventListener("click", function () {
//    var goombaNum = goomba.value;
//    var goombaAmount = document.getElementById("goomba-amount").value = goombaNum * 5;
//    var bobombaNum = bobombo.value;
//    var bobombaAmount = document.getElementById("bobomba-amount").value = bobombaNum * 11;
//    var cheepNum = cheep.value;
//    var cheepAmount = document.getElementById("cheep-amount").value = cheepNum * 7;
//    all.value = goombaAmount + bobombaAmount + cheepAmount
//})
