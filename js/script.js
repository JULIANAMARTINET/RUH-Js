window.addEventListener("scroll", function () {
  let header = document.querySelector("#header-home");
  header.classList.toggle("down", window.scrollY > 0);
});

// -- Desafio --

// Inicio de sesion

let usuario = prompt("Ingrese su nombre de usuario");
let contraseña = " ";

while (usuario.toUpperCase() != "JULIANA") {
  alert("nombre de usuario incorrecto, vuelve a intentarlo");
  usuario = prompt("Ingrese su nombre de usuario");
}

contraseña = prompt("Hola " + usuario + " Ingrese su contraseña");

for (i = 2; i >= 1; i--) {
  if (contraseña == 1234) {
    alert("Bienvenido/a " + usuario);
    break;
  }
  alert("contraseña incorrecta, le quedan " + i + " intentos");
  contraseña = prompt("Hola " + usuario + " Ingrese su contraseña");
}

if (contraseña != 1234)
  alert("Ha superado la cantidad de intentos, su cuenta ha sido bloqueada");

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