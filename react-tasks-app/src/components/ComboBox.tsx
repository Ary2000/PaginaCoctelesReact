import React, { useState } from 'react'
import { ICingredinetes, ICategorias, instanceOfICingredientes, instanceOfICategorias, instanceOfIGlass, instanceOfIAlchoholic } from '../interfaces/InterfacesConsultas'

interface IComboBox{
    elementos: any
    nombreBoton: string
    idBoton: string
}

// <ICingredinetes | ICategorias>
const ComboBox:React.FC<IComboBox> = ({elementos, nombreBoton, idBoton}: IComboBox) => {

    const createValuesCB = ():JSX.Element[] => {
        if(instanceOfICingredientes(elementos))
            return elementos.map((ingrediente) => {
                return(
                    <option value={ingrediente.strIngredient1}>{ingrediente.strIngredient1}</option>
                )
            })
        else if(instanceOfICategorias(elementos))
            return elementos.map((categoria) => {
                return(
                    <option value={categoria.strCategory}>{categoria.strCategory}</option>
                )
            })
        else if(instanceOfIGlass(elementos))
            return elementos.map((glass) => {
                return(
                    <option value={glass.strGlass}>{glass.strGlass}</option>
                )
            })
        else if(instanceOfIAlchoholic(elementos))
            return elementos.map((alchohol) => {
                return(
                    <option value={alchohol.strAlcoholic}>{alchohol.strAlcoholic}</option>
                )
            })
        else {
            return [(<h1>nada</h1>)];
        }
    }

    return(
        <select name={nombreBoton} id={idBoton}>
            <option value="nada"></option>
            { createValuesCB() }
        </select>
    )
}

export default ComboBox