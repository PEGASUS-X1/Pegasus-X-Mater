

function Guardar() {
    var nombre = $('#nombre').val();
    var numero = $('#numero').val();
    var seleccion = $('#Area').val();

    if (nombre.trim() !== '') {
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbyfzoGwdkaRCtFTWmmL2_BCbckCO-rOd0ruQipJc0vXUpehZkXs1S0L1tlyFq6qg9WIpw/exec',
            method: 'POST',
            data: {
                nombre: nombre,
                numero: numero,
                seleccion: seleccion,
            },
            success: function(responseLibro) {
                alert('Agregado con éxito');
                mostrar();
            },
            error: function(error) {
                console.error('Error al agregar: ', error);
            }
        });

        // Limpiar los campos después de agregar el comentario
        $('#nombre').val('');
        $('#numero').val('');
    }
     ocultarElemento()
}

function mostrar() {
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbyfzoGwdkaRCtFTWmmL2_BCbckCO-rOd0ruQipJc0vXUpehZkXs1S0L1tlyFq6qg9WIpw/exec',
        method: 'GET',
        success: function(responseLibro) {
            var CajadeLibros = $('#CajadeLibros');
            CajadeLibros.empty();

            let cartaIdCounter = 1;

            responseLibro.forEach(function(Comentario) {

                const cartaId = `${cartaIdCounter}.-`;
                cartaIdCounter++;

                const LibroDiref = document.createElement('div');
                LibroDiref.className = 'nombre buscado';

                const numero1 = document.createElement('span');
                numero1.className = 'numero';
                numero1.textContent = cartaId;

                const Area1 = document.createElement('span');
                Area1.className = 'Area';
                Area1.textContent = Comentario.seleccion + ": ";
                Area1.id = "Area";

                const Nombre1 = document.createElement('span');
                Nombre1.className = 'Nombre1';
                Nombre1.textContent = Comentario.nombre + " ";

                const cel1 = document.createElement('span');
                cel1.className = 'cel';
                cel1.textContent = Comentario.numero;

                LibroDiref.append(numero1);
                LibroDiref.append(Area1);
                LibroDiref.append(Nombre1);
                LibroDiref.append(cel1);
                CajadeLibros.append(LibroDiref);
            });
        },
        error: function(error) {
            console.error('Error', error);
        }
    });
}

$(document).ready(function() {
    mostrar();
});

// // {/* <button id="botonMostrar" onclick="mostrarElemento()">Mostrar Elemento</button> */}

function ocultarElemento() {
    const audioElement = document.getElementById("miMusica");
    audioElement.play();
    const fechaActual = new Date();
    const fechaReaparicion = new Date();
    fechaReaparicion.setDate(fechaActual.getDate() + 100000000000000);
    const fechaReaparicionUTC = fechaReaparicion.toUTCString();
    
    document.cookie = `ocultarElemento=true; expires=${fechaReaparicionUTC}; path=/`;

    setTimeout(() => {
        window.location.href = "/home.html"; 
    }, 15000);

    document.getElementById("elementoParaOcultar").style.display = "none";
    document.getElementById("visible").style.display = "block";
    document.getElementById("botonOcultar").disabled = true;
    document.getElementById("botonMostrar").disabled = false;
}

function mostrarElemento() {
    // Eliminar la cookie
    document.cookie = "ocultarElemento=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Mostrar el elemento oculto y ocultar el elemento visible
    document.getElementById("elementoParaOcultar").style.display = "block";
    document.getElementById("visible").style.display = "none";

    // Habilitar el botón de ocultar y deshabilitar el botón de mostrar
    document.getElementById("botonOcultar").disabled = false;
    document.getElementById("botonMostrar").disabled = true;
}

// Verificar si la cookie existe al cargar la página
window.onload = function () {
    if (document.cookie.includes("ocultarElemento=true")) {
        window.location.href = "/home.html"; 
        ocultarElemento(); // Llamar a la función de ocultar directamente si la cookie existe
    }
};

function actualizarEnlace() {
    var seleccion = document.getElementById("Area");
    var enlace = document.getElementById("Area_Selec");

    switch (seleccion.value) {
        case "PRE_CALCULO":
            enlace.textContent = "UNIRSE A PRE CALCULO";
            enlace.href = "https://chat.whatsapp.com/H6yYH6AQlaW366Hi2sm0wq";
            break;
        case "SEMINARIO":
            enlace.textContent = "UNIRSE A SEMINARIO";
            enlace.href = "https://chat.whatsapp.com/GKifQfGtq7qBmLree0rHXb";
            break;
        case "METODOS":
            enlace.textContent = "UNIRSE A METODOS";
            enlace.href = "https://chat.whatsapp.com/JMLXKX8S3h936dYQaukv6K";
            break;
        case "ANTROPOLOGIA":
            enlace.textContent = "UNIRSE A ANTROPOLOGIA";
            enlace.href = "https://chat.whatsapp.com/K4zZntgfwjwJmLN3xnU1jQ";
            break;
        default:
            enlace.href = "";
            break;
    }
}