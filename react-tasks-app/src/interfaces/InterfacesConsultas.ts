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