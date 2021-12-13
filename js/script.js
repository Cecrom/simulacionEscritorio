// Variables

var cancion1 = new cancion("Dile que la quiero", "David Civera", "2:57", "../recursos/cancion1.mp3/");
var cancion2 = new cancion("Carolina", "M-Clan", "4:23", "../recursos/cancion2.mp3/");
var cancion3 = new cancion("Link Park", "Numb", "3:06", "../recursos/cancion3.mp3/");
var canciones = [cancion1, cancion2, cancion3];

// Jquery

$(document).ready(function () {
    $("#b_juego > img").on("click", function () {
        if ($("#juego").is(":hidden")) {
            $("#juego").show();
        }
    })
    $("#juego > nav > img").click(function () {
        $("#juego").hide();
    })
    $("#b_internet  > img").on("click", function () {
        if ($("#internet").is(":hidden")) {
            $("#internet").show();
        }
    })
    $("#internet > nav > img").click(function () {
        $("#internet").hide();
    })

    $("#inicio > ul > li:first-child").on("click", function () {
        if ($("#reproductor").is(":hidden")) {
            $("#reproductor").show();
        }
    })
    $("#reproductor > nav > img").click(function () {
        $("#reproductor").hide();
    })

    $("#f_botoninicio").click(function () {
        $("#menu").toggle();
    });

    $("#listadomusica").ready(function () {
        for (var i = 0; i < canciones.length; i++) {
            $("#listadomusica > ul").append("<li><p id = 'cancion" + [i + 1] + "'>" + canciones[i].nombre + " " + canciones[i].artista + " " + canciones[i].duracion + "</p></li>");
        }
        $("#cancion1").click(function () {
            $(".controles").empty();
            $(".controles").append("<audio controls><source src='../recursos/cancion1.mp3'type='audio/mpeg'></audio>");
        })
        $("#cancion2").click(function () {
            $(".controles").empty();
            $(".controles").append("<audio controls><source src='../recursos/cancion2.mp3'type='audio/mpeg'></audio>");
        })
        $("#cancion3").click(function () {
            $(".controles").empty();
            $(".controles").append("<audio controls><source src='../recursos/cancion3.mp3'type='audio/mpeg'></audio>");
        })
    })


});


// Aplicación

// Función para que la hora se vaya actualizando cada minuto

(function () {
    function ajustarTiempo(i) {
        return (i < 10) ? "0" + i : i;
    }

    function hora() {
        let hoy = new Date(),
            h = ajustarTiempo(hoy.getHours()),
            m = ajustarTiempo(hoy.getMinutes());
        s = ajustarTiempo(hoy.getSeconds());
        document.getElementById('f_fecha').innerHTML = "<p>" + h + ":" + m + "</p>";
        t = setTimeout(function () {
            hora()
        }, 30000); // Está puesto para cada 30 segundos, para asegurar que se cambia cada minuto
    }
    hora();
})();

// Objeto para lista de canciones

function cancion(nombre, artista, duracion, recurso) {
    this.nombre = nombre;
    this.artista = artista;
    this.duracion = duracion;
    this.recurso = recurso;
}