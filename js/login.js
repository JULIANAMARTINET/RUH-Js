// Inicio de sesion
const openSesion = document.querySelector("#inicio");
const sesion = document.querySelector("#sesion")
const closeSesion = document.querySelector("#close")
const botonAcceder = document.getElementById("acceder")
const nombreLogeado = document.getElementById("cambioLogeo")
const botonInicio = document.getElementById("inicio")
const cusuarioLocal = sessionStorage.getItem("usuarios")

// Clase para mostrar y cerrar MODAL
openSesion.addEventListener("click", (e) => {
  e.preventDefault();
  sesion.classList.add("login--show");
});

closeSesion.addEventListener("click", (e) => {
  e.preventDefault();
  sesion.classList.remove("login--show");
});

let usuarios = [];
usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];

// Validacion de sesion

botonAcceder.addEventListener("click", () => {
  let usuario = document.querySelector('#usuario').value;
  let contraseña = document.querySelector('#password').value;

  if ((usuario.toUpperCase() == "JULIANA") && (contraseña === "1234")) {
    usuarios.push("juliana");
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: "Hola " + usuario.toUpperCase(),
      showConfirmButton: false,
      timer: 2000
    });
    bienvenida()

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario o contraseña incorrecta, vuelva a intentarlo',
    })
  }
})

// funcion para cerrar sesion
const logout = () => {
  Swal.fire({
    title: '¿Quieres cerrar sesion?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí'
  }).then((result) => {
    if (result.isConfirmed) {
      usuarios.shift()
      Swal.fire({
        position: 'top-center',
        title: 'Sesion finalizada',
        text: 'Te esperamos Pronto!!',
        showConfirmButton: false,
        icon: 'success',
        timer: 3000
      });
      bienvenida()
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  })
}

// funcion de bienvenida y logeo exitoso
function bienvenida() {
  if (usuarios.length === 1) {
    sesion.classList.remove("login--show");
    botonInicio.classList.add("login--borrar");
    let bienvenido = document.createElement("div")
    bienvenido.innerHTML = `
   <p id="logout" class="botonLogin">${usuarios[0].toUpperCase()} |</p>`
    nombreLogeado.appendChild(bienvenido);
    const btnLogout = document.getElementById(`logout`)
    btnLogout.addEventListener('click', () => {
      logout()
    })
  }
  sessionStorage.setItem('usuarios', JSON.stringify(usuarios))
}
bienvenida()