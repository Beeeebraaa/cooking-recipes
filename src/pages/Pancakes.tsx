import { RoutableProps } from 'preact-router'
import { FC } from 'preact/compat'
import { RecipeStats } from '../components/RecipeStats'
import { useRecipe } from '../utils/hooks/useRecipe'
import { Media } from '../components/Media'

export const Pancakes: FC<RoutableProps> = () => {
  const recipe = useRecipe('Панкейки')



  return (
    <div class="container">
      <RecipeStats {...recipe} />

      <h3 class="mt-5 mb-4">1. Делаем тесто</h3>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3" src="./recipes-images/pancakes/1.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Добавляем в миску: 8 столовых ложек муки, 2 столовые ложки сахара, 0.5 чайной ложки соли. Перемешиваем все это.</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Добавляем в миску яйцо и размешиваем.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3" src="./recipes-images/pancakes/2.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Добавляем в стакан: 0.5 чайной ложки соды, 1 чайную ложку лимонного сока. Сода долга вспениться.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3" src="./recipes-images/pancakes/3.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Добавляем в стакан молоко.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <Media src="./recipes-images/pancakes/4.mp4" maxWidth={300} maxHeight={300} />
        <p class="bg-warning bg-opacity-75">Наливаем стакан в миску и перемешиваем. Если масса слишкам густая, то добавляем еще молока. Должно получиться так как на видео выше</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Добавляем в миску 3 столовые ложки оливкового / подсолнечного масла. Перемешиваем.</p>
      </div>

      <h3 class="mt-5 mb-4">2. Жарим</h3>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <Media src="./recipes-images/pancakes/5.mp4" maxWidth={500} maxHeight={300} />
        <p class="bg-warning bg-opacity-75">Выкладываем ложку полученной массы на скороводку.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <Media src="./recipes-images/pancakes/6.mp4" maxWidth={300} maxHeight={500} />
        <p class="bg-warning bg-opacity-75">Когда появляются пузырики - переворачиваем.</p>
      </div>

    </div>
  )
}
