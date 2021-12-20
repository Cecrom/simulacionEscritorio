// Variables

var cancion1 = new cancion("Dile que la quiero", "David Civera", "2:57", "recursos/cancion1.mp3");
var cancion2 = new cancion("Carolina", "M-Clan", "4:23", "recursos/cancion2.mp3");
var cancion3 = new cancion("Link Park", "Numb", "3:06", "recursos/cancion3.mp3");
var canciones = [cancion1, cancion2, cancion3];
const bontonApagado = document.getElementById("f_botonapagado");
const sonidoApagado = new Audio("../recursos/sonidoapagado.mp3");

// Jquery

$(document).ready(function () {

    // Abrir ventanas

    $("#b_juego > img").on("dblclick", function () {
        if ($("#juego").is(":hidden")) {
            $("#juego").show();
        }
    })

    $("#b_internet  > img").on("dblclick", function () {
        if ($("#internet").is(":hidden")) {
            $("#internet").show();
        }
    })
    $("#b_archivos  > img").on("dblclick", function () {
        if ($("#archivos").is(":hidden")) {
            $("#archivos").css("display", "grid");
        }
    })
    $("#b_papelera  > img").on("dblclick", function () {
        if ($("#papelera").is(":hidden")) {
            $("#papelera").show();
        }
    })

    $("#inicio > ul > li:first-child").on("click", function () {
        if ($("#reproductor").is(":hidden")) {
            $("#reproductor").css("display", "grid");
        }
    })

    $("#inicio > ul > li:last-child").on("click", function () {
        if ($("#blocnotas").is(":hidden")) {
            $("#blocnotas").show();
        }
    })

    // Cerrar ventanas

    $(".cerrar").click(function () {
        $(this).parent().parent().hide();
    })

    // Abrir y cerrar menú de inicio

    $("#f_botoninicio").click(function () {
        $("#menu").toggle();
    });

    $(document).click(function (e) {
        if (!$(e.target).is("#menu") && !$(e.target).is("#f_botoninicio") && !$(e.target).is("#f_botoninicio > img") && !$(e.target).is("#f_botoninicio > p")) {
            $("#menu").hide();
        }
    })

    //Añadir objetos de musica

    $("#listadomusica").ready(function () {
        for (var i = 0; i < canciones.length; i++) {
            $("#listadomusica > ul").append("<li><p id = 'cancion" + [i + 1] + "'>" + canciones[i].nombre + " - " + canciones[i].artista + " " + canciones[i].duracion + "</p></li>");
        }
        $("#cancion1").click(function () {
            $(".controles").empty();
            $(".controles").append("<audio controls><source src='"+cancion1.recurso+"'type='audio/mpeg'></audio>");
        })
        $("#cancion2").click(function () {
            $(".controles").empty();
            $(".controles").append("<audio controls><source src='"+cancion2.recurso+"'type='audio/mpeg'></audio>");
        })
        $("#cancion3").click(function () {
            $(".controles").empty();
            $(".controles").append("<audio controls><source src='"+cancion3.recurso+"'type='audio/mpeg'></audio>");
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

// Añadir sonido al apagar

bontonApagado.addEventListener("click", function () {
    sonidoApagado.play();
    setTimeout(() => {
        location.href = "https://www.google.es";
    }, 3000);

})