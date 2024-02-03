const cartasanime = [
    {
        class: "imgNoBaner",
        direccion: "c",
        ImgAnime: "./MHA.jpg",
        NonbreAnime: "MY HERO ACADEMIA ACADEMIA ACADEMIA",
        Tiempo: "30 min",
        conternedor:null,
        Calificacion: "🌟 🌟 🌟 🌟 🌟",
        Calidad: "HD",
        Edad: "16+"
    },
    {
        class: "imgNoBaner",
        direccion: "b",
        ImgAnime: "./MHA.jpg",
        NonbreAnime: "MY HERO ACADEMIA ACADEMIA ACADEMIA",
        Tiempo: "30 min",
        Calificacion: "🌟 🌟 🌟 🌟 🌟",
        Calidad: "HD",
        conternedor:null,
        Edad: "16+"
    },
    {
        class: "imgNoBaner",
        direccion: "a",
        ImgAnime: "./MHA.jpg",
        NonbreAnime: "MY HERO ACADEMIA ACADEMIA ACADEMIA",
        Tiempo: "30 min",
        conternedor:null,
        Calificacion: "🌟 🌟 🌟 🌟 🌟",
        Calidad: "HD",
        Edad: "16+"
    }
    ,
    {
        class: "Baner",
        direccion: "a",
        ImgAnime: "",
        ImgAnimebaner: "./mugen.jpg",
        conternedor:
            [
                `
                <span class="descuento">30%</span>
                <div class="baner-tex">
                <div class="infos">
                    <span>🕧30min</span>
                    <span>👦16+</span>
                    <span>HD</span>
                    <span></span>
                </div>
                <h1>My Hero Academia</h1>
                <p class="sinopsis">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus odio alias minus minima delectus neque tenetur consectetur iusto, saepe fugiat laudantium quis deserunt, eveniet unde maxime excepturi facere nobis ipsum?</p>
            </div>
                `
        ],
    }
];

    const Animecontenedor = document.querySelector('.contenedor-anime');
    let cartaIdCounter = 1;
    cartasanime.forEach((anime) => {
        const cartaId = `carta-${cartaIdCounter}`;
        cartaIdCounter++;
          // Crea un elemento de carta
        const Anicarta = document.createElement('a');
        Anicarta.href = anime.direccion;
        Anicarta.style.background =  "url(" + anime.ImgAnimebaner + ") center";
        Anicarta.style.backgroundSize = "cover";
        Anicarta.style.backgroundRepeat = "";
        Anicarta.classList.add(anime.class);
        Anicarta.id = cartaId; // Asigna la ID única a la carta
        // Crea la imagen
        const imagenAni = document.createElement('img');
        imagenAni.src = anime.ImgAnime;

        // Crea el nombre del profesional
        const nombreAni = document.createElement('h1');
        nombreAni.textContent = anime.NonbreAnime;
        nombreAni.classList.add("titulo");

        const TiempoAni = document.createElement('p');
        TiempoAni.textContent = anime.Tiempo;
        TiempoAni.classList.add("Tiempo");

        const CalificacionAni = document.createElement('p');
        CalificacionAni.textContent = anime.Calificacion;
        CalificacionAni.classList.add("Calificacion");

        const CalidadAni = document.createElement('p');
        CalidadAni.textContent = anime.Calidad;
        CalidadAni.classList.add("Calidad");

        const EdadAni = document.createElement('p');
        EdadAni.textContent = anime.Edad;
        EdadAni.classList.add("Edad");

        const baner = document.createElement('div');
        baner.innerHTML = anime.conternedor;

          // Agrega la carta al contenedor
        Anicarta.appendChild(imagenAni);
        Anicarta.appendChild(nombreAni);
        Anicarta.appendChild(TiempoAni);
        Anicarta.appendChild(CalificacionAni);
        Anicarta.appendChild(CalidadAni);
        Anicarta.appendChild(EdadAni);
        Anicarta.appendChild(baner);
        Animecontenedor.appendChild(Anicarta);
    });
