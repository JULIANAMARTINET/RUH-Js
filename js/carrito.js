class Productos {
  constructor(id, cat, nombre, precio, img) {
    this.id = id;
    this.cat = cat
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

const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const contadorCarrito = document.getElementById('contadorCarrito')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const pagarCarrito = document.getElementById('pagarCarrito')
const totalPrecioCarrito = document.getElementById('totalPrecioCarrito')
const cantidadTotal = document.getElementById('cantidadTotal')
const all = document.getElementById("allProduct")
const sahumerios = document.getElementById("sahumerios")
const defumadores = document.getElementById("defumadores")
const velas = document.getElementById("velas")

let carrito = [];

carrito = JSON.parse(localStorage.getItem("carrito")) || [];

stockProductos = [];

const buscarProductos = async () => {
  const respuesta = await fetch("./api/productos.json");
  const data = await respuesta.json();

  data.forEach((producto) => {
    stockProductos.push(new Productos(producto.id, producto.cat, producto.nombre, producto.precio, producto.img))
  });
  renderizacionProductos()
}
buscarProductos()

function renderizacionProductos() {
  for (const producto of stockProductos) {
    let card = document.createElement('div');
    card.classList.add("cont-card");
    card.classList.add("p-4");
    card.classList.add("col-lg-3");
    card.classList.add("col-md-4");
    card.classList.add("col-sm-5");
    card.innerHTML = `
             <figure class="card card-home">
                <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
                <p class="card-title">${producto.nombre} </p>
                <p class="card-text">$ ${producto.precio}</p>
                <button class="btn btn-primary" id="p${producto.id}">Agregar al Carrito</button>
             </figure>
           `;
    contenedorProductos.appendChild(card);
    const boton = document.getElementById(`p${producto.id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  }
}
renderizacionProductos()

function filtrado(parametro) {
  parametro.forEach(producto => {
    let card = document.createElement('div');
    card.classList.add("cont-card");
    card.classList.add("p-4");
    card.classList.add("col-lg-3");
    card.classList.add("col-md-4");
    card.classList.add("col-sm-5");
    card.innerHTML = `
             <figure class="card card-home">
                <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
                <p class="card-title">${producto.nombre} </p>
                <p class="card-text">$ ${producto.precio}</p>
                <button class="btn btn-primary" id="p${producto.id}">Agregar al Carrito</button>
             </figure>
           `;
    contenedorProductos.appendChild(card);
    const boton = document.getElementById(`p${producto.id}`);
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });
  })
}

let filtro = [];

sahumerios.addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  filtro = stockProductos.filter(producto => producto.cat === "shaumerios");
  filtrado(filtro)
});

defumadores.addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  filtro = stockProductos.filter(producto => producto.cat === "defumadores");
  filtrado(filtro)
});

velas.addEventListener("click", () => {
  contenedorProductos.innerHTML = "";
  filtro = stockProductos.filter(producto => producto.cat === "velas");
  filtrado(filtro)
});

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
    carrito.push(new Productos(newProducto.id, newProducto.cat, newProducto.nombre, newProducto.precio, newProducto.img));
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