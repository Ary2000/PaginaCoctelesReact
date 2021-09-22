import { stringify } from "querystring"

export const emptyIIngredientes = (): IIngrediente => ({
    ingredients:[{
        idIngrediente: -1,
        strIngredient: '',
        strDescription: '',
        strType: '',
        strAlcohol: '',
        strABV: ''
    }]
})

export interface ICingredinetes {
    drinks:{
        strIngredient1: string
    }[]
}

export interface ICategorias {
    drinks:{
        strCategory: string
    }[]
}

export interface IGlass {
    drinks:{
        strGlass: string
    }[]
}

export interface IAlchoholic {
    drinks:{
        strAlcoholic: string
    }[]
}

export interface IIngrediente {
    ingredients:{
        idIngrediente: number,
        strIngredient: string,
        strDescription: string,
        strType: string,
        strAlcohol: string,
        strABV: string
    } []
}

export function instanceOfICingredientes(object: any): object is ICingredinetes['drinks'] {
    return 'strIngredient1' in object[0];
}

export function instanceOfICategorias(object: any): object is ICategorias['drinks'] {
    return 'strCategory' in object[0];
}

export function instanceOfIGlass(object: any): object is IGlass['drinks'] {
    return 'strGlass' in object[0];
}

export function instanceOfIAlchoholic(object: any): object is IAlchoholic['drinks'] {
    return 'strAlcoholic' in object[0];
}