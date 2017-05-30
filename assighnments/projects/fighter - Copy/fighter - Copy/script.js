/*var clicks=99
var btn = document.getElementById("btn1")
    var btn = addEventListener("click" ,function() {
        clicks -=1
  document.getElementById("clicks2").innerHTML = clicks;
})
    var button = document.getElementById("btn2")
    var button = addEventListener("click" , function(){
        document.getElementById("clicks1").innerHTML = clicks2
    })*/
var clicks = 99;
$("#btn1").click(function () {
	var clicks2 = $("#clicks2").html(clicks)
	clicks -= 1
})
var click = 99;
$("#btn2").click(function () {
	var clicks1 = $("#clicks1").html(click)
	click -= 1
})
