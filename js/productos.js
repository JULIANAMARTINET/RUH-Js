// Carrito de compras 

class Productos {
    constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre.toUpperCase();
      this.precio = Number(precio);
    }
    precioIva() {
      this.precio *= 1.21
    }
  }
  
  const productos = [];
  let producto;
  let total = 0
  let carrito = []
  productos.push(new Productos(1, "VELAS AROMATICAS", 60));
  productos.push(new Productos(2, "SAHUMERIOS", 20));
  productos.push(new Productos(3, "SAHUMOS", 30));
  productos.push(new Productos(4, "DEFUMADORES", 40));
  
  productos.filter(el => {
    el.precioIva()
  });
  
  function compra(pregunta) {
    carrito.push(productos.find(el => el.id == pregunta));
  }
  
  function totalCarrito() {
    total = carrito.reduce((acc, el) => acc + el.precio, 0).toFixed(2);
  }
  
  while (true) {
    let pregunta = prompt("¿Qué producto te gustaria agregar al carrito? \n (Ingresa el numero correspondiente al producto \n \n 1- Velas Aromaticas \n 2- Sahumerios \n 3- Sahumos \n 4- Defumadores \n Escriba ESC para finalizar compra").toUpperCase();
    if (pregunta == "ESC") {
      totalCarrito();
      console.log(carrito)
      alert(`Su compra Total es de ${total}`)
      break;
    } else {
      compra(Number(pregunta))
    }
  }