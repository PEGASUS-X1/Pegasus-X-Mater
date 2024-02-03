const cartBtn = document.getElementById('cart-btn');
const hideCartBtn = document.getElementById('hide-cart-btn');
const cartContainer = document.querySelector('.cart-items-container');
const black = document.querySelector('.cart-items-container-black');

// Añade los eventos de clic a los nuevos selectores
cartBtn.addEventListener('click', function () {
    cartContainer.classList.add('open');
    black.classList.add('open-black');
});

hideCartBtn.addEventListener('click', function () {
    cartContainer.classList.remove('open');
    black.classList.remove('open-black');
});

const productos = [];

function mostrarNotas(notasContainer, notas) {
    notasContainer.innerHTML = ""; // Limpiar contenido anterior

    notas.forEach(function (nota) {
        var notaSpan = document.createElement("span");
        notaSpan.textContent = " ⇰" + nota + ", ";
        notasContainer.appendChild(notaSpan);
    });
}

function crearCartaProducto(producto) {
    const carta = document.createElement("div");
    carta.classList.add("carta-productos");

    const imagen = document.createElement("img");
    imagen.src = producto.imgSrc;

    const titulo = document.createElement("h3");
    titulo.classList.add("carta-productos-title");
    titulo.textContent = producto.titulo;

    const propiedades = document.createElement("p");
    propiedades.classList.add("carta-productos-propiedades");
    propiedades.textContent = "Propiedades:";


    const notasContainer = document.createElement("div");
    notasContainer.classList.add("carta-productos-notasContainer");
    notasContainer.id = "notas-container";

    const especificaciontext = document.createElement("p");
    especificaciontext.classList.add("especificaciontext");
    especificaciontext.textContent = "elige las propiedades o especificaciones de la dibujo a pedir:";

    const especificacion = document.createElement("textarea");
        especificacion.classList.add("especificacion");
        especificacion.placeholder = 'Especifica tus requerimientos aquí...';

    const btnAgregar = document.createElement("a");
    btnAgregar.classList.add("btn-buy");
    btnAgregar.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i> Agregar al Carrito';
    btnAgregar.addEventListener("click", () => {
        if (!productos.includes(producto)) {
                productos.push({ producto, especificacion: especificacion.value });

            actualizarCajaCompras();
            alert("agregado")
        }
    });



    carta.appendChild(imagen);
    carta.appendChild(titulo);
    carta.appendChild(propiedades);
    carta.appendChild(notasContainer);
    carta.appendChild(especificaciontext);
    carta.appendChild(especificacion);
    carta.appendChild(btnAgregar);
    mostrarNotas(notasContainer, producto.notas);
    return carta;
}



function actualizarCajaCompras() {
    const cajaCompras = document.getElementById("productosEnCaja");
    cajaCompras.innerHTML = "";
    productos.forEach((producto, index) => {
        const div = document.createElement("div");
        div.classList.add("carta-1");

        const imagen = document.createElement("img");
        imagen.src = producto.producto.imgSrc;


        const li = document.createElement("h3");
        li.classList.add("carta-productos-title");
        li.textContent = producto.producto.titulo;

        const propiedades = document.createElement("p");
        propiedades.classList.add("carta-productos-propiedades");
        propiedades.textContent = "Propiedades:";

        const notasContainer = document.createElement("div");
        notasContainer.classList.add("carta-productos-notasContainer");
        notasContainer.id = "notas-container";
        notasContainer.textContent = producto.producto.notas;
    
        const especificaciontext = document.createElement("p");
        especificaciontext.classList.add("especificaciontext");
        especificaciontext.textContent = "Tus Especificaciones Son:";

        const especificacion = document.createElement("p");
        especificacion.classList.add("especificacion-p");
        especificacion.textContent = producto.especificacion;

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("eliminar")
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", () => {
            eliminarProducto(index);
            alert("eliminado")
        });

        div.appendChild(imagen);
        div.appendChild(li);
        div.appendChild(propiedades);
        div.appendChild(notasContainer);
        div.appendChild(especificaciontext);
        div.appendChild(especificacion);
        div.appendChild(btnEliminar);
        cajaCompras.appendChild(div);
    });
    actualizarEnlaceWhatsApp();
}

function eliminarProducto(index) {
    productos.splice(index, 1);
    actualizarCajaCompras();
}

function actualizarEnlaceWhatsApp() {
    
    const mensaje = productos.map(producto => `${producto.producto.codigo }\n Mi pedido:\n ${producto.producto.titulo}\nEspecificaciones: ${producto.especificacion}`).join("\n\n");

    //const mensaje = "Mi pedido:\n" + productos.map(producto => `${producto.codigo}\n${producto.imgSrc}`).join("\n\n");
    const numeroWhatsApp = "+51901176071"; // Cambia esto al número deseado
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    const btnEnviarWhatsApp = document.getElementById("btnEnviarWhatsApp");
    btnEnviarWhatsApp.href = enlaceWhatsApp;
    btnEnviarWhatsApp.target = "_blank";
}

document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.getElementById("productos");

    // Ejemplo de productos (puedes agregar más)
    const listaProductos = [
        {
            imgSrc: "./assets/img/PGX.PNG",
            titulo: "Producto 1",
            codigo: "(12)",
            notas: ["Nota 1", "Nota 2"]
        },
        {
            imgSrc: "",
            titulo: "Producto 2",
            notas: ["Nota 1", "Nota 2"]
        },
        {
            imgSrc: "imagen2.jpg",
            titulo: "Producto 3",
            notas: ["Nota 1", "Nota 2"]
        }
    ];

    listaProductos.forEach(producto => {
        const cartaProducto = crearCartaProducto(producto);
        productosContainer.appendChild(cartaProducto);
    });

    actualizarCajaCompras();
    actualizarEnlaceWhatsApp();
});
