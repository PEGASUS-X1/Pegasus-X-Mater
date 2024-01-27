import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    console.log(credentials);
    console.log("google sign in");
    alert("Welcome " + credentials.user.displayName + " (admin)");

// Verificar si el usuario tiene el ID específico
// if (credentials.user.uid === "vUYeQEgP51QjBSYNoAzQUFQDaVC2", "NctDBzwvSTZlHq1feqq7TESapRG3") {
//   // Agregar "admin" al lado del nombre
//   alert("Welcome " + credentials.user.displayName + " (admin)");

//   // Aquí puedes realizar otras acciones específicas para el administrador, como cambiar estilos, mostrar elementos, etc.

//   // Por ejemplo, mostrar un div con id "sera"
//   const seraDiv = document.getElementById("formulario-publicacion");
//   if (seraDiv) {
//     seraDiv.style.display = "block";
//   }
  
// }
// } else {
//   // Si no es un administrador, mostrar un mensaje de bienvenida estándar
//   alert("Welcome " + credentials.user.displayName);
// }
  } catch (error) {
    console.log(error);
  }
});