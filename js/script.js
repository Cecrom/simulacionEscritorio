// Variables


// Jquery

$(document).ready(function () { });

// Aplicación

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
        }, 30000);
    }
    hora();
})();