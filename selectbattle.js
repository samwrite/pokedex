var counter = 0;
$(document).ready(function(){
    for(var i = 1; i <= 151; i++){
        $("#pokemon").append("<img id='" + i + "' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png'>");
    }

    //add team member
    $("#pokemon img").click(function(){
        var j = $(this).attr("id");
        if (counter < 6) {
            $("#team").append("<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + j + ".png'>");
            counter++;
        }
        else {
            alert("You already have a full team!");
        }
    })

    //random team members
    $("button[id='random']").click(function(){
        var team = "";
        for (var i = 0; i < 6; i++) {
            var rand = Math.floor(Math.random() * 151) + 1;
            team += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + rand + ".png'>";
        }
        counter = 6;
        $("#team").html(team);
    })

    $("button[id='reset']").click(function(){
        $("#team").html("");
        counter = 0;    
    })
})