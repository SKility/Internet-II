

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
                listElements.setItems(response);
                listElements.listAll()
        }
        function fallo(err) {
                console.log("Error wachin");
        }

        var listElements = {
                items: [],
                setItems(data) {
                        listElements.items = data;
                },
                listAll: function () {
                        for (var i = 0; listElements.items.length > i; i++) {
                                console.log("for");
                                $(".traer").append(this.assamble(this.items[i]));
                        };
                },

                assamble: function (items) {
                        return '<div class="Item">'
                                + '<h1>Peliculas</h1>'
                                + '<p>' + items.title + '</p>'
                                + '<p>' + items.description + '</p>'
                                + '<p>' + items.cast + '</p>'
                                + '<p>' + items.gender + '</p>'
                                + '<p>' + items.poster + '</p>'
                                + '<p>' + items.score + '</p>'
                                + '</div>'
                }
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
                for (var i = 0; listId.items.length > i; i++) {
                        console.log("for");
                        $(".traer").append(this.assamble(listId.items[i]));
                }
                $(".detallepeli").on("click", function () {
                        var id = $(this).attr('data-id')
                        //Esto aplica un atributo al objeto this($("detallepeli"))//
                        console.log(id);
                        getById(id).then(function (exito) {
                                console.log(exito)
                        $("traer").html(singleassamble(exito))
                        })
                })
        },

        assamble: function (items) {
                return '<div class="detallepeli" data-id="' + items._id + '">'
                        + '<img class="" src="' + items.poster + '"></img>'
                        + '<p class="nombre">' + items.title + '</p>'
                        + '<p class="desc"></p>'
                        + '<p class="p1">1/10</p>'
                '</div>'
        },

        singleAssamble: function(){
                return '<ul class="datos">'
                +'<li class="titulo">'+ items.title +'</li>'
                +'<li class="imagen">'+ items.poster +'</li>'
                +'<li class="desc">'+ items.description +'</li>'
                +'<li class="casting">'+ items.cast +'</li>'
                +'<li class="genero">'+ items.gender +'</li>'
                +'<li class="puntaje">'+ items.score +'</li>'
                +'</ul>'
        },

};


$(function () {
        getAllFilms();
})
/*
        function cleartable(){
                $("#traer").html(" ");
             }; 
*/