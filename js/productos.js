class Producto {
  constructor(id, nombre, precio, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = 1;
    this.inPortfolio = false;
  }
  addToPorfolio() {
    this.cantidad++;
    this.inPortfolio = true;
  }
  actualizarPrecioTotal() {
    this.totalPrecio = this.precio * this.cantidad;
  }
}

// array de stock de productos
const stockProductos = [];

//Pusheo los productos al Stock
stockProductos.push(new Producto("01", "Linea Palo Santo", 400, '../img/Prod-Palo-Santo.png'));
stockProductos.push(new Producto("02", "Linea Natural", 450, '../img/prod-s-natural.png'));
stockProductos.push(new Producto("03", "Linea Premium", 500, '../img/prod-s-premium.png'));
stockProductos.push(new Producto("04", "Porta Sahumerio Madera", 250, '../img/prod-porta-shau.png'));
stockProductos.push(new Producto("05", "Ramillo de Sahumo", 500, '../img/prod-sahumo-1.png'));
stockProductos.push(new Producto("06", "Pastillas Defumadoras", 600, '../img/prod-Pastillas.png'));
stockProductos.push(new Producto("07", "Piramides Defumadoras", 600, '../img/prod-piramide.png'));
stockProductos.push(new Producto("08", "Bombitas Defumadoras", 600, '../img/prod-bombitas.png'));
stockProductos.push(new Producto("09", "Bombitas 7 Chakras", 700, '../img/prod-siete-chacras.png'));
stockProductos.push(new Producto("10", "Sahumador de Ceramica", 1200, '../img/prod-sahumadores.png'));
stockProductos.push(new Producto("11", "Vela Con Flores", 800, '../img/prod-velas.png'));
stockProductos.push(new Producto("12", "Mini Velas Madera", 300, '../img/prod-velitas.png'));


const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("carrito-contenedor")
const contadorCarrito = document.getElementById('contadorCarrito')
const vaciarCarrito = document.getElementById('vaciarCarrito')
const pagarCarrito = document.getElementById('pagarCarrito')
const totalPrecioCarrito = document.getElementById('totalPrecioCarrito')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
  }
})

stockProductos.forEach((producto) => {
  let card = document.createElement("div")
  card.innerHTML = `
  <figure class="card m-4">
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        <p class="card-title">${producto.nombre} </p>
        <p class="card-text">$ ${producto.precio}</p>
        <button class="btn btn-primary" id="p${producto.id}">Agregar al Carrito</button>
  </figure> 
  `
  contenedorProductos.appendChild(card);

  const boton = document.getElementById(`p${producto.id}`)
  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id)
  })

})

// Funcion argegar al carrito

const agregarAlCarrito = (productoId) => {
  const item = carrito.find((producto) => producto.id === productoId);
  if (item) {
    let index = carrito.findIndex((producto) => producto.id === item.id);
    carrito[index].addToPorfolio();
    carrito[index].actualizarPrecioTotal();
  } else {
    let newProducto = stockProductos.find((producto) => producto.id === productoId);
    carrito.push(newProducto);
    carrito[carrito.length - 1].actualizarPrecioTotal();

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

  contadorCarrito.innerText = carrito.length

  totalPrecioCarrito.innerText = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
  totalCarrito = carrito.reduce((total, elemento) => total + elemento.totalPrecio, 0);
}