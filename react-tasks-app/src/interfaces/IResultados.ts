// Interface para conseguir resultados

export const emptyIResultados = (): IResultados => ({
    drinks:[{
        idDrink: -1,
        strDrink: ''
    }]
})

export interface IResultados {
    drinks:{
        idDrink: number
        strDrink: string
    }[]
}