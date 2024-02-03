function GuardarLibro() {
    var Nombre_Del_Aportador = localStorage.getItem('nombre');
    var Img_Libro = "https://play-lh.googleusercontent.com/PzZQE76kE0nbJKfLuQPypAkyMoJQ10Zexg1cmOoBKQ1h9JV-CJ3ejM47sJHWtaew6jM";
    var pdf = $('#Multimedia').val();
    var Nombre_Libro = $('#Nombre_Libro').val();
    var Nombre_Autor = $('#Nombre_Autor').val();

    if (Img_Libro.trim() !== '') {
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbxCk7mT8dim7gasnxsxyeUu7KV8tUxVCFLbQYSBZD4nvVz45A-uj-PqsR_i3Wzq55BCzA/exec',
            method: 'POST',
            data: {
                Img_Libro: Img_Libro,
                Nombre_Del_Aportador: Nombre_Del_Aportador,
                pdf: pdf,
                Nombre_Libro: Nombre_Libro,
                Nombre_Autor: Nombre_Autor,
            },
            success: function(responseLibro) {
                alert('Agregado con éxito');
                mostrarLibros();
            },
            error: function(error) {
                console.error('Error al agregar: ', error);
            }
        });

        // Limpiar los campos después de agregar el comentario
        $('#Multimedia').val('');
        $('#Nombre_Libro').val('');
        $('#Nombre_Autor').val('');
    }
}

function mostrarLibros() {
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbxCk7mT8dim7gasnxsxyeUu7KV8tUxVCFLbQYSBZD4nvVz45A-uj-PqsR_i3Wzq55BCzA/exec',
        method: 'GET',
        success: function(responseLibro) {
            var CajadeLibros = $('#CajadeLibros');
            CajadeLibros.empty();

            responseLibro.forEach(function(Comentario) {
                const LibroDiref = document.createElement('a');
                LibroDiref.href = Comentario.pdf;
                LibroDiref.className = 'Libro_user';

                const arriba = document.createElement('div');
                arriba.className = 'Libro_Img';

                const ImgLibro = document.createElement('img');
                ImgLibro.src = Comentario.Img_Libro;

                const NombreDelLibro = document.createElement('h1');
                NombreDelLibro.textContent = Comentario.Nombre_Libro;

                arriba.append(ImgLibro);
                arriba.append(NombreDelLibro);

                const abajo = document.createElement('div');
                abajo.className = 'Libro_Informacion';

                const NombreAutor = document.createElement('p');
                NombreAutor.textContent = "Autor: " + Comentario.Nombre_Autor;

                const NombreDelAportador = document.createElement('p');
                NombreDelAportador.className = 'Libro_NombreDelAportador';
                NombreDelAportador.textContent = "Aportado por: "+ Comentario.Nombre_Del_Aportador;

                abajo.append(NombreAutor);
                abajo.append(NombreDelAportador);

                LibroDiref.append(arriba);
                LibroDiref.append(abajo);
                CajadeLibros.append(LibroDiref);
            });
        },
        error: function(error) {
            console.error('Error', error);
        }
    });
}

$(document).ready(function() {
    mostrarLibros();
});
