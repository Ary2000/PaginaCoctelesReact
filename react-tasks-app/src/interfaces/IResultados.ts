// Interface para conseguir resultados

// Idea para optimizar tiempo si es necesario
// Crear una interfaz lite con solo los elementos que van a aparecer en el panel de resultados
export const emptyIResultados = (): IResultados => ({
    drinks:[{
        idDrink: -1,
        strDrink: '',
        strCategory: '',
        strIBA: '',
        strAlchoholic: '',
        strGlass: '',
        strInstructions: '',
        strDrinkThumb: '',
        strIngredient1: '',
        strIngredient2: '',
        strIngredient3: '',
        strIngredient4: '',
        strIngredient5: '',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strMeasure1: '',
        strMeasure2: '',
        strMeasure3: '',
        strMeasure4: '',
        strMeasure5: '',
        strMeasure6: '',
        strMeasure7: '',
        strMeasure8: '',
        strMeasure9: '',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
    }]
})

export interface IResultados {
    drinks:{
        idDrink: number
        strDrink: string
        strCategory: string
        strIBA: string
        strAlchoholic: string
        strGlass: string
        strInstructions: string
        strDrinkThumb: string
        strIngredient1: string
        strIngredient2: string
        strIngredient3: string
        strIngredient4: string
        strIngredient5: string
        strIngredient6: string
        strIngredient7: string
        strIngredient8: string
        strIngredient9: string
        strIngredient10: string
        strIngredient11: string
        strIngredient12: string
        strIngredient13: string
        strIngredient14: string
        strIngredient15: string
        strMeasure1: string
        strMeasure2: string
        strMeasure3: string
        strMeasure4: string
        strMeasure5: string
        strMeasure6: string
        strMeasure7: string
        strMeasure8: string
        strMeasure9: string
        strMeasure10: string
        strMeasure11: string
        strMeasure12: string
        strMeasure13: string
        strMeasure14: string
        strMeasure15: string
    }[]
}