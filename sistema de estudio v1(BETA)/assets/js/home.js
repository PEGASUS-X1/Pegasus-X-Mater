// // canbiador de backgroundImage 

//     // Array con las URL de las imágenes de fondo
//     const backgroundImages = [
//         "/assets/img/fondo.PNG",
//             "/assets/img/grupo-B.PNG",
//             "/assets/img/grupo-a.PNG",
//             // Agrega más URLs de imágenes si es necesario
//         ];
    
//         let currentImageIndex = 0;
//         const backgroundContainer = document.getElementById("backgroundContainer");
    
//         function changeBackgroundImage() {
//             // Cambia la imagen de fondo del contenedor
//             backgroundContainer.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    
//             // Incrementa el índice de la imagen actual
//             currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
//         }
    
//         // Cambia la imagen cada 5 segundos (5000 milisegundos)
//         setInterval(changeBackgroundImage, 3000);
// // end canbiador de backgroundImage        


function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}


function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

function initializeModal(modalId, openBtnId, closeBtnClass) {
  var openBtn = document.getElementById(openBtnId);
  var modal = document.getElementById(modalId);
  var closeBtn = modal.getElementsByClassName(closeBtnClass)[0];

  openBtn.addEventListener("click", function() {
    openModal(modalId);
  });

  closeBtn.addEventListener("click", function() {
    closeModal(modalId);
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeModal(modalId);
    }
  });
}

// Inicializar los modales
initializeModal("profes", "openModalProfes", "close-modal-profes", );
initializeModal("creators-modal", "creators-abri", "close-modal-creators");
// initializeModal("cursos", "cursos-abri", "close-modal-cursos");
// initializeModal("fotos", "fotos-abri", "close-modal-fotos");
initializeModal("Redes", "Redes-abri", "close-modal-Redes");
initializeModal("Noticia-modal", "Noticia-modal-abri", "close-modal-Noticia");
initializeModal("Politicas-Privacidad", "Politicas-Privacidad-abri", "close-modal-Politicas-Privacidad");

    // silders
// Función para crear los sliders
function createSliders() {
  var sliders = document.querySelectorAll('.slider-container');

  sliders.forEach(function(sliderContainer) {
    var slider = sliderContainer.querySelector('.slider');
    var slides = slider.querySelectorAll('.slide');
    var currentIndex = 0;

    function nextSlide() {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      updateSlider();
    }

    function updateSlider() {
      slider.style.transform = 'translateX(' + (currentIndex * -100) + '%)';
    }

    setInterval(nextSlide, 3000);
  });
}

// Crear los sliders al cargar la página
window.addEventListener('load', createSliders);

// anuncio

// wasap
function showModal() {
  var modal = document.getElementById("wsap");
  modal.style.display = "block";
}

function hideModal() {
  var modal = document.getElementById("wsap");
  modal.style.display = "none";
}

function sendMessage(message) {
  var phoneNumber = "+51 922 862 856";
  var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);
  window.open(url, "_blank");
  hideModal();
}

//  modal-home
 // Función para abrir la ventana modal
 function openModalSaludo() {
  var modal = document.getElementById("modal-saludo");
  modal.style.display = "block";
}

// Función para cerrar la ventana modal
// function closeModalSaludo() {
//   var modal = document.getElementById("modal-saludo");
//   var audio = document.getElementById("audio");
//   modal.style.display = "none";
//   audio.play();
  
// }
function closeModalSaludo() {
  var modal = document.getElementById("modal-saludo");
  var audio = document.getElementById("audio");
  modal.style.display = "none";
  audio.play();
}


window.onload = function() {
  openModalSaludo();
};
// end modal home


var encodedString = "%C3%B1%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA";
var decodedString = decodeURIComponent(encodedString);

console.log(decodedString); // Resultado: "ñáéíóú"

const sliderNoti = document.getElementById('slider-noti');
const btnPrevnoti = document.querySelector('.btn-prev-noti');
const btnNextnoti = document.querySelector('.btn-next-noti');
let currentSlide = 0;
let noticias = [
  {
    "titulo": "Tenemos nuevas actualizaciones",
    "contenido": "Pegasus X tiene el placer de anunciar un cambio en nuestra dirección estratégica. A partir de ahora, hemos decidido redirigir nuestros objetivos con un enfoque renovado en el apoyo tanto a las personas como a nuestra propia causa.",
    "imagen": "../assets/img/noticias/nueva-version.PNG",
    "contenidoextra": "Estamos comprometidos en utilizar nuestros recursos y capacidades para marcar una diferencia positiva en las vidas de las personas, al mismo tiempo que fortalecemos nuestro propio propósito.<br><br>Este nuevo enfoque refleja nuestra creencia en la importancia de la responsabilidad social y el impacto positivo. Reconocemos la necesidad de contribuir de manera significativa a la sociedad en la que operamos, y al mismo tiempo, reconocemos la importancia de fortalecernos internamente para lograr una sostenibilidad a largo plazo <br><br> En adelante, estaremos buscando oportunidades para colaborar con organizaciones y comunidades, brindando recursos, conocimientos y apoyo para abordar desafíos clave. Nuestra dedicación a este objetivo se reflejará en proyectos y programas diseñados para marcar una diferencia tangible en áreas como educación, salud y sostenibilidad ambiental.<br><br> Al centrarnos en el bienestar de las personas y en nuestras propias metas, aspiramos a construir un camino que no solo sea exitoso en términos empresariales, sino también significativo en términos humanos. Estamos emocionados por este nuevo capítulo y esperamos avanzar juntos hacia un futuro más brillante y enriquecedor para todos. <br><br>",
    "onclick": "sonar",
    "mas": "toggleContent"
  },
  {
    "titulo": "Título de la Noticia 2",
    "contenido": "Contenido de la Noticia 2",
    "imagen": "ruta-de-la-imagen2.jpg",
    "onclick": ""
  },
  {
    "titulo": "Título de la Noticia 3",
    "contenido": "Contenido de la Noticia 3",
    "imagen": "ruta-de-la-imagen3.jpg",
    "onclick": ""
  }
];

function createSlide(noticia) {
  const noticiaDiv = document.createElement('div');
  noticiaDiv.className = 'noticia';

  const tituloElement = document.createElement('h2');
  tituloElement.className = 'titulo-noti';
  tituloElement.textContent = noticia.titulo;

  const contenidoElement = document.createElement('p');
  contenidoElement.className = 'contenido-noti';
  contenidoElement.textContent = noticia.contenido;

  const imagenElement = document.createElement('img');
  imagenElement.className = 'imagen-noti';
  imagenElement.src = noticia.imagen;

  const mastext = document.createElement('p');
  mastext.className = 'hidden';
  mastext.innerHTML = noticia.contenidoextra;
  mastext.id = 'additionalContent';

  const btn = document.createElement('button');
  btn.innerHTML = '    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path d="M8 5v14l11-7z" /></svg>';
  btn.className = 'play';


  const text = document.createElement('button');
  text.className = 'btn btn-lectura-noti';
  text.textContent = 'Leer Mas';

  text.onclick = function() {
    window[noticia.mas]();
  };


  btn.onclick = function() {
    window[noticia.onclick]();
  };

  noticiaDiv.appendChild(tituloElement);
  noticiaDiv.appendChild(contenidoElement);
  noticiaDiv.appendChild(imagenElement);
  noticiaDiv.appendChild(mastext);
  noticiaDiv.appendChild(btn);
  noticiaDiv.appendChild(text);
  return noticiaDiv;
}

function showSlide(slideIndex) {
  const slides = document.querySelectorAll('.noticia');

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'flex';
    } else {
      slide.style.display = 'none';
    }
  });
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = noticias.length - 1;
  }
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= noticias.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

noticias.forEach(noticia => {
  const slide = createSlide(noticia);
  sliderNoti.appendChild(slide);
});

showSlide(currentSlide);

btnPrevnoti.addEventListener('click', prevSlide);
btnNextnoti.addEventListener('click', nextSlide);

// Función personalizada "sonar"
// function sonar() {
//   console.log('Se hizo clic en el botón de lectura');
//   // Aquí puedes agregar tu código personalizado para la acción del botón
// }
var audio = new Audio('../actualizacion.mpeg');

function sonar() {
  // Reproducir el audio al hacer clic en el botón
  audio.play();
}

function toggleContent() {
  const additionalContent = document.getElementById('additionalContent');
  const readMoreBtn = document.getElementById('readMoreBtn');

  additionalContent.classList.toggle('hidden');
  if (additionalContent.classList.contains('hidden')) {
      readMoreBtn.textContent = 'Leer más';
  } else {
      readMoreBtn.textContent = 'Leer menos';
  }
}
var encodedString = "%C3%B1%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA";
var decodedString = decodeURIComponent(encodedString);

console.log(decodedString); // Resultado: "ñáéíóú"

// Arreglo de configuraciones de notificación en formato JSON
var notificationConfigs = [
  {
    tituloNoti: "<i class='bx bx-station bx-flashing '></i> EN VIVO",
    resumen: "Patito algebraico",
    buttonText: "x",
    modalabri: "modal-1",
    iframeUrl: "",
    imageUrl: "//via.placeholder.com/500",
    verUrl: "https://youtu.be/S5UEoLeza-o",
    musicUrl: "https://almacen-pegasus.netlify.app/PGX/musicas/Musica.mp3",
    modalSubtexto: "Este es el subtexto del modal 1"
  },
  {
    tituloNoti: "<span><i class='bx bx-station bx-flashing'></i></span> EN VIVO",
    resumen: "¡Bienvenido! Esta es la notificación 2.",
    buttonText: "x",
    modalabri: "modal-2",
    iframeUrl: "",
    imageUrl: "//via.placeholder.com/500",
    verUrl: "https://web.whatsapp.com/",
    musicUrl: "ruta/musica.mp3",
    modalSubtexto: "Este es el subtexto del modal 2"
  },
  {
    tituloNoti: "<i class='bx bx-station bx-flashing'></i> EN VIVO",
    resumen: "¡Atención! Esta es la notificación 3.",
    buttonText: "x",
    modalabri: "modal-3",
    iframeUrl: "",
    imageUrl: "//via.placeholder.com/500",
    verUrl: "https://chat.openai.com/c/e20d8ad7-6797-4dc3-949b-b08226c11e13",
    musicUrl: "ruta/musica.mp3",
    modalSubtexto: "Este es el subtexto del modal 3"
  },
  {
    tituloNoti: "<i class='bx bx-station bx-flashing'></i> EN VIVO",
    resumen: "¡Atención! Esta es la notificación 4.",
    buttonText: "x",
    modalabri: "modal-4",
    iframeUrl: "",
    imageUrl: "//via.placeholder.com/500",
    verUrl: "https://web.whatsapp.com/",
    musicUrl: "ruta/musica.mp3",
    modalSubtexto: "Este es el subtexto del modal 4"
  }
];

// Obtener el contenedor principal para las notificaciones
var container = document.getElementById("notification-container");

// Altura de cada notificación
var notificationHeight = 100;

// Crear y mostrar las notificaciones
notificationConfigs.forEach(function (config, index) {
  var notification = document.createElement("div");
  notification.classList.add("notification");

  var tituloNoti = document.createElement("div");
  tituloNoti.innerHTML = config.tituloNoti;
  // tituloNoti.classList.add("parpadeante");

  var resumen = document.createElement("p");
  resumen.innerHTML = config.resumen;

  var closeButton = document.createElement("span");
  closeButton.classList.add("close-");
  closeButton.textContent = config.buttonText;

  notification.appendChild(tituloNoti);
  notification.appendChild(resumen);
  notification.appendChild(closeButton);

  // Calcular la posición vertical de la notificación
  var topPosition = 'calc(90% - ' + ((notificationConfigs.length - index) * notificationHeight) + 'px)';
  notification.style.top = topPosition;

  container.appendChild(notification);

  closeButton.addEventListener("click", function () {
    container.removeChild(notification);
  });

  notification.addEventListener("click", function () {
    opeModal(config.modalabri, config.iframeUrl, config.imageUrl, config.resumen, config.verUrl, config.musicUrl, config.modalSubtexto);
  });

});

function opeModal(modalabri, iframeUrl, imageUrl, resumen, verUrl, musicUrl, modalSubtexto) {
  var modal = document.getElementById(modalabri);
  var iframe = document.getElementById("iframe-" + modalabri.substring(6));
  var image = document.getElementById("image-" + modalabri.substring(6));
  var ver = document.getElementById("ver-" + modalabri.substring(6));
  var audio = new Audio(musicUrl);
  var subtexto = modal.querySelector("p");

  if (iframeUrl && imageUrl) {
    // Si se proporciona tanto la URL del iframe como la URL de la imagen
    iframe.style.display = "block";
    image.style.display = "block";
    iframe.src = iframeUrl;
    image.src = imageUrl;
  } else if (iframeUrl) {
    // Si solo se proporciona la URL del iframe
    iframe.style.display = "block";
    image.style.display = "none";
    iframe.src = iframeUrl;
  } else if (imageUrl) {
    // Si solo se proporciona la URL de la imagen
    iframe.style.display = "none";
    image.style.display = "block";
    image.src = imageUrl;
  } else {
    // Si no se proporciona ni la URL del iframe ni la URL de la imagen
    iframe.style.display = "none";
    image.style.display = "none";
  }

  ver.href = verUrl;
  modal.querySelector("h2").innerHTML = resumen;
  subtexto.innerHTML = modalSubtexto;
  modal.style.display = "block";
  audio.play();
}

function closeModal(modalabri) {
  var modal = document.getElementById(modalabri);
  modal.style.display = "none";
}