import { findRecipe } from "../../api/methods/recipes"

export function useRecipe(name: string) {
  const recipe = findRecipe(name)

  if (!recipe) {
    throw new Error('Рецепт потерялся еееекарный бабай')
  }

  return recipe
}