window.addEventListener("scroll", function () {
  let header = document.querySelector("#header-home");
  header.classList.toggle("down", window.scrollY > 0);
});

// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('#thumbnail-carousel', {
//     //   fixedWidth : 200,
//     gap: 3,
//     rewind: true,
//     pagination: false,
//     perMove: 1,
//     type: 'loop',
//     focus: 2 | 'center',
//     perPage: 4,
//     speed: 400,
//     autoplay: true,
//     interval: 3000
//   }).mount();
// });

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

// Detalle de productos

const productos = [
  { id: 1, producto: "VELAS AROMATICAS", precio: 60 },
  { id: 2, producto: "SAHUMERIOS", precio: 20 },
];

for (const producto of productos) {
  console.log(producto.producto);
}

// Carrito de compras

let acumulador = 0;

function carrito() {
  switch (producto) {
    case "VELAS AROMATICAS":
      precioCompra = cantidad * 60;
      acumulador += precioCompra;
      return alert("El total de su compra es de $" + acumulador);
    case "SAHUMERIOS":
      precioCompra = cantidad * 20;
      acumulador += precioCompra;
      return alert("El total de su compra es de $ " + acumulador);
    default:
      return alert("operacion incorrecta");
  }
}

while (true) {
  producto = prompt(
    "¿Qué producto te gustaria agregar al carrito? \n VELAS AROMATICAS ($60), \n SAHUMERIOS ($20)"
  ).toUpperCase();
  cantidad = prompt("¿Qué cantidad de " + producto + " queres?");
  carrito(producto);
  let exit = prompt(
    "¿Quieres seguir comprando? \n Escriba \n SI - Para continuar \n ESC - Para finalizar la compra"
  ).toUpperCase();
  if (exit == "ESC") {
    break;
  }
}
