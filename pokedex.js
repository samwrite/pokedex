$(document).ready(function(){
    for(var i = 1; i <= 151; i++){
        $("#pokemon").append("<img id='" + i + "' src='http://pokeapi.co/media/img/" + i + ".png'>");
    }

    $("img").click(function(){
        var j = $(this).attr("id");
        var entry = "http://pokeapi.co/api/v1/pokemon/" + j + "/";
        $.get(entry, function(res) {
            var html_str = "";
            html_str += "<h3>" + res.name + "<h3>";
            html_str += "<img src='http://pokeapi.co/media/img/" + j + ".png'>"
            html_str += "<h4>Types</h4>";
            html_str += "<ul>"; 
            for(var i = 0; i < res.types.length; i++) {
                html_str += "<li>" + res.types[i].name + "</li>";
            }
            html_str += "</ul>";
            html_str += "<h4>Height</h4>" + res.height;
            html_str += "<h4>Weight</h4>" + res.weight;
            $("#pokedex").html(html_str);
        }, "json");
    })
})