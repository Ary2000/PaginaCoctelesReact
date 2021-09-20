import { IResultados, emptyIResultados} from "./interfaces/IResultados";

export async function realizarConsultaCoctel(nombreCoctel: string, urlConsultar: string) {  
    let respuesta:IResultados = emptyIResultados();
    const response = await fetch(urlConsultar + nombreCoctel)
    .then(respuesta => respuesta.json())
    .then(datos => {
        respuesta = datos;
    });
    return respuesta;
}

//export default HandlerConsultas;