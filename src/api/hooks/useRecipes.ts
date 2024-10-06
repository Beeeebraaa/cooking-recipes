import { useRef } from 'preact/hooks'

import { getAllRecipes } from '../methods/recipes'

export function useRecipes() {
  const recipes = useRef(getAllRecipes())

  return recipes.current
}
