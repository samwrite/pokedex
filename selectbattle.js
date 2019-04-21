var counter = 0;
$(document).ready(function(){
    for(var i = 1; i <= 151; i++){
        $("#pokemon").append("<img id='" + i + "' src='https:" + i + ".gif'>");
    }

    //add team member
    $("#pokemon img").click(function(){
        var j = $(this).attr("id");
        if (counter < 6) {
            $("#team").append("<img src='http://pokeapi.co/media/img/" + j + ".png'>");
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
            team += "<img src='http://pokeapi.co/media/img/" + rand + ".png'>";
        }
        counter = 6;
        $("#team").html(team);
    })

    $("button[id='reset']").click(function(){
        $("#team").html("");
        counter = 0;    
    })
})