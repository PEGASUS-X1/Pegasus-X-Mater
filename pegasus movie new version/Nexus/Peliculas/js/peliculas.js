const cartasanime = [
    {
      class: "imgNoBaner",
      Genero: "Accion",
      Duracion: "Pelicula",
      direccion: "a.js",
      ImgAnime: "./img/MHA.jpg",
      NonbreAnime: "MY HERO ACADEMIA",
      Tiempo: "<i class='bx bxs-time'></i> 30 min",
      conternedor: null,
      Calificacion: "🌟 🌟 🌟 🌟 🌟",
      Calidad: "HD",
      Edad: "<i class='fa fa-user'></i> 16+"
    },
    {
      class: "imgNoBaner",
      direccion: "b.js",
      Genero: "Terror",
      Duracion: "Anime",
      ImgAnime: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTL3oQJMXHBklldU-IkzZQ1y8XzMwveNL_fTB7H3daZqOx9LEN0",
      NonbreAnime: "Dragon Ball",
      Tiempo: "<i class='bx bxs-time'></i> 30 min",
      Calificacion: "🌟 🌟 🌟 🌟 🌟",
      Calidad: "HD",
      conternedor: null,
      Edad: "<i class='fa fa-user'></i> 16+"
    },
    {
      class: "imgNoBaner",
      direccion: "a",
      ImgAnime: "https://pics.filmaffinity.com/naruto-409273531-large.jpg",
      NonbreAnime: "Naruto",
      Tiempo: "30 min",
      conternedor: null,
      Calificacion: "🌟 🌟 🌟 🌟 🌟",
      Calidad: "HD",
      Edad: "<i class='fa fa-user'></i> 16+"
    },
    {
      class: "Baner",
      direccion: "a",
      Tiempo: null,
      ImgAnime: null,
      Edad: null,
      ImgAnimebaner: "./img/mugen.jpg",
      conternedor: [
        `
        <span class="descuento">30%</span>
        <div class="baner-tex">
          <div class="infos">
            <span><i class="bx bxs-time"></i> 30min</span>
            <span><i class="fa fa-user"></i> 16+</span>
            <span>HD</span>
            <span><i class="bx bxs-star"></i> 9.5</span>
          </div>
          <h1>Demon Slayer</h1>
          <p class="sinopsis">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus odio alias minus minima delectus neque tenetur consectetur iusto, saepe fugiat laudantium quis deserunt, eveniet unde maxime excepturi facere nobis ipsum?</p>
        </div>
        `
      ]
    }
  ];
  
  function cargarScript(url) {
    var script = document.createElement('script');
    script.src = url;
    // Agregar el script a tu página aquí
    document.body.appendChild(script);
  }
  
  function agregarBotonASpan(Anicarta, scriptURL) {
    Anicarta.style.cursor = "pointer"; // Cambia el cursor al estilo "mano" para indicar que es un botón
    Anicarta.addEventListener("click", function() {
      cargarScript(scriptURL);
    });
  }
  
  var filtroGenero = document.getElementById("filtro-materia");
  var filtroDuracion = document.getElementById("filtro-mes");
  // var filtroGrupo = document.getElementById("filtro-grupo");
  let cartaIdCounter = 1;
  // Función para mostrar los cursos filtrados en la página
  function mostrarcartitas(animecartitas) {
    const Animecontenedor = document.querySelector('.contenedor-anime');
    Animecontenedor.innerHTML = ''; // Limpia el contenido anterior
  
    animecartitas.forEach(function(anime) {
      const cartaId = `carta-${cartaIdCounter}`;
      cartaIdCounter++;
      // Crea un elemento de carta
      const Anicarta = document.createElement('span');
      agregarBotonASpan(Anicarta, anime.direccion);
      // Anicarta.href = anime.direccion;
      
      Anicarta.style.background = "url(" + anime.ImgAnimebaner + ") center";
      Anicarta.style.backgroundSize = "cover";
      Anicarta.style.backgroundRepeat = "";
      Anicarta.classList.add(anime.class, "buscado");
      Anicarta.id = cartaId; // Asigna la ID única a la carta
      // Crea la imagen
      const imagenAni = document.createElement('img');
      imagenAni.src = anime.ImgAnime;
  
      // Crea el nombre del profesional
      const nombreAni = document.createElement('h1');
      nombreAni.textContent = anime.NonbreAnime;
      nombreAni.classList.add("titulo");
  
      const TiempoAni = document.createElement('p');
      TiempoAni.innerHTML = anime.Tiempo;
      TiempoAni.classList.add("Tiempo");
  
      const CalificacionAni = document.createElement('p');
      CalificacionAni.textContent = anime.Calificacion;
      CalificacionAni.classList.add("Calificacion");
  
      const CalidadAni = document.createElement('p');
      CalidadAni.textContent = anime.Calidad;
      CalidadAni.classList.add("Calidad");
  
      const EdadAni = document.createElement('p');
      EdadAni.innerHTML = anime.Edad;
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
  }
  
  // Evento "change" para los filtrosGeneroMateria
  filtroGenero.addEventListener("change", filtrarCursos);
  filtroDuracion.addEventListener("change", filtrarCursos);
  // filtroGrupo.addEventListener("change", filtrarCursos);
  
  // Función para filtrar los cursos según los criterios seleccionados
  function filtrarCursos() {
    var GeneroSeleccionada = filtroGenero.value;
    var DuracionSeleccionado = filtroDuracion.value;
    // var grupoSeleccionado = filtroGrupo.value;
    var cursosFiltrados = [];
  
    if (GeneroSeleccionada === "todos" && DuracionSeleccionado === "todos") {
      cursosFiltrados = cartasanime;
    } else {
      cursosFiltrados = cartasanime.filter(function(anime) {
        return (
          (GeneroSeleccionada === "todos" || anime.Genero === GeneroSeleccionada) &&
          (DuracionSeleccionado === "todos" || anime.Duracion === DuracionSeleccionado) 
          // &&
          // (grupoSeleccionado === "todos" || anime.grupo === grupoSeleccionado)
        );
      });
    }
  
    mostrarcartitas(cursosFiltrados);
  }
  
  // Llamada inicial para mostrar todos los cursos al cargar la página
  mostrarcartitas(cartasanime);
  
  // Array de objetos que representan las opciones que deseas agregar
  var opcionesGenero = [
    { value: "Accion", text: "Accion" },
    { value: "Terror", text: "Terror" },
    { value: "Algebra", text: "Algebra" },
    { value: "Trigonometria", text: "Trigonometria" },
    { value: "Aritmetica", text: "Aritmetica" },
    { value: "Biologia", text: "Biologia" }
  ];
  
  // Selecciona el elemento select
  var selectElementGenero = document.getElementById("filtro-materia");
  
  // Itera a través del array de opciones y agrégalas al select
  opcionesGenero.forEach(function(opcionGenero) {
    var optionElementGenero = document.createElement("option");
    optionElementGenero.value = opcionGenero.value;
    optionElementGenero.text = opcionGenero.text;
    selectElementGenero.appendChild(optionElementGenero);
  });
  
  