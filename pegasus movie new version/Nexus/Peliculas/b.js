var pelicula = "https://www.youtube.com/embed/MBslmyke4G4?si=bf2M6zM_KTJC4giE";
var NamePeli = "Five nights at freddy's";
var LorePeli = "aea";
var imgBanerPeli = "https://nintenduo.com/wp-content/uploads/2023/05/Poster-FNAF-Pelicula-01.webp";
var UrlDescarga = null;

var reproductor = document.getElementById("reproductor");
var Name = document.getElementById("Name");
var lore = document.getElementById("lore");
var Baner = document.getElementById("Baner");
var Descarga = document.getElementById("Descarga");

// Rellena la información de la película
Name.textContent = NamePeli;
lore.textContent = LorePeli;
Baner.src = imgBanerPeli;
if (UrlDescarga) {
    Descarga.href = UrlDescarga;
} else {
    Descarga.style.display = "none";
}

// Inicia el video automáticamente
reproductor.src = pelicula;
reproductor.style.display = "block";