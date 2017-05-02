/*var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var jsonData = xhr.responseText
        var data = JSON.parse(jsonData);
        console.log(data);
        document.getElementById("demo1").innerHTML = "JSON result: " + data.hair_color;
        document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
        spaceshipurl = data.starships[0];
        console.log(spaceshipurl)
    }
}
xhr.open("GET", "http://swapi.co/api/people/1/", true);
xhr.send();


$.get("" , )*/

$.get('http://swapi.co/api/people/1/', function (data) {
    $('#name').append('name: ' + data.name)
    $('#haircolor').append('haircolor: ' + data.hair_color)
})
