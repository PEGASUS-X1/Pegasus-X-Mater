function GuardarVideo() {
    var asignatura = $('#asignatura').val();
    var Tema_videos = $('#Tema_videos').val();
    var Mentor_videos = $('#Mentor_videos').val();
    var Clase_mentor = $('#Clase_mentor').val();
    var Link_Del_Video = $("#Link_Del_Video").val();

    if (asignatura.trim() !== '') {
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbweKuYpug7U09fEiWsMP8culDRTR8lCaPjA935tIF2iJP7ADKPLV4ulTXBNumzixyiq/exec',
            method: 'POST',
            data: {
                asignatura: asignatura,
                Tema_videos: Tema_videos,
                Mentor_videos: Mentor_videos,
                Clase_mentor: Clase_mentor,
                Link_Del_Video: Link_Del_Video,
            },
            success: function(responseVideo) {
                alert('Agregado con éxito');
                mostrarVideos();
            },
            error: function(error) {
                console.error('Error al agregar: ', error);
            }
        });

        // Limpiar los campos después de agregar el comentario
        $('#Tema_videos').val('');
        $('#Mentor_videos').val('');
        $('#Mentor_videos').val('');
        $("#Clase_mentor").val("");
        $("#Link_Del_Video").val("");
    }
}

function mostrarVideos() {
    $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbweKuYpug7U09fEiWsMP8culDRTR8lCaPjA935tIF2iJP7ADKPLV4ulTXBNumzixyiq/exec',
        method: 'GET',
        success: function(responseVideo) {
            var selectAlmacenador = $('#almacenador');
            selectAlmacenador.empty();

            responseVideo.forEach(function(Comentario) {
                // Asegúrate de que Comentario.asignatura existe
                if (Comentario.asignatura) {
                    // Agrega directamente opciones al elemento select
                    selectAlmacenador.append('<option value="' + Comentario.asignatura + '">' + Comentario.asignatura + '</option>');
                }
            });
        },
        error: function(error) {
            console.error('Error', error);
        }
    });
}

$(document).ready(function() {
    mostrarVideos();
});
