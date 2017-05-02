$.get("http://pokeapi.co/api/v1/pokedex/1/", function (data) {
    console.log(data)
    $("#name").append(data.pokemon[0].name)
    for (var i = 0; i < data.pokemon.length; i++) {
        $("#name").append("<ul> <a href=https://www.google.com.lb/search?q="+data.pokemon[i].name+"&oq=mohammed&aqs=chrome..69i57j69i61l3j69i59l2.1697j0j7&sourceid=chrome&ie=UTF-8>" + data.pokemon[i].name + "<a/></ul")
    }
})
