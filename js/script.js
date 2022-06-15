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

