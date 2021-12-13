// Variables


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

    $("#f_botoninicio").click(function () {
        $("#menu").toggle();
    });

});
//Toggle


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