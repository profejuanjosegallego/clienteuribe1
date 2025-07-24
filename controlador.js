import { consumirAPI } from "./consumoServicio.js"

//Referencias al formulario
let nombres=document.getElementById("nombres")
let cantidadVida=document.getElementById("cantidad")
let poderAtaque=document.getElementById("ataque")
let poderDefensa=document.getElementById("defensa")
let fotografia=document.getElementById("foto")
let fechaCreacion=document.getElementById("fecha")
let botonFormulario=document.getElementById("boton")

//Detecto el evento de hacerle clic al boton
botonFormulario.addEventListener("click",function(evento){
    evento.preventDefault()
    
    /*Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });*/
    let datosQueVoyAEnviarAlBack={
        "nombre":nombres.value,
        "cantidadVida":cantidadVida.value,
        "poderAtaque":poderAtaque.value,
        "poderDefensa":poderDefensa.value,
        "fotografia":fotografia.value,
        "fechaCreacion":fechaCreacion.value
    }
    let datosListosParaViajar=JSON.stringify(datosQueVoyAEnviarAlBack)

    
    //LLAMO AL CONSUMO
    consumirAPI(datosListosParaViajar)
    .then(function(respuesta){

        Swal.fire({
        title: "Buen Trabajo!",
        text: "Hemos registrado el perosnaje con exito",
        icon: "success"
        });
        
    })

})
