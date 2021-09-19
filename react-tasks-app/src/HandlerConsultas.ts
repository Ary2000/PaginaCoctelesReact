import { IResultados, emptyIResultados} from "./interfaces/IResultados";

export async function realizarConsultaCoctel(nombreCoctel: string, urlConsultar: string, setResultados: React.Dispatch<React.SetStateAction<IResultados['drinks']>>) {  
    let respuesta:IResultados = emptyIResultados();
    const response = await fetch(urlConsultar + nombreCoctel)
    .then(respuesta => respuesta.json())
    .then(datos => {
        setResultados(datos['drinks']);
    });
}

//export default HandlerConsultas;