var comments = [];
var inputCmn = document.getElementById("input-cmn");
var btnCmn = document.getElementById("btn-cmn");

var showComments = function () {
    document.getElementById("output-cmn").innerHTML = "";
    for (var i = 0; i < comments.length; i++) {
        var li = document.createElement("li");
        var text = document.createTextNode(comments[i].text);
        var p = document.createElement("p");
        var numberOfLikes = document.createTextNode(comments[i].likes);
        p.appendChild(numberOfLikes);
        var btn = document.createElement("button");
        btn.setAttribute("id" , i);
        btn.innerHTML = "like";
        btn.addEventListener("click" , function(){
            comments[this.id].likes += 1;
            showComments()
        })
        li.appendChild(text);
        li.appendChild(p)
        li.appendChild(btn)
        document.getElementById("output-cmn").appendChild(li);
    }
}

btnCmn.addEventListener("click", function () {
    var newComment = {
        text: inputCmn.value,
        likes : 0
    }
    comments.push(newComment)
    showComments()


})
