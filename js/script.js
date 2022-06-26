 window.addEventListener("scroll", function () {
   let header = document.querySelector("#header-home");
   header.classList.toggle("down", window.scrollY > 0);
 })

// // -- Desafio --

// // Inicio de sesion

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

  // Validacion de sesion

  botonAcceder.addEventListener("click", () => {  
     let usuario = document.querySelector('#usuario').value;
     let contraseña = document.querySelector('#password').value;

     if ((usuario.toUpperCase() == "JULIANA") && (contraseña === "1234"))  {

         alert(`Bienvenido/a ${usuario}. 😄`)
          sesion.classList.remove("login--show");
          botonInicio.classList.add("login--borrar");
          let bienvenido = document.createElement("div")
          bienvenido.innerHTML = `
          <p class="botonLogin">${usuario.toUpperCase()} |</p>`
   
          nombreLogeado.appendChild(bienvenido);
      }
      else { 
         alert("Usuario o contraseña incorrecta, vuelva a intentarlo") }
  });
    
