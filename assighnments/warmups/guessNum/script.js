/*
var randomInt = function(min , max){
    return Math.floor(Math.random() * (max - min +1) + min);
};

var num = randomInt(1 , 10)
console.log(num)
var btn = document.getElementById("btn").addEventListener("click" , function(){
   
    var input = document.getElementById("input").value
    if (num ==input){
        alert("you are right");
    }else {
      alert("you are wrong");
    } 
})*/
var randomInt = function(min , max){
    return Math.floor(Math.random() * (max - min +1) + min);
};

var num = randomInt(1 , 10)
console.log(num)

$("#btn").click(function(){
    var input =$("#in").val();
    if (num == input){
        alert ("you are right");
    }else {
        alert ("you are wrong")
    }
})