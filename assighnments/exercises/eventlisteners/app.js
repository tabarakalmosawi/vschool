var add = document.getElementById("box-1")
var input = document.getElementById("input")
add.addEventListener("mouseenter", function () {
    input.innerHTML = "tabarak"
    //alert("I have been clicked")
});
add.addEventListener("mouseleave", function () {
    input.innerHTML = "aziz"
    //alert("I have been clicked")
})


add.addEventListener("click", function () {
    input.innerHTML = "jawad"
    //alert("I have been clicked")
})
