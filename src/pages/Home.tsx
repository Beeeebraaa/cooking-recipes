import { RoutableProps } from 'preact-router'
import { FC } from 'preact/compat'

import { useRecipes } from '../api/hooks/useRecipes'

export const Home: FC<RoutableProps> = () => {
  const recipes = useRecipes()

  return (
    <div class="container pb-5">
      <h1 class="text-center mt-5 mb-1">Все рецепты</h1>
      <p class="fs-4 fw-lighter text-center mb-5">
        Ингридиенты для супов указаны для средних кастрюль на одного человека
        на 2-3 дня
      </p>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-gap-40px">
        {recipes.map((recipe) => (
          <div class="col">
            <a
              class="card rounded-3 text-dark text-decoration-none"
              href={recipe.pagePathname}
            >
              <img
                class="w-100 object-fit-cover rounded-3"
                src={recipe.imageURL}
                alt=""
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">{recipe.name}</h4>
                <h5 class="card-subtitle mb-2 text-muted">
                  {recipe.timings.map((timing, index, timings) => (
                    <>
                      {timing}
                      {index !== timings.length - 1 && <br />}
                    </>
                  ))}
                </h5>
              </div>
              <div class="card-header fs-5 fw-semibold"></div>
              <ul class="list-group list-group-flush">
                {recipe.ingredients.list.map((item) => (
                  <li class="list-group-item">{item}</li>
                ))}
              </ul>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
