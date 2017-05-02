var data = [];
$(window).keypress(function (e) {
    if (e.keyCode === 13) {
        var input = $("#comments").val()
        $("#comments").val("")
        data.push(input)
        information();

    }
})
var information = function () {
    $("#output").html("")
    for (var i = 0; i < data.length; i++) {
        $("#output").append(`<p id=${i}><button id="remove"> x </button>${data[i]} </p>`);
    }
}
$("#btn").click(function () {
    var input = $("#comments").val();
    $("#comments").val("")

    data.push(input)
    information();
})
$(document).on("click" , "#remove" , function(){
    var id = $(this).parent("p").attr("id");
    data.splice(id, 1);
    information()
})
