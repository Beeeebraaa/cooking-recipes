import { RoutableProps } from 'preact-router'
import { FC } from 'preact/compat'
import { RecipeStats } from '../components/RecipeStats'
import { useRecipe } from '../utils/hooks/useRecipe'
import { Block } from '../components/Block'
import { Text } from '../components/Text'
import { Heading } from '../components/Heading'

export const FishSoup: FC<RoutableProps> = () => {
  const recipe = useRecipe('Уха')

  return (
    <div class="container">
      <RecipeStats {...recipe} />

      <Heading>1. Готовим бульон</Heading>
      <Block>
        <Text>Помыть рыбу. Очистить от шелухи и слизи</Text>
      </Block>
      <Block>
        <Text>Поставить вариться на 30 минут. Закинуть шарики перца, 2 лаврухи и 1-1.5 лука</Text>
      </Block>
      <Block>
        <Text>Вытащить рыбу. Бульон процедить и поставить вариться снова</Text>
      </Block>

      <Heading>2. Готовим суп</Heading>
      <Block>
        <Text>Закидываем нарезанную картошку</Text>
      </Block>
      <Block>
        <Text>Моем рис (1.5 - 2 столовых ложки) и закидываем в суп</Text>
      </Block>
      <Block>
        <Text>Порезать морковку полуколечками и закинуть</Text>
      </Block>
      <Block>
        <Text>Рыбу нарезать кубиками и закинуть в суп</Text>
      </Block>
      <Block>
        <Text>Пусть поварится до готовности овощей.</Text>
      </Block>
      <Block>
        <Text>Закидываем мелко нарезанную зелень</Text>
      </Block>
      <Block>
        <Text>Варим еще 3 минуты и готово</Text>
      </Block>
    </div>
  )
}
