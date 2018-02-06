function loadImages(){
    for (var i = 1; i <= 151; i++){
        var pokeImg = "<img src='https://pokeapi.co/media/img/" + i + ".png' data-pokenum=" + i + " '>";
        $('.container').append(pokeImg)
    }
}

$(document).ready(function(){
    loadImages();

    function htmlBuilder(data){
        var htmlStr =  "<h2>" + data["name"].charAt(0).toUpperCase() + data["name"].substr(1).toLowerCase() + "</h2>"

        htmlStr += "<img src='https://pokeapi.co/media/img/" + data["id"] + ".png'>"
        // data["name"]
        htmlStr += "<h3>Types</h3>"
        for (var i = 0; i < data["types"].length; i++){
            htmlStr += "<p>" + data["types"][i].type.name.charAt(0).toUpperCase() + data["types"][i].type.name.substr(1).toLowerCase() + "</p>" //data.types[i]
        }

        htmlStr += "<h3>Abilities</h3>"
        for (var i = 0; i < data["abilities"].length; i++){
            htmlStr += "<p>" + data["abilities"][i].ability.name.charAt(0).toUpperCase() + data["abilities"][i].ability.name.substr(1).toLowerCase() + "</p>"
        }

        htmlStr += "<h3>Stats</h3>"
        for (var i = 0; i < data["stats"].length; i++){
            htmlStr += "<p>" + data["stats"][i].stat.name.charAt(0).toUpperCase() + data["stats"][i].stat.name.substr(1).toLowerCase() + " " + data["stats"][i].base_stat + "</p>"
        }

        htmlStr += "<h3>Size</h3>"
        htmlStr += "<p>" + "Height" + " " + data["height"] + "</p>"
        htmlStr += "<p>" + "Weight" + " " + data["weight"] + "</p>"

        $('.pokeInfo').html(htmlStr)
    }

    $('img').click(function(){
        var pokeNum = $(this).data("pokenum");
        var url = "https://pokeapi.co/api/v2/pokemon/" + pokeNum + "/";
        $.get(url,function(res){ //takes in 2 parameters- url, and then takes in callback function that handles response from server//
            htmlBuilder(res);
        }, "json");
    })
})
