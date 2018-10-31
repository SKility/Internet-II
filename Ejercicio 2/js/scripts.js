

//Cuando el button saea type: submit, se debe eescribir dentro de la funcion del jquery lo siguiente para evitar //
//que el browser se refresque//
//function(event){event.preventDefault();...}//

$("#but").on("click", function (event) {
        event.preventDefault();
        var peliId = $("#peliculaid").val();
        var titulo = $("#title").val();
        var descripcion = $("#description").val();
        var casting = $("#cast").val();
        var genero = $("#gender").val();
        var imagen = $("#image").val();
        var puntaje = $("#score").val();

        //Con esta funcion se define sendData(params)//
        sendData({
                title: titulo,
                description: descripcion,
                cast: casting,
                gender: genero,
                poster: imagen,
                score: puntaje,


        }).then(success, onError)

        //Cuando la funcion se realiza con exito se activa la funcion success//
        function success(response) {
                $(".hide").append(
                        "<p>" + response.msg + "</p>")
                $(".hide").show()
        }
        function onError(err) {

        }

        console.log(peliId, titulo, descripcion, casting, imagen, puntaje)

})

function sendData(params) {
        return $.ajax({
                method: "POST",
                url: "http://192.168.1.115:3000/peliculas",
                data: params
        });
}

function getAllFilms() {
        $.ajax({
                url: "http://192.168.1.115:3000/peliculas",
                method: "GET"
        }).then(exito, fallo)

        function exito(response) {
                listId.setItems(response);
                listId.listAll()
        }
        function fallo(err) {
                console.log("Error wachin");
        }
}      

function getById(id) {
        return $.ajax({
                url: "http://192.168.1.115:3000/peliculas/" + id,
                method: "GET"
       })
}

function getAllFilms() {
        $.ajax({
                url: "http://192.168.1.115:3000/peliculas",
                method: "GET"
        }).then(exito, fallo)
}

function exito(response) {
        listId.setItems(response);
        listId.listAll()
}
function fallo(err) {
        console.log("Error wachin");
}

var listId = {
        items: [],
        setItems(data) {
                listId.items = data;
        },
        listAll: function () {
                for (var i = 0; this.items.length > i; i++) {
                        $(".Contenedor").append(this.assamble(listId.items[i]));
                }

                $(".Pelicula").on("click", function () {
                        var id = $(this).data('id')
                        
                        for(var i = 0; i < listId.items.length; i++){
                                if(listId.items[i].id == id){
                                        $(".detallepeli").html(listId.singleAssamble(listId.items[i]));
                                        clear();
                                }
                        }
                })
        },

        assamble: function (items) {
                return '<li><div class="Pelicula" data-id=' + items.id + '>'
                        + '<img class="Poster" src="' + items.poster + '"></img>'
                        + '<p class="nombre">' + items.title + '</p>'
                        + '<p class="desc">' + items.description + '</p>'
                        + '<p class="gender">' + items.gender + '</p>'
                        + '<p class="p1">' + items.score + '</p>'
                + '</div></li>'
        },

        singleAssamble: function(items){
                return '<ul class="Single">'
                        +'<li> <h3 class="title">'+ items.title +'</p></li>'
                        +'<li> <img class="PosterSingle" src="'+ items.poster +'"></li>'
                        +'<li> <p>'+ items.description +'</li>'
                        +'<li> <p>'+ items.cast +'</li>'
                        +'<li> <p>'+ items.gender +'</li>'
                        +'<li> <p> Puntaje: <span class="Puntaje">'+ items.score +'</span></li>'
                        +'<button class="Volver" onClick=clearSingle()>Volver</button>'
                +'</ul>'
        },

};

function getPelis(id) {
        return $.ajax({
                url: "http://192.168.1.115:3000/peliculas/" + id,
                method: "GET"
       })
}


$(function () {
        listId.items = peliculones;
        listId.listAll();
})

function clear(){
        $(".Contenedor").html("");
};

function clearSingle(){
        $(".detallepeli").html("");
        listId.listAll();
}