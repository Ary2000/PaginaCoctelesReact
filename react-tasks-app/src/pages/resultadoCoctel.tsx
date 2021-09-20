import React, {useEffect, useState} from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import logging from '../config/logging';
import IPage from '../interfaces/page';
import { IResultados } from '../interfaces/IResultados';
import { realizarConsultaCoctel } from '../HandlerConsultas';

const ResultadoCoctel: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<IResultados['drinks']>([{idDrink: -1, strDrink:'Nada'}]);
    
    useEffect(() => {
        realizarConsultaCoctel(props.match.params.idCoctel, 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=').then(datos => {
            setMessage(datos.drinks);
        });
    }, [])

    return (
        <div>
            <h1>{ message[0].strDrink }</h1>
        </div>
    );
}

export default withRouter(ResultadoCoctel);