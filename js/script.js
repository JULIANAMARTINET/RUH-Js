window.addEventListener("scroll", function () {
  let header = document.querySelector("#header-home");
  header.classList.toggle("down", window.scrollY > 0);
})

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

let usuario = prompt("Ingrese su nombre de usuario");
let contraseña = " ";

while (usuario != "Juliana") {
  alert("nombre de usuario incorrecto, vuelve a intentarlo");
  usuario = prompt("Ingrese su nombre de usuario");
}

contraseña = prompt("Hola " + usuario + " Ingrese su contraseña");


for (i = 2; i >= 1; i--) {
  if (contraseña == 1234) {
    alert("Bienvenido/a " + usuario);
    break;
  }
  alert("contraseña incorrecta, le quedan " + i + " intentos")
  contraseña = prompt("Hola " + usuario + " Ingrese su contraseña");
}

if (contraseña != 1234)
  alert("Ha superado la cantidad de intentos, su cuenta ha sido bloqueada")


let acumulador = 0;

function carrito() {
  switch (producto) {
    case "Velas Aromaticas":
      precioCompra = cantidad * 60;
      acumulador = acumulador + precioCompra
    return alert("El total de su compra es de $" + acumulador);
    case "Sahumerios":
      precioCompra = cantidad * 20;
      acumulador = acumulador + precioCompra
     return alert("El total de su compra es de $ " + acumulador);
    default:
      return alert("operacion incorrecta") 
  }
}

while (true) {
  producto = prompt("¿Qué producto te gustaria agregar al carrito? \n Velas Aromaticas ($60), \n Sahumerios (20)")
  cantidad = prompt("¿Qué cantidad de " + producto + " queres?")
  carrito(producto)
  let exit = prompt("¿Quieres seguir comprando? \n Escriba \n Si - Para continuar \n ESC - Para finalizar la compra")
  if (exit == "ESC") {
    break;
  }
}

