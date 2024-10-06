import recipes from '../../public/recipes.json'

type RecipeEntity = {
  imageURL: string
  name: string
  timings: string[]
  ingredients: {
    header: string
    list: string[]
  }
}

export function getAllRecipes() {
  return recipes as RecipeEntity[]
}
