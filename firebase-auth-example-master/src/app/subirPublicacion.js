// app/subirPublicacion.js
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { auth, db } from "./firebase.js";

const formularioPublicacion = document.querySelector("#formulario-publicacion");

formularioPublicacion.addEventListener("submit", async (e) => {
  e.preventDefault();

  const titulo = formularioPublicacion["titulo"].value;
  const contenido = formularioPublicacion["contenido"].value;

  try {
    const userId = auth.currentUser.uid;

    await addDoc(collection(db, "posts"), {
      userId,
      title: titulo,
      content: contenido,
      timestamp: new Date(),
    });

    formularioPublicacion.reset();
  } catch (error) {
    console.error("Error al subir la publicación:", error);
  }
});
