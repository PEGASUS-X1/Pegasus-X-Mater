
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