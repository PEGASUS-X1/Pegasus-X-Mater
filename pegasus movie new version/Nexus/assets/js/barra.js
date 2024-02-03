
const ModalImg = document.getElementById('modal-img');
const ImgBtn = document.getElementById('ImgBtn');
const CloseImg = document.querySelector('.close-img');

ImgBtn.addEventListener('click', function () {
  ModalImg.style.display = "block";
});

CloseImg.addEventListener('click', function () {
  ModalImg.style.display = "none";
});


const cajaabierta = document.getElementById('caja');
const desplegadoroption = document.getElementById('desplegador-optioon');
const desplegadoraoption = document.querySelector('.desplegador-optioon');

desplegadoroption.addEventListener('click', function () {
  cajaabierta.style.display = "none";
  desplegadoraoption.style.display = "block";
  desplegadoroption.style.display = "none";
});

desplegadoraoption.addEventListener('click', function () {
  cajaabierta.style.display = "block";
  desplegadoroption.style.display = "block";
  desplegadoraoption.style.display = "none";
});

const baruser = document.getElementById('bar-client-cover');
const closebar = document.querySelector('.close-bar-client-cover');
const openbar = document.getElementById('open-bar-client-cover');

openbar.addEventListener('click', function () {
  baruser.style.display = "block";
});

closebar.addEventListener('click', function () {
  baruser.style.display = "none";
});


const ModalPreguntas = document.getElementById('modal-ques');
const closes = document.querySelector('.closes');
const oopen = document.getElementById('oopen');

oopen.addEventListener('click', function () {
  ModalPreguntas.style.display = "block";
});

closes.addEventListener('click', function () {
  ModalPreguntas.style.display = "none";
});





document.addEventListener("keyup", e=>{

   if (e.target.matches("#search-box")){
 
       if (e.key ==="Escape")e.target.value = ""
 
       document.querySelectorAll(".buscado").forEach(fruta =>{
 
           fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
             ?fruta.classList.remove("filtro-shar")
             :fruta.classList.add("filtro-shar")
       })
 
   }
 
 
})

        document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("data-form");
        
            form.addEventListener("submit", function (e) {
              e.preventDefault();
        
              const Nombre = document.querySelector(".username").textContent;
              const sugerencia = document.getElementById("Sugerencia").value;
              const genero = document.getElementById("Categoriass").value;
        
              const formData = {
                Nombre: Nombre,
                sugerencia: sugerencia,
                genero: genero,
              };  
        
              fetch("https://script.google.com/macros/s/AKfycbwRBcFcM6i5sQTih5Y2uJ7enNS34rIv4e3cQH_nzUBHW47IKSGKKJsgPTNyvfqr2T5XUw/exec", {
                method: "POST",
                body: JSON.stringify(formData),
              })
                .then(response => response.text())
                .then(data => {
                  console.log(data);
                  alert("Registrado");
                })
                .catch(error => {
                  console.error("Error:", error);
                  alert("Hubo un error en los datos");
                });
            });
          });
        