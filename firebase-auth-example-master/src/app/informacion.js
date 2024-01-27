// app/informacion.js
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

const informacionDiv = document.querySelector("#informacion");

// Escuchar cambios en el estado de autenticación
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Si el usuario está autenticado, mostrar su información
    mostrarInformacionUsuario(user);
  } else {
    // Si el usuario no está autenticado, limpiar la información
    limpiarInformacionUsuario();
  }
});

function mostrarInformacionUsuario(user) {
  const { displayName, photoURL, email } = user;

  // Crear HTML con la información del usuario
  const html = `
    <div>
      <img src="${photoURL}" alt="Foto de perfil">
      <h3>${displayName}</h3>
      <p>Email: ${email}</p>
    </div>
  `;

  // Mostrar la información en el div correspondiente
  informacionDiv.innerHTML = html;
}

function limpiarInformacionUsuario() {
  // Limpiar el contenido del div si el usuario no está autenticado
  informacionDiv.innerHTML = "";
}
