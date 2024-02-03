const activar_Primaria = document.getElementById("activar_Primaria");
const activar_Segundaria = document.getElementById("activar_Segundaria");
const Primaria = document.getElementById("Primaria");
const Segundaria = document.getElementById("Segundaria");
const generado = document.getElementById("texto-generado");
const tipo_sistema = document.getElementById("tipo_sistema");

activar_Primaria.onclick = function(){
    Primaria.style.display = "block";
    Segundaria.style.display = "none";
    tipo_sistema.textContent = "Elegiste El Sistema De Primaria";
    generado.style.display = "none";
    activar_Primaria.classList.add("active");
    activar_Segundaria.classList.remove("active");
}

activar_Segundaria.onclick = function(){
    Segundaria.style.display = "block";
    tipo_sistema.textContent = "Elegiste El Sistema De Segundaria";
    Primaria.style.display = "none";
    generado.style.display = "none";
    activar_Segundaria.classList.add("active");
    activar_Primaria.classList.remove("active");
}