var goomba = document.getElementById('goomba-price');
var total = document.getElementById("total-button");
var bobombo = document.getElementById("bobomba-price")
var cheep = document.getElementById("cheep-price")

total.addEventListener("click", function () {
    var goombaNum = goomba.value;
    var goombaAmount = document.getElementById("goomba-amount").value = goombaNum * 5;
    var bobombaNum = bobombo.value;
    var bobombaAmount = document.getElementById("bobomba-amount").value = bobombaNum * 11;
    var cheepNum = cheep.value;
    var cheepAmount = document.getElementById("cheep-amount").value = cheepNum * 7;
   
})
