var btn = document.querySelector("#btn-sub")
var outpet = document.querySelector("#output")
var counter = 0;
var handleClickMe = function (lessClicks, moreClicks) {
    if (counter < 5) {
        /*
                lessClicks();
        */
        setTimeout(lessClicks, 1000)
    } else {
        /*
               moreClicks();
        */
        setTimeout(moreClicks, 1000)

    }
}

var lessClicking = function () {
    outpet.innerHTML = " I'm clicking" + counter

}
var moreClicking = function () {
    outpet.innerHTML = "Stop clicking me " + counter;
}
btn.addEventListener("click", function () {
    counter++
    handleClickMe(lessClicking, moreClicking)
})
