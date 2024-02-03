

const listaAnime = [
    {
        nombre: "Los Simpsons 1x1",
        url: "https://www.blogger.com/video.g?token=AD6v5dwfAkF2s-nHCdaOQ-8Cx0vfWQJ6VA1mmv9T5oJkX79DuFl2By-f_F3tHW0JDUMC0epMPmtRL-WKc5YYTlExeQQDKz6gM9V5IA_Fd6thMmkQl37eaPvwDT0pknuxiI7-YRy38_dH",
    },
    {
        nombre: "Los Simpsons 1x2",
        url: "https://www.blogger.com/video.g?token=AD6v5dzKAYFuVqvbP_g2brEXU_ywPbXQjiCwPeSCf8FOkCp7c77bshLSpKMmAdev412FdXOOBpUUvzeWBwWCcJsui6Xk5-482rXvpkm8rpFA-e_cr_CBIiwGaYplzGKT_Ab7AZTHaiiG",
    },
    {
        nombre: "Los Simpsons 1x3",
        url: "https://www.blogger.com/video.g?token=AD6v5dwddnj_Gn10jLQwfqy8mJUODcvlkzneDFeoQQgfr4CGwwrqmZy0Q_41urZpX91ZsKz2FfMgSU6JC7GshtylLVUhwRPVzZyDEMS8zUeyqhj6gcG1-7umbtDXh_Cm6HbhloSfcw",
    },
    {
        nombre: "Los Simpsons 1x4",
        url: "https://www.blogger.com/video.g?token=AD6v5dwfgZpz_jqUhUKiu3QRnCC-HHqFh9LfA5ULsY9A3YnxkL_21IY7se_11w3xS4yqic0dFPu0NsvOj9xkYgfxxN3n1l0rsBVLVzTGaIpAPFS-oin6WaCxbbHCaY8buX6ub_XPE74W",
    },
    {
        nombre: "Los Simpsons 1x5",
        url: "https://www.blogger.com/video.g?token=AD6v5dymeTQC3M4QHlAEtdWgGONp1loMBRq1Hw411D-3rFimtNxOAHPxx3ARUtmoffzhqfA_Vg6bv8xBsENTBCUJowXyIkREUuel9OtrTX-PSmNKGLJ8QufepHQnNd0ewAPb5bNaDhyV",
    },
    {
        nombre: "Los Simpsons 1x6",
        url: "https://www.blogger.com/video.g?token=AD6v5dwy6T2FAfxG8ZhzmPBpTkdcEBA3E91oaHnNry3tarq4s4VuIRuON459wxB2xQUj0nr5MvvCU2zSmw-pE4GpzctCCs4L1oSOX9s8dzRwdA8w0aTBg7L7Wxkj6itNYQckUIaoALk",
    },
    {
        nombre: "Los Simpsons 1x7",
        url: "https://www.blogger.com/video.g?token=AD6v5dy4wL2xoIK4tS5NF9xChXhlD0nVksegn_jw7xG5gZ4a8el9tjotWi58N7q4c1HpK5Luz02RCZtBhpM7ZvrcofQf_5GKqycY52RjP9VbpOInajDiLviwdFwRhYBoH-FgP-394qxV",
    },
    {
        nombre: "Los Simpsons 1x8",
        url: "https://www.blogger.com/video.g?token=AD6v5dzgvZeBafVVhkP8OHx0zMwUUVtGd55h-U8aPRyV-Yorixoz4M7zXKk4ExYcvUyoGDlV4s8baVpHXhUlyOeabk8oCX0V4f6fWObfS2fxGvMT4Uv9nZSu6WQ2nOZ9Popn4EBMKk0Y",
    },
    {
        nombre: "Los Simpsons 1x9",
        url: "https://www.blogger.com/video.g?token=AD6v5dydKXDTZJ4iqxwgUcECBws2BcQKMCzDmbfeA87cQo8S8TkQOCcHJK4wygLCMTOWhnf1ZyHsyxdqA9AC9oRfCdUVRkNe5gGwJk4ZG4OLrhkwYPf5xEdsam0JZ74dUIGk7IKKcNE",
    },
    {
        nombre: "Los Simpsons 1x10",
        url: "https://www.blogger.com/video.g?token=AD6v5dwDzvIHrcUZoulg7It7vlmJRc5Fx2g8X5ywTwQed4WDRZ16O2tUDYPR1oS5jHzUXFHInqkBGSq3p92JrLPxR5So1R1VLckD84W5alZxLgZ14rOw6qLNbZQGC-yRPx8IoDmqAaE",
    },
    {
        nombre: "Los Simpsons 1x11",
        url: "https://www.blogger.com/video.g?token=AD6v5dy8LMVJy-IEFOm1WRQ6tpH8Gp0isBdZpi_OytoLz3LkImgVQ81jSP7hbHWUzh4OsPsc-NquU_sHrI_4yxDCzInG0t6Uc90jsyPQUfcQBD3MgEccMeT9I-G0YYjE5eGbtuhZ0INy",
    },
    {
        nombre: "Los Simpsons 1x12",
        url: "https://www.blogger.com/video.g?token=AD6v5dwGXCCk-mj2y56Oh86mEAYHxLVVLuoo7fv6HzlOJf8wj5Ga__dC45rJBpCEABJoaipUHwU9CYsaJ0SWITCcj2bTtZmKvZ_VTQp_ZwbyUIl2h222ydFVeDzi13WbMhV_lGfveKn5",
    },
    {
        nombre: "Los Simpsons",
        url: "https://www.blogger.com/video.g?token=AD6v5dxnNGjdxPNcNMWd4qzyAZFe_vVvKXTIAZakTwDbCAB1JBCeNUrX5xYh_Q1E3xCwGxG_QFDbtGNK5iiZkRcOIbo9TjZ5a7nLdWk3emfZ839Y4T4Q0o0iO6scvgVIRvKfPaSWCFM1",
    }

]

const videoPlayer = document.getElementById('videoPlayer');
const videoList = document.getElementById('videoList');
const tempCap = document.getElementById('temp-cap');
const contador = document.getElementById('contador');
let cartaICounter = 1;
listaAnime.forEach(function(animeVideo) {
const cartad = `cart-${cartaICounter}`;
cartaICounter++;
const li = document.createElement('li');
li.textContent = animeVideo.nombre;
videoList.appendChild(li);
li.addEventListener('click', () => {
tempCap.textContent = animeVideo.nombre;
videoPlayer.src = animeVideo.url
        });
});
contador.textContent = `Total de videos: ${listaAnime.length}`;
