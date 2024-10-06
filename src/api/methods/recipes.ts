import r from '../../../public/recipes.json'

type RecipeEntity = {
  imageURL: string
  pagePathname: string
  name: string
  timings: string[]
  ingredients: {
    header: string
    list: string[]
  }
}

const recipes = r as RecipeEntity[]

export function getAllRecipes() {
  return recipes
}

export function findRecipe(name: string) {
  return recipes.find((recipe) => name === recipe.name)
}
