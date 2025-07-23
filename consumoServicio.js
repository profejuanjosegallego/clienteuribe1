export async function cosumirAPI(datosdelformulario) {
    let url="localhost:8080/personajes"

    let peticion={
        methot:"POST",
        body:datosdelformulario
    }
    

    let respuesta=await fetch(url,peticion)
    return await respuesta. json()
}