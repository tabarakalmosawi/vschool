var change = document.querySelector("#box-1")
change.addEventListener("click", function () {
    change.style.backgroundColor = "red";
    change.style.borderRadius = "40%";
})
change.addEventListener("mouseenter", function () {
    change.style.backgroundColor = "yellow";
    change.style.borderRadius = "20%";
})
change.addEventListener("mouseleave", function () {
    change.style.backgroundColor = "hotpink";
    change.style.borderRadius = "44%";

})
window.addEventListener("scroll", function () {
    change.style.backgroundColor = "black";
})
window.addEventListener("keyup", function (event) {
    console.log(event.which)
    if (event.which === 82) {
        change.style.backgroundColor = "red";

    }
})
window.addEventListener("keydown", function () {
    change.style.backgroundColor = "gray";
})
