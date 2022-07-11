class Producto {
  constructor(producto) {
    this.id = producto.id;
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.img = producto.img;
    this.cantidad = 1;
  }
  addToPorfolio() {
    this.cantidad++;
  }
  actualizarPrecioTotal() {
    this.totalPrecio = this.precio * this.cantidad;
  }
}

const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const contadorCarrito = document.getElementById('contadorCarrito')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const pagarCarrito = document.getElementById('pagarCarrito')
const totalPrecioCarrito = document.getElementById('totalPrecioCarrito')
const cantidadTotal = document.getElementById('cantidadTotal')

const allProduct = document.getElementById("allProduct")
const sahumerios = document.getElementById("sahumerios")
const defumadores = document.getElementById("defumadores")
const velas = document.getElementById("velas")


// sahumerios.addEventListener("click", () => {
//   printProductos()
// })

// sahumerios.onclick = () => {
//   printProductos()
// }

let carrito = [];

carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const printProductos = async () => {
  const respuesta = await fetch("./api/productos.json");
  const data = await respuesta.json();
  stockProductos = data;
  stockProductos.forEach((producto) => {
    let card = document.createElement("div");
    card.innerHTML = `
         <figure class="card m-4">
               <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
               <p class="card-title">${producto.nombre} </p>
               <p class="card-text">$ ${producto.precio}</p>
               <button class="btn btn-primary" id="p${producto.id}">Agregar al Carrito</button>
         </figure> `;
    contenedorProductos.appendChild(card);
    const boton = document.getElementById(`p${producto.id}`)
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id)
    })
  })
}

printProductos()


// Funcion argegar al carrito

const agregarAlCarrito = (productoId) => {
  const item = carrito.find((producto) => producto.id === productoId);
  if (item) {
    function addToPorfolio() {
      item.cantidad++;
    }
    addToPorfolio();

    function actualizarPrecioTotal() {
      item.totalPrecio = item.precio * item.cantidad;
    }
    actualizarPrecioTotal()

    Toastify({
      text: `${item.nombre} se agrego al carrito 🎉`,
      duration: 3000,
      gravity: 'top',
      className: "notiCarrito",
      position: 'center',
      backgroundColor: "gray",
    }).showToast();

  } else {
    let newProducto = stockProductos.find((producto) => producto.id === productoId);
    carrito.push(new Producto(newProducto));
    carrito[carrito.length - 1].actualizarPrecioTotal()

    Toastify({
      text: `${newProducto.nombre} se agrego al carrito 🎉`,
      duration: 3000,
      gravity: 'top',
      className: "notiCarrito",
      position: 'center',
      backgroundColor: "gray",
    }).showToast();
  }
  actualizarCarrito()
}

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
  Swal.fire(`Tu compra total es de $${totalCarrito}. Gracias! 🎉`)
  carrito.length = 0;
  actualizarCarrito()
})

// Funcion crear producto al carrito

const actualizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  if (carrito.length === 0) {
    let aviso = document.createElement("div");
    aviso.innerHTML =
      `<p class="carritoVacio"> El carrito de compras está vacío </p>`
    contenedorCarrito.appendChild(aviso);
  } else {
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
  }

  localStorage.setItem('carrito', JSON.stringify(carrito))

  contadorCarrito.innerText = carrito.length

  totalPrecioCarrito.innerText = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
  totalCarrito = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
}

actualizarCarrito()