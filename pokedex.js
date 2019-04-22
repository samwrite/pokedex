$(document).ready(function(){
    for(var i = 1; i <= 151; i++){
        $("#pokemon").append("<img id='" + i + "' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png'>");
    }

    $("img").click(function(){
        var j = $(this).attr("id");
        var entry = "http://pokeapi.co/api/v2/pokemon/" + j + "/";
        $.get(entry, function(res) {
            var html_str = "";
            html_str += "<h3>" + res.name + "<h3>";
            html_str += "<img src='http://www.pokestadium.com/sprites/black-white/animated/" + res.name + ".gif'>"
            // html_str += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + j + ".png'>"
            html_str += "<h4>Types</h4>";
            html_str += "<ul>"; 
            for(var i = 0; i < res.types.length; i++) {
                html_str += "<li>" + res.types[i].type.name + "</li>";
            }
            html_str += "</ul>";
            html_str += "<h4>Height</h4>" + res.height;
            html_str += "<h4>Weight</h4>" + res.weight;
            $("#pokedex").html(html_str);
        }, "json");
    })
})