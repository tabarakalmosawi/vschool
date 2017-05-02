var showList = function () {
    document.getElementById("output").innerHTML = ""

    for (var i = 0; i < result.length; i++) {

        var listItems = document.createElement("li");
        var btn = document.createElement("button");
        btn.setAttribute("class", "btn");
        btn.setAttribute("id", i);
        btn.innerHTML = "x";
        var listTexts = document.createTextNode(result[i]);
        listItems.appendChild(btn);
        listItems.appendChild(listTexts);
        var items = document.getElementById("items");
        document.getElementById("output").appendChild(listItems);
        document.getElementById("items").value = "";
        btn.addEventListener("click", function () {
            result.splice(this.id, 1);
            localStorage.setItem("items", result);
            showList();
        });
    }
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    result.push(items.value);
    localStorage.setItem("items", result);
    showList();

});

if (localStorage.getItem("items")) {
    var result = localStorage.getItem("items").split(",");
    showList();
} else {
    var result = [];
}
