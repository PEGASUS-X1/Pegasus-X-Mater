var infor = document.getElementById("infor");

infor.onclick = function () {
    var setingt = document.getElementById("setingt");
    setingt.style.display = "block";
    setTimeout(() => {
        var setingt = document.getElementById("setingt");
        setingt.style.display = "none";
    }, 5000);
}


var bar = document.getElementById("bar");
var bars = document.getElementById("bars");
var closes = document.getElementById("closes");

function abrirBara() {
    bar.classList.add("total");
    bars.style.display = "none";
    closes.style.display = "block";
}

function CerrarBarra() {
    bar.classList.remove("total");
    bars.style.display = "block";
    closes.style.display = "none";
}

var textoGenerado = document.getElementById("texto-generado");

function modalNotificacion() {
    var modalNoti = document.getElementById("modal-Notificaciones")
    modalNoti.style.display = "block";
}

function modalNotificacionX() {
    var modalNoti = document.getElementById("modal-Notificaciones")
    modalNoti.style.display = "none";
}

function salir() {
    localStorage.removeItem("lastSecurityCheckDate");
    location.reload();
}

function BorrarTodo() {
    localStorage.clear();
    location.reload();
}
function dalte1() {
    localStorage.removeItem("botones_tablero1");
    location.reload();
}

function dalte2() {
    localStorage.removeItem("botones_tablero2");
    location.reload();
}

function dalte3() {
    localStorage.removeItem("botones_tablero3");
    location.reload();
}

function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}
function colsemodal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
const close_modal = document.getElementById("close_modal");
const boton1 = document.getElementById('agregar_links1');
const boton2 = document.getElementById('agregar_links2');
const boton3 = document.getElementById('agregar_links3');

close_modal.addEventListener('click', colsemodal);
boton1.addEventListener('click', abrirModal);
boton2.addEventListener('click', abrirModal);
boton3.addEventListener('click', abrirModal);

function buscar(event) {
    if (event.key === "Enter") {
        // Obtener el valor seleccionado del <select>
        var tipoDeRed = document.getElementById("TipoDeRed");
        var opcionSeleccionada = tipoDeRed.options[tipoDeRed.selectedIndex];

        // Obtener el valor ingresado en el campo de texto
        var nombreBuscado = document.getElementById("Nombre_buscado").value;

        // Construir la URL de búsqueda
        var urlBusqueda = opcionSeleccionada.value + "?q=" + encodeURIComponent(nombreBuscado);

        // Abrir una nueva ventana o pestaña con la URL de búsqueda
        window.open(urlBusqueda, "_blank");

        var nombreBuscado = document.getElementById("Nombre_buscado").value = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del DOM
    var modal_background = document.getElementById("modal_background");
    var btn = document.getElementById("changeBackgroundBtn");
    var span = document.getElementsByClassName("close")[0];
    var backgroundInput = document.getElementById("backgroundInput");

    // Verificar si hay un fondo guardado en el localStorage
    var storedBackground = localStorage.getItem("background");
    if (storedBackground) {
        document.body.style.backgroundImage = "url('" + storedBackground + "')";
    }

    // Mostrar el modal al hacer clic en el botón
    btn.onclick = function () {
        modal_background.style.display = "block";
    }

    // Cerrar el modal al hacer clic en la "x"
    span.onclick = function () {
        modal_background.style.display = "none";
    }

    // Cerrar el modal si se hace clic fuera de él
    window.onclick = function (event) {
        if (event.target == modal_background) {
            modal_background.style.display = "none";
        }
    }

    // Manejar la selección de la imagen de fondo
    backgroundInput.addEventListener("change", function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var backgroundImage = e.target.result;
                document.body.style.backgroundImage = "url('" + backgroundImage + "')";
                // Guardar la imagen de fondo en el localStorage
                localStorage.setItem("background", backgroundImage);
                // Cerrar el modal
                modal_background.style.display = "none";
            }
            reader.readAsDataURL(file);
        }
    });
});

var climas = document.getElementById("climas");

climas.onclick = function(){
    climas.style.display = "none";
    var tiempo = document.getElementById("tiempo");
    tiempo.style.display = "flex";
    setTimeout(() => {
        tiempo.style.display = "none";
        climas.style.display = "block";
    }, 5000);
}

const api = {
    key: '9e122cd782b2d0333f5fe4e7fa192062',
    url: `https://api.openweathermap.org/data/2.5/weather`
}


const city = document.getElementById('city');
const date = document.getElementById('date');
const tempImg = document.getElementById('temp-img');
const temp = document.getElementById('temp');
const weather = document.getElementById('weather');

// Función para verificar si se ha realizado una búsqueda hoy
function hasSearchedToday() {
    const lastSearchDate = localStorage.getItem('lastSearchDate');
    if (lastSearchDate) {
        const today = new Date().toLocaleDateString();
        return lastSearchDate === today;
    }
    return false;
}

// Función para marcar que se ha realizado una búsqueda hoy
function markSearchedToday() {
    const today = new Date().toLocaleDateString();
    localStorage.setItem('lastSearchDate', today);
}

// Función para guardar los datos de la última búsqueda
function saveLastSearch(data) {
    localStorage.setItem('lastSearchData', JSON.stringify(data));
}

// Función para obtener los datos de la última búsqueda guardada
function getLastSearchData() {
    const savedData = localStorage.getItem('lastSearchData');
    return savedData ? JSON.parse(savedData) : null;
}


function updateImages(data) {
    const tempValue = toCelsius(data.main.temp);
    let iconClass = 'fa-cloud-sun'; // Icono por defecto si la temperatura no coincide con ninguna condición
    if (tempValue > 26) {
        iconClass = 'fa-sun'; // Icono para temperaturas altas
    } else if (tempValue < 20) {
        iconClass = 'fa-snowflake'; // Icono para temperaturas bajas
    }
    tempImg.className = `fas ${iconClass} fa-3x`; // Agrega la clase del icono de Font Awesome
}

async function searchByCoordinates(lat, lon) {
    try {
        const response = await fetch(`${api.url}?lat=${lat}&lon=${lon}&appid=${api.key}&lang=es`);
        const data = await response.json();
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        date.innerHTML = (new Date()).toLocaleDateString();
        temp.innerHTML = `${toCelsius(data.main.temp)}°C`;
        // Cambia las clases de los iconos de Font Awesome aquí
        weather.innerHTML = `${data.weather[0].description}`;
        updateImages(data);
        // Guardar los datos de la última búsqueda
        saveLastSearch(data);
    } catch (err) {
        console.error(err);
        alert('Hubo un error');
    }
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

// Obtener la ubicación del usuario automáticamente al cargar la página
window.addEventListener('load', () => {
    if ("geolocation" in navigator) {
        // Verificar si ya se ha realizado una búsqueda hoy
        if (!hasSearchedToday()) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                searchByCoordinates(lat, lon);
                // Marcar que se ha realizado una búsqueda hoy
                markSearchedToday();
            });
        } else {
            // Si ya se ha realizado una búsqueda hoy, mostrar los datos de la última búsqueda guardada
            const lastSearchData = getLastSearchData();
            if (lastSearchData) {
                city.innerHTML = `${lastSearchData.name}, ${lastSearchData.sys.country}`;
                date.innerHTML = (new Date()).toLocaleDateString();
                temp.innerHTML = `${toCelsius(lastSearchData.main.temp)}°C`;
                // Cambia las clases de los iconos de Font Awesome aquí
                weather.innerHTML = `<i class="fas fa-sun"></i> ${lastSearchData.weather[0].description}`;
                updateImages(lastSearchData);
            } else {
                console.log("No se encontraron datos de búsqueda previos.");
            }
        }
    } else {
        alert("La geolocalización no está disponible en este navegador.");
    }
});


function modal_abrir_controlador_almacenador(){
    var controlador_almacenador = document.getElementById("controlador_almacenador");
    controlador_almacenador.style.display = "block";
}

function modal_cerrar_controlador_almacenador(){
    var controlador_almacenador = document.getElementById("controlador_almacenador");
    controlador_almacenador.style.display = "none";
}