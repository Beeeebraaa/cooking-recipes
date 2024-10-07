import { RoutableProps } from 'preact-router'
import { FC } from 'preact/compat'
import { RecipeStats } from '../components/RecipeStats'
import { useRecipe } from '../utils/hooks/useRecipe'
import { Block } from '../components/Block'
import { Text } from '../components/Text'
import { Heading } from '../components/Heading'

export const FishSteaks: FC<RoutableProps> = () => {
  const recipe = useRecipe('Рыбные стейки')

  return (
    <div class="container">
      <RecipeStats {...recipe} />

      <Heading>1. Подготовка</Heading>
      <Block>
        <Text>Помыть рыбу, почистить от чешуи ножом</Text>
      </Block>
      <Block>
        <Text>Посолить, поперчить стейки, добавить розмарин сушеный, выдавить половину лимона.</Text>
      </Block>
      <Block>
        <Text>Убрать стейки на час в холодильник в миске, накрытой пакетом.
        </Text>
      </Block>

      <Heading>2. Готовка</Heading>
      <Block>
        <Text>Спустя час заворачиваем стейки в фольгу и ставим печься на 40 минут 180 градусов.
        </Text>
      </Block>
      <Block>
        <Text>Спустя 40 минут раскрыть фольгу, нарезать на стейки ломтики лимона, завернуть и печь еще 10 минут</Text>
      </Block>
    </div>
  )
}
