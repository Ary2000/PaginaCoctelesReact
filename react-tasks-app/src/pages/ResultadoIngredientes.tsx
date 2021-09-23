import React, { useState, useEffect } from "react";
import IPage from "../interfaces/page";
import { RouteComponentProps, withRouter } from 'react-router';
import { IIngrediente, emptyIIngredientes } from "../interfaces/InterfacesConsultas";
import { realizarConsultaCoctel, realizarConsultaDatosIngre } from "../HandlerConsultas";



const ResultadoIngredietes: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {

    const [ingrediente, setIngrediente] = useState<IIngrediente['ingredients']>(emptyIIngredientes().ingredients);

    useEffect(() => {
        realizarConsultaDatosIngre(props.match.params.ingrediente).then(datos => {
            setIngrediente(datos.ingredients);
        });
        return () => {
            
        }
    }, [])

    return(
        <div>
            <h1>{ ingrediente[0].strIngredient }</h1>
            <h2>{ ingrediente[0].strDescription }</h2>
        </div>
    )
}

export default withRouter(ResultadoIngredietes)