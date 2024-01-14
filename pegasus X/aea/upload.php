<?php
if (isset($_FILES["imagen"])) {
    $target_dir = "uploads/"; // Directorio donde se guardarán las imágenes
    $target_file = $target_dir . basename($_FILES["imagen"]["name"]);

    if (move_uploaded_file($_FILES["imagen"]["tmp_name"], $target_file)) {
        echo "La imagen se ha subido con éxito. Puedes acceder a ella en: " . $target_file;
    } else {
        echo "Hubo un error al subir la imagen.";
    }
}
?>
