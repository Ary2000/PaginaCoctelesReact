import React from 'react'
import { IResultados } from '../interfaces/IResultados'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

// Crea y/o actualiza la lista de resultados de busqueda
const ListaResultados: React.FC<IResultados> = ({ drinks }) => {

    // Lista que crea el elemenento
    const renderList = (): JSX.Element[] => {
        return drinks.map((drink) => {
            return (
                <li>
                    <div>
                        <Link to={"/resultados/" + drink.idDrink}>{drink.strDrink}</Link>
                        <h3>{drink.idDrink}</h3>
                    </div>
                </li>
            )
        })
    }

    return (
        <ul>
            { renderList() }
        </ul>
    )
}

export default ListaResultados
