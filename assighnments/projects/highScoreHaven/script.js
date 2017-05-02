var num = 1;

var trashTalk = function () {
    var text = ["you smell like a fish", "Man, you're like school on a Sunday ", "If I had a dollar for every brain you don't have, I'd have ONE dollar", "If I want your opinion, I'll give it to you."];
    var trash = Math.floor(Math.random() * text.length)
    return text[trash]
}

$(window).keypress(function (e) {
    if (e.keyCode == 13) {
        var name = $("#name").val();
        var game = $("#game").val();
        var date = $("#date").val();
        var score = $("#score").val();
        var checkbox = $("#checkbox").is(":checked");
        if (checkbox === true) {
            var text = trashTalk()
        } else {
            var text = ""
        }
        $("tbody").append(`
				<tr>
					<td class="text-center">${num}</td>
					<td class="text-center">${name}</td>
					<td class="text-center">${game}</td>
					<td class="text-center">${date}</td>
					<td class="text-center">${score}</td>
                    <td class="text-center">${text}</td>
				</tr>
`);
        $('#name').val("");
        $('#game').val("");
        $('#date').val("");
        $('#score').val("");

        num++
    };
});

$(".btn").click(function () {
    console.log("hellos")
    var name = $("#name").val();
    var game = $("#game").val();
    var date = $("#date").val();
    var score = $("#score").val();
    var checkbox = $("#checkbox").is(":checked");
    if (checkbox === true) {
        var text = trashTalk()
    } else {
        var text = ""
    }

    $("tbody").append(`
				<tr>
					<td class="text-center">${num}</td>
					<td class="text-center">${name}</td>
					<td class="text-center">${game}</td>
					<td class="text-center">${date}</td>
					<td class="text-center">${score}</td>
                    <td class="text-center">${text}</td>


				</tr>
`);
    $('#name').val("");
    $('#game').val("");
    $('#date').val("");
    $('#score').val("");

    num++
})
