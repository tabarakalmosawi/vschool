$("#btn").click(function(){
    var text = $("#items").val();
    $("#todoList").append(`
<li>
${text}
</li>
`);
});