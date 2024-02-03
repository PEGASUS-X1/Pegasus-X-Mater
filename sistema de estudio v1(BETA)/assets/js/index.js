
document.addEventListener("DOMContentLoaded", function() {
    var loadingContainer = document.querySelector(".loading-container");
    var btn = document.createElement("a");
    btn.classList.add("btn-");
    btn.href ="./inicio.html"
    btn.innerText = "¡Acceder!";
    //btn.setAttribute("onclick", "playSong()");
    
    setTimeout(function() {
      var span = loadingContainer.querySelector("span");
      loadingContainer.removeChild(span);
      loadingContainer.appendChild(btn);
      btn.style.display = "block";
    }, 5000);
  });

  document.addEventListener("DOMContentLoaded", function() {
    const modal666 = document.getElementById("666");
    let Solitario = "";

    document.addEventListener("keydown", function(event) {
      const key = event.key.toLowerCase();
      Solitario += key;

      if (Solitario === "admin") {
        modal666.classList.add("Solitario--visible");
        Solitario = ""; // Reinicia la secuencia

        // Reproducir música
        const audio = new Audio("../666.mp3");
        audio.play();
      }
    });

    const close666Btn = document.getElementById("close-Solitario-btn");
    close666Btn.addEventListener("click", function() {
      modal666.classList.remove("Solitario--visible");
    });
    
  });