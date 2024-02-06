
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
