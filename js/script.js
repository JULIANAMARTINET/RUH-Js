window.addEventListener("scroll", function () {
  let header = document.querySelector("#header-home");
  header.classList.toggle("down", window.scrollY > 0);
})

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#thumbnail-carousel', {
    //   fixedWidth : 200,
    gap: 3,
    rewind: true,
    pagination: false,
    perMove: 1,
    type: 'loop',
    focus: 2 | 'center',
    perPage: 4,
    speed: 400,
    autoplay: true,
    interval: 3000
  }).mount();
});

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


const suma = (n1, n2) => n1 + n2
const multiplicar = (n1, n2) => n1 * n2

let producto2= " "
let cantProd2 = " ";

let producto1 = prompt("¿Que producto te gustaria comprar? \n Velas Aromaticas ($60),\n Sahumerios($20)")
let cantProd1 = prompt("¿Que cantidad de " + producto1 + " queres?")
if (producto1 == "Velas Aromaticas") {
 producto1 = 60
} else if (producto1 == "Sahumerios") {
  producto1 = 20
} else alert("operacion incorrecta")

 let exit = (prompt("Te gustaria sumar otro producto a tu carrito? \n escribe SI si desea continuar o escriba ESC para finalizar la compra"))

while (exit != "ESC") {

 producto2 = prompt("¿Que producto te gustaria agregar? \n Velas Aromatica ($60),\n Sahumerios ($20)")
 cantProd2 = prompt("¿Que cantidad de " + producto2 + " queres?")

if (producto2 == "Velas Aromaticas") {
  producto2 = 60
 } else if (producto2 == "Sahumerios") {
   producto2 = 20
 } else alert("operacion incorrecta")

 exit = prompt("escribe ESC para finalizar la compra")
}
 

let precioCompra = suma(multiplicar(producto1, cantProd1), multiplicar(producto2, cantProd2));
alert("El total de su compra es de " + precioCompra)

