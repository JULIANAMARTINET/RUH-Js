
// Inicio de sesion

const openSesion = document.querySelector("#inicio");
const sesion = document.querySelector("#sesion")
const closeSesion = document.querySelector("#close")

// Clase para mostrar y cerrar MODAL

openSesion.addEventListener("click", (e) => {
   e.preventDefault();
 sesion.classList.add("login--show");
});

 closeSesion.addEventListener("click", (e) => {
  e.preventDefault();
   sesion.classList.remove("login--show");
  });

  const botonAcceder = document.getElementById("acceder")
  const nombreLogeado = document.getElementById("cambioLogeo")
  const botonInicio = document.getElementById("inicio")


  function bienvenida() {
   Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: "Hola " + usuario.value.toUpperCase(),
      showConfirmButton: false,
      timer: 2000
    })
   sesion.classList.remove("login--show");
   botonInicio.classList.add("login--borrar");
   let bienvenido = document.createElement("div")
   bienvenido.innerHTML = `
   <p class="botonLogin">${usuario.value.toUpperCase()} |</p>`
   nombreLogeado.appendChild(bienvenido);
  sessionStorage.setItem('usuario', JSON.stringify(usuario))
  }

  // Validacion de sesion

  botonAcceder.addEventListener("click", () => {
   let usuario = document.querySelector('#usuario').value;
   let contraseña = document.querySelector('#password').value;

  (usuario.toUpperCase() == "JULIANA") && (contraseña === "1234") ? bienvenida() :
  Swal.fire({
   icon: 'error',
   title: 'Oops...',
   text: 'Usuario o contraseña incorrecta, vuelva a intentarlo',
 })
})