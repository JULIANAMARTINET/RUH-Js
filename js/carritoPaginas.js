class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
    addToPorfolio() {
        this.cantidad++;
    }
    actualizarPrecioTotal() {
        this.totalPrecio = this.precio * this.cantidad;
    }
}

const contadorCarrito = document.getElementById("contadorCarrito")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const vaciarCarrito = document.getElementById('vaciarCarrito')
const pagarCarrito = document.getElementById('pagarCarrito')
const totalPrecioCarrito = document.getElementById('totalPrecioCarrito')
const cantidadTotal = document.getElementById('cantidadTotal')
const carritoLocal = localStorage.getItem("carrito")

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(carritoLocal)
        actualizarCarrito()
    }
})

// const carritoLocal = localStorage.getItem("carrito")
// carrito = JSON.parse(carritoLocal)

// actualizarCarrito()

const deleteCart = (productoId) => {
    const item = carrito.find((producto) => producto.id === productoId);
    const index = carrito.indexOf(item);
    carrito.splice(index, 1);
    actualizarCarrito()
}

vaciarCarrito.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

// Funcion pagar carrito

pagarCarrito.addEventListener('click', () => {
    alert(`Tu compra total es de $${totalCarrito}. Gracias! 😄`);
    carrito.length = 0;
    actualizarCarrito()
})

const actualizarCarrito = () => {
   contenedorCarrito.innerHTML = ""
   carrito.forEach((producto) => {
     let card = document.createElement("div")
     card.innerHTML = `
    <figure class="card mb-4">
      <div class="row g-0">
          <div class="col-md-3 img-carrito">
              <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.nombre}">
          </div>
          <div class="col-md-6">
             <div class="card-detalle">
                <p class="card-title">${producto.nombre} </p>
                <p class="card-text">Cant: ${producto.cantidad}</p>
                <p class="card-text">Total: $ ${producto.totalPrecio}</p>
             </div>
          </div>
          <div class="col-md-3 d-flex">
                <button class="btn btn-primary eliminar" id="eliminar${producto.id}">Eliminar</button>
          </div>
      </div>
    </figure
    `
       contenedorCarrito.appendChild(card);

        const botonDelete = document.getElementById(`eliminar${producto.id}`)
        botonDelete.addEventListener('click', () => {
            deleteCart(producto.id)
        })
    })

    localStorage.setItem('carrito', JSON.stringify(carrito))

    contadorCarrito.innerText = carrito.length;

    totalPrecioCarrito.innerText = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
    totalCarrito = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
}