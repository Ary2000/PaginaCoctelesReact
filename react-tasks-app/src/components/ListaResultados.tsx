import React from 'react'
import { IStateLR as IPropsLR } from '../App'

// Crea y/o actualiza la lista de resultados de busqueda
const ListaResultados: React.FC<IPropsLR> = ({ drinks }) => {

    // Lista que crea el elemenento
    const renderList = (): JSX.Element[] => {
        return drinks.map((drink) => {
            return (
                <li>
                    <div>
                        <h2>{drink.strDrink}</h2>
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
