const peliculas = [
  {
      class: "imgNoBaner",
      Genero: "Accion",
      direccion: "https://gregarious-kheer-096bec.netlify.app/peliculas-fredy-prueva.js",
      ImgPeli: "https://nintenduo.com/wp-content/uploads/2023/05/Poster-FNAF-Pelicula-01.webp",
      NonbrePeli: "Five Nights at Freddy's",
      Tiempo: "<i class='bx bxs-time'></i> 1h 46min",
      conternedor: null,
      Calificacion: "🌟 🌟 🌟 🌟 🌟",
      Calidad: "HD",
      Edad: "<i class='fa fa-user'></i> 16+"
  },
  {
      class: "Baner",
      direccion: "/Nexus/Peliculas/b.js",
      Tiempo: null,
      ImgPeli: null,
      Edad: null,
      ImgPeliBaner: "https://i.pinimg.com/564x/bb/b0/a9/bbb0a92066d2d07e14fcf62e16749471.jpg",
      conternedor: [
          `
          <span class="descuento">30%</span>
          <div class="baner-tex">
              <div class="infos">
              <span><i class="bx bxs-time"></i>1h 46min</span>
              <span><i class="fa fa-user"></i> 16+</span>
              <span>HD</span>
              <span><i class="bx bxs-star"></i> 9.5</span>
              </div>
              <h1>Five Nights at Freddy's</h1>
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

function agregarBotonASpan(Pelicarta, scriptURL) {
  Pelicarta.style.cursor = "pointer"; // Cambia el cursor al estilo "mano" para indicar que es un botón
  Pelicarta.addEventListener("click", function() {
  cargarScript(scriptURL);
  var repro = document.getElementById("reproductor-total")
  repro.style.display = "";
  });
}

      var filtroGenero = document.getElementById("filtro-Genero");
      var filtroDuracion = document.getElementById("filtro-Duracion");
      // var filtroGrupo = document.getElementById("filtro-grupo");
      let cartaIdCounter = 1;
      // Función para mostrar los cursos filtrados en la página
      function mostrarcartitas(Pelicartitas) {
          const Pelicontenedor = document.querySelector('.contenedor-anime');
          Pelicontenedor.innerHTML = ''; // Limpia el contenido anterior
      
          Pelicartitas.forEach(function(peliculas) {
          const cartaId = `carta-${cartaIdCounter}`;
          cartaIdCounter++;
          // Crea un elemento de carta
          const Pelicarta = document.createElement('span');
          agregarBotonASpan(Pelicarta, peliculas.direccion);
          // Pelicarta.href = peliculas.direccion;
          
          Pelicarta.style.background = "url(" + peliculas.ImgPeliBaner + ") center";
          Pelicarta.style.backgroundSize = "cover";
          Pelicarta.style.backgroundRepeat = "";
          Pelicarta.classList.add(peliculas.class, "buscado");
          Pelicarta.id = cartaId; // Asigna la ID única a la carta
          // Crea la imagen
          const imagenAni = document.createElement('img');
          imagenAni.src = peliculas.ImgPeli;
      
          // Crea el nombre del profesional
          const nombreAni = document.createElement('h1');
          nombreAni.textContent = peliculas.NonbrePeli;
          nombreAni.classList.add("titulo");
      
          const TiempoAni = document.createElement('p');
          TiempoAni.innerHTML = peliculas.Tiempo;
          TiempoAni.classList.add("Tiempo");
      
          const CalificacionAni = document.createElement('p');
          CalificacionAni.textContent = peliculas.Calificacion;
          CalificacionAni.classList.add("Calificacion");
      
          const CalidadAni = document.createElement('p');
          CalidadAni.textContent = peliculas.Calidad;
          CalidadAni.classList.add("Calidad");
      
          const EdadAni = document.createElement('p');
          EdadAni.innerHTML = peliculas.Edad;
          EdadAni.classList.add("Edad");
      
          const baner = document.createElement('div');
          baner.innerHTML = peliculas.conternedor;
      
          // Agrega la carta al contenedor
          Pelicarta.appendChild(imagenAni);
          Pelicarta.appendChild(nombreAni);
          Pelicarta.appendChild(TiempoAni);
          Pelicarta.appendChild(CalificacionAni);
          Pelicarta.appendChild(CalidadAni);
          Pelicarta.appendChild(EdadAni);
          Pelicarta.appendChild(baner);
          Pelicontenedor.appendChild(Pelicarta);
          });
      }
      
      // Evento "change" para los filtrosGeneroMateria
      filtroGenero.addEventListener("change", filtrarGenero);
      filtroDuracion.addEventListener("change", filtrarGenero);
      // filtroGrupo.addEventListener("change", filtrarCursos);
      
      // Función para filtrar los cursos según los criterios seleccionados
      function filtrarGenero() {
          var GeneroSeleccionada = filtroGenero.value;
          var DuracionSeleccionado = filtroDuracion.value;
          // var grupoSeleccionado = filtroGrupo.value;
          var GeneroFiltrados = [];
      
          if (GeneroSeleccionada === "todos" && DuracionSeleccionado === "todos") {
          GeneroFiltrados = peliculas;
          } else {
          GeneroFiltrados = peliculas.filter(function(peliculas) {
              return (
              (GeneroSeleccionada === "todos" || peliculas.Genero === GeneroSeleccionada) &&
              (DuracionSeleccionado === "todos" || peliculas.Tiempo === DuracionSeleccionado) 
              // &&
              // (grupoSeleccionado === "todos" || peliculas.grupo === grupoSeleccionado)
              );
          });
          }
      
          mostrarcartitas(GeneroFiltrados);
      }
      
      // Llamada inicial para mostrar todos los cursos al cargar la página
      mostrarcartitas(peliculas);
      
      // Array de objetos que representan las opciones que deseas agregar
      var opcionesGenero = [
          { value: "Accion", text: "Accion" },
          { value: "Terror", text: "Terror" }
      ];
      
      // Selecciona el elemento select
      var selectElementGenero = document.getElementById("filtro-Genero");
      
      // Itera a través del array de opciones y agrégalas al select
      opcionesGenero.forEach(function(opcionGenero) {
          var optionElementGenero = document.createElement("option");
          optionElementGenero.value = opcionGenero.value;
          optionElementGenero.text = opcionGenero.text;
          selectElementGenero.appendChild(optionElementGenero);
      });
      
      // Array de objetos que representan las opciones que deseas agregar
      var opcionesDuracion = [
          { value: "<i class='bx bxs-time'></i> 30 min", text: "30 min" },
          // { value: "", text: "" }
      ];
      
      // Selecciona el elemento select
      var selectElementoDuracion = document.getElementById("filtro-Duracion");
      
      // Itera a través del array de opciones y agrégalas al select
      opcionesDuracion.forEach(function(opcionDuracion) {
          var optionElementDuracion = document.createElement("option");
          optionElementDuracion.value = opcionDuracion.value;
          optionElementDuracion.text = opcionDuracion.text;
          selectElementoDuracion.appendChild(optionElementDuracion);
      });
      
