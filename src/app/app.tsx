import Router from 'preact-router'

import { Header } from '../components/Header'
import { Borsch } from '../pages/Borsch'
import { Home } from '../pages/Home'
import './app.css'
import { FrenchPotato } from '../pages/FrenchPotato'
import { routes } from '../constants/routes'
import { MeatSoup } from '../pages/MeatSoup'
import { Pancakes } from '../pages/Pancakes'
import { PotatoWithMeat } from '../pages/PotatoWithMeat'
import { Triangles } from '../pages/Triangles'

export function App() {
  return (
    <>
      <Header />
      <Router>
        <Home path={routes.home} />
        <Borsch path={routes.borsch} />
        <FrenchPotato path={routes.frenchPotato} />
        <MeatSoup path={routes.meatSoup} />
        <Pancakes path={routes.pancakes} />
        <PotatoWithMeat path={routes.potatoWithMeat} />
        <Triangles path={routes.triangles} />
      </Router>
      {/* TODO: Добавить Error boundary */}
    </>
  )
}
