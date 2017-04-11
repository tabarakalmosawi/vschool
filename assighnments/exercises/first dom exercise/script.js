
function printName() {
    var input=document.getElementById("add");
    var txtNode = document.createTextNode(input.value);
    document.getElementById("myName").appendChild(txtNode);

}