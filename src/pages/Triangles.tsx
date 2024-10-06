import { RoutableProps } from 'preact-router'
import { FC } from 'preact/compat'
import { RecipeStats } from '../components/RecipeStats'
import { useRecipe } from '../utils/hooks/useRecipe'

export const Triangles: FC<RoutableProps> = () => {
  const recipe = useRecipe('Өчпочмаки')

  return (
    <div class="container">
      <RecipeStats {...recipe} />

      <h3 class="mt-5 mb-4">1. Делаем тесто</h3>

      <img class="d-block w-100 h-100 max-width-400 max-height-200 object-fit-cover rounded-3 mb-2" src="/recipes-images/triangles/2.jpg"
        alt="" />
      <p class="d-inline bg-warning bg-opacity-75">Разрезаем сливочное масло и оставляем нагреваться.</p>

      <img class="d-block w-100 h-100 max-width-300 max-height-200 object-fit-cover rounded-3 mt-5 mb-2"
        src="/recipes-images/triangles/1.jpg" alt="" />
      <p class="d-inline bg-warning bg-opacity-75">Греем стакан молока, добавляем в него чайные ложки сахара и дрожжей.
        Оставляем на 10 минут.</p>

      <img class="d-block w-100 h-100 max-width-300 max-height-400 object-fit-cover rounded-3 mt-5 mb-2"
        src="/recipes-images/triangles/3.jpg" alt="" />
      <p class="d-block bg-warning bg-opacity-75">Спустя 10 минут перекладываем все из стакана в миску, добавляем туда еще
        стакан воды / молока и заготовленное масло. Добавляем чайную ложку соли и сырое яйцо.</p>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-200 object-fit-cover rounded-3" src="/recipes-images/triangles/4.jpg" alt="" />
        <img class="w-100 h-100 max-width-400 max-height-200 object-fit-cover rounded-3" src="/recipes-images/triangles/5.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Добавляем примерно 20 столовых ложек муки с горками, тщательно перемешивания и
          взбивая руками после каждых 4-5 ложек. Итоговое тесто не должно прилипать к рукам или другой поверхности.</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-500 max-height-300 object-fit-cover rounded-3" src="/recipes-images/triangles/6.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Разделяем тесто на 18 ровных кусочков. Если вдруг они все еще прилипают, то
          нужно добавить муки.</p>
      </div>

      <h3 class="mt-5 mb-4">2. Делаем фарш</h3>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Прокручиваем 900 г. мяса (свинина и говядина), 2 небольших лука и 1 чеснок
          через мясорубку.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-400 max-height-300 object-fit-cover rounded-3" src="/recipes-images/triangles/7.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Чистим 4 маленькие кортошки и 2 небольших лука.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-200 object-fit-cover rounded-3" src="/recipes-images/triangles/8.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Мелко нарезаем и перемешиваем в миске с фаршем.</p>
      </div>

      <h3 class="mt-5 mb-4">3. Лепим</h3>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-200 object-fit-cover rounded-3" src="/recipes-images/triangles/9.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Давим куски теста в тонкую лепешку и пальцами равномерно распределяем объем.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3" src="/recipes-images/triangles/10.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Кладем 2 средние ложки фарша с горками.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3" src="/recipes-images/triangles/11.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Заворачиваем лепешку в треугольник, не оставляя дырок. Делаем гребешки сверху
          для уплотнения конструкции.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-500 max-height-200 object-fit-cover rounded-3" src="/recipes-images/triangles/12.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Складываем треугольники на противне, предварительно обмазав его подсолнечным
          маслом. Ставим в духовку на 35 минут при 160 градусах.</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">После приготовления накрыть мокрым полотенцем и оставить томиться на 10 минут.
        </p>
      </div>
    </div>
  )
}
