import { RoutableProps } from "preact-router"
import { FC } from "preact/compat"
import { RecipeStats } from "../components/RecipeStats"
import { useRecipe } from "../utils/hooks/useRecipe"
import { Block } from "../components/Block"
import { Heading } from "../components/Heading"
import { Text } from "../components/Text"

export const ChickenSoup: FC<RoutableProps> = () => {
  const recipe = useRecipe('Куриная ИМБА')

  return (
    <div class="container">
      <RecipeStats {...recipe} />

      <Heading>1.1 Если готовим с фрикадельками</Heading>
      <Block>
        <Text>С помощью темной магии Настя колдует с куриным фаршем</Text>
      </Block>

      <Heading>1.2 Если готовим с куриным филе</Heading>
      <Block>
        <Text>Моем и нарезаем куриную грудку кубиками, нарезаем лук</Text>
      </Block>

      <Heading>2. Готовим суп</Heading>
      <Block>
        <Text>Нарезаем картошку и морковь кубиками, закидываем в суп</Text>
      </Block>
      <Block>
        <Text>Моем стооловую ложку риса. Как картошка и морковь закипят, то закидываем рис в суп</Text>
      </Block>
      <Block>
        <Text>Пока варится суп, тушим курицу с луком</Text>
      </Block>
      <Block>
        <Text>Как курица дотушится, закидываем ее в суп, вместе с соком, который из нее выделился, дабы был НАВАР.</Text>
      </Block>
      <Block>
        <Text>Солим, перчим.</Text>
      </Block>
    </div>
  )
}
