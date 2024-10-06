import { RoutableProps } from "preact-router"
import { FC } from "preact/compat"
import { RecipeStats } from "../components/RecipeStats"
import { useRecipe } from "../utils/hooks/useRecipe"

export const FrenchPotato: FC<RoutableProps> = () => {
  const recipe = useRecipe('Картошка по французски')
  
  return (
    <div class="container">
      <RecipeStats {...recipe} />

      <h3 class="mt-5 mb-4">1. Готовка</h3>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-500 max-height-300 object-fit-cover rounded-3" src="/recipes-images/french-potato/1.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Чистим картошку.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3" src="/recipes-images/french-potato/4.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Нарезаем картошку на мелкие части, добавляем майонез, 1 ложку соли и немного
          перца.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-500 max-height-400 object-fit-cover rounded-3" src="/recipes-images/french-potato/2.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Обмазываем сковороду маслом и выкладываем фарш.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-200 object-fit-cover rounded-3" src="/recipes-images/french-potato/3.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Чистим и нарезаем лук среднего размера.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-400 max-height-500 object-fit-cover rounded-3" src="/recipes-images/french-potato/5.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Распределяем лук по мясу.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-400 max-height-500 object-fit-cover rounded-3" src="/recipes-images/french-potato/6.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Выкладываем картошку, добавляем приправу. Ставим в духовку на 35 минут 120 градусов</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-400 object-fit-cover rounded-3" src="/recipes-images/french-potato/7.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Кладём сыр. Ставим в духовку на 12 минут с 140 градусами</p>
      </div>
    </div>
  )
}
