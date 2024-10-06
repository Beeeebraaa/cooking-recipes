import { useRef } from 'preact/hooks'

import { getAllRecipes } from '../api/recipes'
import { useMount } from '../utils/hooks/useMount'

export const Home = () => {
  const recipes = useRef(getAllRecipes())

  return (
    <div class="container pb-5">
      <h1 class="text-center mt-5 mb-1">Все рецепты</h1>
      <p class="fs-4 fw-lighter text-center mb-5">
        (карточки ниже кликабельны и ведут на страницы с рецептами)
      </p>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-gap-40px">
        {recipes.current.map((recipe) => (
          <div class="col">
            <a
              class="card rounded-3 text-dark text-decoration-none"
              href="triangles/index.html"
            >
              <img
                class="w-100 object-fit-cover rounded-3"
                src="triangles/images/index.jpg"
                alt=""
              />
              <div class="card-body">
                <h4 class="card-title fw-bold">Өчпочмаки</h4>
                <h5 class="card-subtitle mb-2 text-muted">
                  40 минут готовки
                  <br />
                  35 минут духовки
                </h5>
              </div>
              <div class="card-header fs-5 fw-semibold"></div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Масло сливочное</li>
                <li class="list-group-item">Молоко</li>
                <li class="list-group-item">Чайная ложка сахара</li>
                <li class="list-group-item">Чайная ложка дрожжей</li>
                <li class="list-group-item">Чайная ложка соли</li>
                <li class="list-group-item">900 г. мяса</li>
                <li class="list-group-item">4 небольшие луки</li>
                <li class="list-group-item">4 маленькие картошки</li>
                <li class="list-group-item">Чеснок</li>
                <li class="list-group-item">Яйцо</li>
                <li class="list-group-item">Мука</li>
              </ul>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
