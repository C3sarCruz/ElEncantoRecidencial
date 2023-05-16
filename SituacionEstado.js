$(document).ready(function () {
    //Función del botón agregar representante
    $("#btnRegistrar").click(function () {
        $("#modalRegistrarLiga").modal("show");
    });

});



//-------------------------------------------FUNCIONES ESTADO DE SITUACION---------------------------------
    function muestra_ActCir(id) {
        if (document.getElementById) { //se obtiene el id
            var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
            el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
        }
    }
    window.onload = function () {/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
        muestra_ActCir('contenidoAC');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}

function cerrarAC() {
    document.getElementById("contenidoAC").style.display = "none";
}


    function muestra_PasCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_PasCir('contenidoPC');
}

function cerrarPC() {
    document.getElementById("contenidoPC").style.display = "none";
}



    function muestra_ActNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_ActNoCir('contenidoANC');
    }

function cerrarANC() {
    document.getElementById("contenidoANC").style.display = "none";
}




    function muestra_PasNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_PasNoCir('contenidoPNC');
}


function cerrarPNC() {
    document.getElementById("contenidoPNC").style.display = "none";
}


    function muestra_oActNoCir(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
            el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
    window.onload = function () {
        muestra_oActNoCir('contenidoOANC');
}


function cerrarOANC() {
    document.getElementById("contenidoOANC").style.display = "none";
}


        function muestra_P(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_P('contenidoP');
}

function cerrarP() {
    document.getElementById("contenidoP").style.display = "none";
}
//----------------------------------------------------FIN ESTADO DE SITUACION------------------------------




//---------------------------------------------CONCILIACION-----------------------------------------

function muestra_CB(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CB('contenidoCB');
}

function cerrarCB() {
    document.getElementById("contenidoCB").style.display = "none";
}
//----------------------------------------FIN CONCILIACION-----------------------------------------












//-----------------------------------------------INVERSION----------------------------------------

function muestra_CBB1(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CBB1('contenidoCBB1');
}

function cerrarCBB1() {
    document.getElementById("contenidoCBB1").style.display = "none";
}


function muestra_CBB2(id) {
        if (document.getElementById) {
            var el = document.getElementById(id);
        el.style.display = (el.style.display == 'none') ? 'block' : 'none';
        }
    }
        window.onload = function () {
            muestra_CBB2('contenidoCBB2');
}

function cerrarCBB2() {
    document.getElementById("contenidoCBB2").style.display = "none";
}
 //---------------------------------------FIN INVERSION----------------------------------------------------










