import React, { useState } from 'react'
import { ICingredinetes } from '../interfaces/InterfacesConsultas'

const ComboBox:React.FC<ICingredinetes> = ({ drinks }) => {

    const createValuesCB = ():JSX.Element[] => {
        return drinks.map((ingrediente) => {
            return(
                <option value={ingrediente.strIngredient1}>{ingrediente.strIngredient1}</option>
            )
        })
    }

    return(
        <select name="ingredientes" id="ingredientes">
            <option value="nada"></option>
            {createValuesCB()}
        </select>
    )
}

export default ComboBox