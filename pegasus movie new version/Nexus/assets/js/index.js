var audio = new Audio('home.mp3');
function presentacion() {
    const lector = document.getElementById('lector');
      //var audio = new Audio('presentacion.wav');
    audio.play();
    lector.innerHTML = '<i class="fa fa-stop"></i>';
        setTimeout(function() { 
        lector.innerHTML = '<i class="fa fa-play"></i>';
    }, 28000);
}  