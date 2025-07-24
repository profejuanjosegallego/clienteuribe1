export async function consumirAPI(datosDelFormulario){
    //1 Para que backend voy
    let url="http://localhost:8080/personajes"

    //2 Configuracion de la peticion
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:datosDelFormulario 
    }

    //3. Ir a al back
    let respuesta=await fetch(url,peticion)
    return await respuesta.json()
}