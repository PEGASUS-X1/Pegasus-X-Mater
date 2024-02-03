var pelicula = "https://cdn37.tokyvideo.com/videos/376/376624/mp4/56e5fff5aaf67ee2a6bd0da7c7ac40b834ae9222baa5b78751cd445ab5dc4b93.mp4?nva=20231029194507&nvb=20231027174507&token=0578895cec70fb1891b65";
var NamePeli = "Five nights at freddy's";
var LorePeli = "Un problemático guardia de seguridad empieza a trabajar en la pizzería Freddy Fazbear's. Mientras pasa su primera noche en el trabajo, se da cuenta de que el turno de noche en Freddy's no será tan fácil de sobrellevar.";
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