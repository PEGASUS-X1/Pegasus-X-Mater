document.addEventListener("DOMContentLoaded", function () {
    const form_Primaria = document.getElementById("Primaria_data");

    form_Primaria.addEventListener("submit", function (e) {
        e.preventDefault();

        var Nombre_Tutor_Padre_primaria = $('#Nombre_Tutor_Padre_primaria').val();
        var grado_primaria = $('#grado_primaria').val();
        var Seccion_primaria = $('#Seccion_primaria').val();
        var targeta_apafa_Primaria = $('#targeta_apafa_Primaria').val();

        const formData_Primaria = {
            Nombre_Tutor_Padre_primaria: Nombre_Tutor_Padre_primaria,
            grado_primaria: grado_primaria,
            Seccion_primaria: Seccion_primaria,
            targeta_apafa_Primaria: targeta_apafa_Primaria,
        };

        $('#Nombre_Tutor_Padre_primaria').val('');
        $('#grado_primaria').val('');
        $('#Seccion_primaria').val('');
        $('#targeta_apafa_Primaria').val('');

        fetch("https://script.google.com/macros/s/AKfycbzUhYY0F76Edm0CtAQiMCNlRZCznU_oxS_Q7h0tdtZuN1kvbvSs31NrZCRBv-83pZK8/exec", {
            method: "POST",
            body: JSON.stringify(formData_Primaria),
        })
            .then(response__Primaria => response__Primaria.text())
            .then(data_Primaria => {
                console.log(data_Primaria);
                alert("Se Agrego corractamente");
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Hubo Un Error");
            });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form_Segundaria = document.getElementById("Segundaria_data");

    form_Segundaria.addEventListener("submit", function (e) {
        e.preventDefault();

        var Nombre_Tutor_Padre_Segundaria = $('#Nombre_Tutor_Padre_Segundaria').val();
        var grado_Segundaria = $('#grado_Segundaria').val();
        var Seccion_Segundaria = $('#Seccion_Segundaria').val();
        var targeta_apafa_Segundaria = $('#targeta_apafa_Segundaria').val();

        const formData_Segundaria = {
            Nombre_Tutor_Padre_Segundaria: Nombre_Tutor_Padre_Segundaria,
            grado_Segundaria: grado_Segundaria,
            Seccion_Segundaria: Seccion_Segundaria,
            targeta_apafa_Segundaria: targeta_apafa_Segundaria,
        };

        $('#Nombre_Tutor_Padre_Segundaria').val('');
        $('#grado_Segundaria').val('');
        $('#Seccion_Segundaria').val('');
        $('#targeta_apafa_Segundaria').val('');
        
        fetch("https://script.google.com/macros/s/AKfycbzgJrT4X3IwIbPa9Rw5uLuXsMUui4VqZMWekFUqxNUxaHdVhBBcFScmF1u5sN3ZpoUe/exec", {
            method: "POST",
            body: JSON.stringify(formData_Segundaria),
        })
            .then(response_Segundaria => response_Segundaria.text())
            .then(data_Segundaria => {
                console.log(data_Segundaria);
                alert("Se Agrego corractamente");
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Hubo Un Error");
            });
    });
});