import React, {createElement, useEffect, useState} from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import logging from '../config/logging';
import IPage from '../interfaces/page';
import { IResultados, emptyIResultados } from '../interfaces/IResultados';
import { realizarConsultaCoctel } from '../HandlerConsultas';
import { Link } from 'react-router-dom';

const ResultadoCoctel: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {

    const listaIngredientes:string[] = [
        "strIngredient1",
        "strIngredient2",
        "strIngredient3",
        "strIngredient4",
        "strIngredient5",
        "strIngredient6",
        "strIngredient7",
        "strIngredient8",
        "strIngredient9",
        "strIngredient10",
        "strIngredient11",
        "strIngredient12",
        "strIngredient13",
        "strIngredient14",
        "strIngredient15"
    ];

    const [message, setMessage] = useState<IResultados['drinks']>(emptyIResultados()['drinks']);
    

    useEffect(() => {
        realizarConsultaCoctel(props.match.params.idCoctel, 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=').then(datos => {
            setMessage(datos.drinks);
        });
    }, [])

    //return JSX.Element
    const cargarIngredientes = () => {
        return listaIngredientes.map(key => {
            if((message[0] as any )[key] != null){
                return(
                    <>
                    <Link to={ '/ingredientes/' + (message[0] as any )[key] }>{ (message[0] as any )[key] }</Link>
                    <br></br>
                    </>
                )
            }
        })
    }

    return (
        <div>
            <h1>{ message[0].strDrink }</h1>
            <h2>{ message[0].strInstructions }</h2>
            { cargarIngredientes() }
        </div>
    );
}

export default withRouter(ResultadoCoctel);