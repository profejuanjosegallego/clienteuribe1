let nombres=document.getElementById("nombre")
let cantidadVida=document.getElementById("cantidadVida")
let poderAtaque=document.getElementById("poderAtaque")
let poderDefensa=document.getElementById("poderDefensa")
let fotografia=document.getElementById("fotografia")
let fechaCreacion=document.getElementById("fechaCreacion")
let botonFormulario=document.getElementById("boton")

botonFormulario.addEventListener("click",function(evento){
    evento.preventDefault()
//     Swal.fire({
//         title: "The Internet?",
//         text: "That thing is still around?",
//         icon: "question"
//   });

// Swal.fire({
//   icon: "error",
//   title: "Oops...",
//   text: "Something went wrong!",
//   footer: '<a href="#">Why do I have this issue?</a>'
// });
let datosQueVoyAEnviarAlBack={
     "nombre":nombres.value,
     "cantidadVida":cantidadVida.value,
     "poderAtaque":poderAtaque.value,
     "poderDefensa":poderDefensa.value,
     "fotografia":fotografia,
      "fechaCreacion":fechaCreacion.value
    }
let datosListosParaViajar=JSON.stringify(datosQueVoyAEnviarAlBack)


})
