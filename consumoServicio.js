export async function consumirAPI(datosDelFormulario){
    //1 Para que backend voy
    let url="localhost:8080/personajes"

    //2 Configuracion de la peticion
    let peticion={
        method:"POST",
        body:datosDelFormulario 
    }

    //3. Ir a al back
    let respuesta=await fetch(url,peticion)
    return await respuesta.json()
}