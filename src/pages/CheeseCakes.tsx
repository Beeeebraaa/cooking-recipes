import { RoutableProps } from "preact-router"
import { FC } from "preact/compat"
import { RecipeStats } from "../components/RecipeStats"
import { useRecipe } from "../utils/hooks/useRecipe"
import { Block } from "../components/Block"
import { Heading } from "../components/Heading"
import { Text } from "../components/Text"
import { Media } from "../components/Media"

export const CheeseCakes: FC<RoutableProps> = () => {
  const recipe = useRecipe('Сырники')

  return (
    <div class="container">
      <RecipeStats {...recipe} />

      <Heading>1. Готовим массу</Heading>
      <Block>
        <Text>Выложить пачку творога в миску (500 г). Разбить и добавить сырое яйцо. Добавить 2 столовых ложки сахара</Text>
        <Media src="./recipes-images/cheese-cakes/1.mp4" maxWidth={400} maxHeight={400} />
      </Block>
      <Block>
        <Text>Перемешиваем</Text>
        <Media src="./recipes-images/cheese-cakes/2.mp4" maxWidth={400} maxHeight={400} />
      </Block>
      <Block>
        <Text>Добавляем щепотку соли. Добавляем чуть чуть ванильного сахара (опционально). Перемешиваем</Text>
      </Block>
      <Block>
        <Text>Добавляем чуть чуть корицы (опционально). Перемешиваем</Text>
      </Block>
      <Block>
        <Text>Просеиваем и добавляем муку (4 столовых ложки с горками)</Text>
        <Media src="./recipes-images/cheese-cakes/3.mp4" maxWidth={400} maxHeight={400} />
      </Block>

      <Heading>2. Лепим</Heading>
      <Block>
        <Text>Сыпем муку на стол. Лепим сырник обволакивая в муке</Text>
        <Media src="./recipes-images/cheese-cakes/4.jpeg" maxWidth={400} maxHeight={400} />
      </Block>

      <Heading>3. Жарим</Heading>
      <Block>
        <Text>Жарим 8 минут каждую сторону</Text>
        <Media src="./recipes-images/cheese-cakes/5.jpeg" maxWidth={400} maxHeight={400} />
      </Block>
    </div>
  )
}
