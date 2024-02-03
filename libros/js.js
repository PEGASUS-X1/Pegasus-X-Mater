var Navegador = document.getElementById("Navegador");
var barra = document.getElementById("barra");
var close = document.getElementById("close");
barra.onclick = function(){
    Navegador.style.display = "block";
}
close.onclick = function(){
    Navegador.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const seekbar = document.getElementById("seekbar");
    const currentTime = document.getElementById("currentTime");
    const duration = document.getElementById("duration");
    const playlist = document.getElementById("playlist");
    const playlistItems = playlist.getElementsByTagName("li");
    const nombres = document.getElementById("nombres");
    const Nombre = document.getElementById("Nombre");
    let isPlaying = false;
    let currentSong = null;

    function playSong(src, name) {
        audioPlayer.src = src;
        audioPlayer.play();
        isPlaying = true;
        Nombre.value = name;
    }

    function pauseSong() {
        audioPlayer.pause();
        isPlaying = false;
    }

    function updateTimeline() {
        seekbar.value = audioPlayer.currentTime;
        currentTime.textContent = formatTime(audioPlayer.currentTime);
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${(seconds < 10) ? '0' : ''}${seconds}`;
    }

    playBtn.addEventListener("click", function() {
        if (currentSong) {
            playSong(currentSong.src, currentSong.name);
        }
    });

    pauseBtn.addEventListener("click", function() {
        pauseSong();
    });

    seekbar.addEventListener("input", function() {
        audioPlayer.currentTime = seekbar.value;
        currentTime.textContent = formatTime(seekbar.value);
    });

    audioPlayer.addEventListener("timeupdate", function() {
        updateTimeline();
    });

    audioPlayer.addEventListener("loadedmetadata", function() {
        seekbar.max = audioPlayer.duration;
        duration.textContent = formatTime(audioPlayer.duration);
    });

    for (let i = 0; i < playlistItems.length; i++) {
        playlistItems[i].addEventListener("click", function() {
            const songSrc = this.getAttribute("data-src");
            const songName = this.querySelector(".textos h1").textContent;
            currentSong = { src: songSrc, name: songName };
            playSong(currentSong.src, currentSong.name);
        });
    }
});