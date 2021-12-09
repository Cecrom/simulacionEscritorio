// Variables


// Jquery

$(document).ready(function () { 
    /*$("#f_botoninicio").click(function(){
        $("#menu").hover(function(){
            $(this).children('div').stop();
            $(this).children('div').slideDown();
        }), function(){
            $(this).children('div').stop();
            $(this).children('div').slideUp();
        }
    })*//*JQuery del menu*/

   

});

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