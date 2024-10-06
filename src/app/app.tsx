import Router from 'preact-router'

import { Header } from '../components/Header'
import { Borsch } from '../pages/Borsch'
import { Home } from '../pages/Home'
import './app.css'

export function App() {
  return (
    <>
      <Header />
      <Router>
        <Home path="/recipes" />
        <Borsch path="/recipes/borsch" />
      </Router>
      {/* TODO: Добавить Error boundary */}
    </>
  )
}
