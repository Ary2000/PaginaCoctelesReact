import { IResultados, emptyIResultados} from "./interfaces/IResultados";
import { ICingredinetes, IIngrediente } from "./interfaces/InterfacesConsultas";

export async function realizarConsultaCoctel(nombreCoctel: string, urlConsultar: string) {  
    let respuesta:IResultados = emptyIResultados();
    const response = await fetch(urlConsultar + nombreCoctel)
    .then(respuesta => respuesta.json())
    .then(datos => {
        respuesta = datos;
    });
    return respuesta;
}

export async function realizarConsultaIngredientes() {  
    let respuesta:ICingredinetes = {drinks:[]};
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then(respuesta => respuesta.json())
    .then(datos => {
        respuesta = datos;
    });
    return respuesta;
}

export async function realizarConsultaDatosIngre( ingrediente:string ) {  
    let respuesta:IIngrediente = {ingredients:[]};
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingrediente)
    .then(respuesta => respuesta.json())
    .then(datos => {
        respuesta = datos;
    });
    return respuesta;
}


//export default HandlerConsultas;