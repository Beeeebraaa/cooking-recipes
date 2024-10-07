import { RoutableProps } from "preact-router"
import { FC } from "preact/compat"
import { RecipeStats } from "../components/RecipeStats"
import { useRecipe } from "../utils/hooks/useRecipe"

export const MeatSoup: FC<RoutableProps> = () => {
  const recipe = useRecipe('Суп с фрикадельками / Лапша')

  return (
    <div class="container">
      <RecipeStats {...recipe} />

      <h3 class="mt-5 mb-4">1. Делаем фарш и фрикадельки</h3>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Берём говядину и проверяем руками косточки и прочие твердые поверхности.
          Удаляем то, что не перекрутится. Свинину чистить не надо.</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Чистим 1 зубчик чеснока и лук. Нарезаем на 4 части</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">1 кусок батона кладём в глубокую тарелку, наливаем в нее чуть чуть молока
          чтобы смягчик батон.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3" src="./recipes-images/meat-soup/1.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Проводим все это через мясорубку, чередуя свинину, говядину, лук и чеснок. В
          самом конце пропускаем батон. На такой объем добавляем чайную ложку соли и немного приправы / перца.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3" src="./recipes-images/meat-soup/2.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Лепим фрикадельки.</p>
      </div>

      <h3 class="mt-5 mb-4">2. Варим суп</h3>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-500 object-fit-cover rounded-3" src="./recipes-images/meat-soup/3.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Наливаем чуть больше пол кастрюли воды на большом огне.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-300 object-fit-cover rounded-3" src="./recipes-images/meat-soup/4.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Чистим 2 средние картошки и мелко нарезаем, после чего заливаем водой.</p>
      </div>

      <div class="d-flex flex-column gap-2 mt-5 mb-2">
        <img class="w-100 h-100 max-width-300 max-height-400 object-fit-cover rounded-3" src="./recipes-images/meat-soup/5.jpg" alt="" />
        <p class="bg-warning bg-opacity-75">Чистим, мелко нарезаем лук и маленькую морковку.</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Как закипит, кидаем картошку. Как закипит с картошкой.</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Спустя 5 минут кидаем морковь с луком.</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Спустя 10 минут кидаем вермишель (2 кулачка).</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Спустя 5 минут кидаем фрикадельки. Как закипит с фрикадельками.</p>
      </div>

      <div class="d-flex flex-wrap gap-2 mt-5 mb-2">
        <p class="bg-warning bg-opacity-75">Спустя 3 минуты солим 1.5 чайных ложек, перчим / добавляем приправу, кидаем
          лавровый лист. Все перемешать и оставить томиться на 10 минут под полотенцем.</p>
      </div>
    </div>
  )
}
