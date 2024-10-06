import { RoutableProps } from 'preact-router'
import { FC } from 'preact/compat'
import { RecipeStats } from '../components/RecipeStats'
import { useRecipe } from '../utils/hooks/useRecipe'

export const PotatoWithMeat: FC<RoutableProps> = () => {
  const recipe = useRecipe('Тушеная картошка с мясом')

  return (
    <div class="container">
      <RecipeStats {...recipe} />

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Моем, чистим и нарезаем картошку кубиками. Кладем ее в воду, чтобы она отмокла и вышел крахмал</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Моем, чистим и натираем мелко лук. Тушим до золотистого цвета</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Моем, чистим, натираем морковь и добавляем ее в сковородку</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Чистим и натираем чеснок. Спустя 3 минуты добавляем в сковородку</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Моем, нарезаем мясо и спустя 5 минут добавляем в сковородку</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Как курица побелеет, добавляем картошку в сковородку. Наливаем пол стакана воды в сковородку</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Добавляем 1 чайную ложку? соли, перец и приправу</p>
      </div>
    </div>)
}
