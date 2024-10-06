import { RoutableProps } from 'preact-router'
import { FC } from 'preact/compat'

import { RecipeStats } from '../components/RecipeStats'
import { useRecipe } from '../utils/hooks/useRecipe'

export const Borsch: FC<RoutableProps> = () => {
  const recipe = useRecipe('Борщ')

  return (
    <div class="container">
      <RecipeStats {...recipe} />

      <h3 class="mt-5 mb-4">1. Варим мясо</h3>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/1.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">
          Наливаем чуть больше пол кастрюли и варим мясо 1 час на маленьком
          огне.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-400 object-fit-cover rounded-3"
          src="/recipes-images/borsch/2.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">
          Спустя час нарезаем мясо и кидаем в кастрюлю.
        </p>
      </div>

      <h3 class="mt-5 mb-4">2. Варим суп</h3>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/3.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">Чистим и моем большую свеклу.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/4.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">
          Отрезаем попку и откладываем в сторону, основную часть разрезаем на 3
          части и кидаем в кастрюлю.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">
          Ставим кастрюлю на огонь для закипения. После того как закипит, делаем
          маленький огонь.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/5.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">Разрезаем попку на мелкие части.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/6.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">
          Чистим 3 небольшие картошки, нарезаем и закидываем в суп.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/7.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">Чистим морковь.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/8.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">Натираем морковь и нарезаем лук.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/9.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">
          Обжариваем свеклу, морковь и лук на среднем огне 16-20 минут.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/10.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">
          Берем два средних помидора и убираем кожуру, оставляем мякоть, и
          закидываем это в сковородку.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-500 object-fit-cover rounded-3"
          src="/recipes-images/borsch/11.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">
          Кладём две столовой ложки томатной пасты с хреном в сковородку.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/14.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">
          Когда осталось 10 минут на таймере, в суп добавляем четверть капусты.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/12.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">
          Чистим чеснок и очень мелко нарезаем. Когда осталось 4 минуты на
          таймере, закидываем чеснок в сковородку.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">
          После прожарки закидываем все из сковородки в кастрюлю.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img
          class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3"
          src="/recipes-images/borsch/13.jpg"
          alt=""
        />
        <p class="bg-warning bg-opacity-75">
          Закидываем четверть ложки сумака в суп.
        </p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">
          Добавляем 2 чайных ложки соли, 1 чайную ложку маринада, перчим чуть
          чуть. Выключаем огонь и оставляем томиться.
        </p>
      </div>
    </div>
  )
}
