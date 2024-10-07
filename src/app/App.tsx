import Router from 'preact-router'

import AsyncRoute from 'preact-async-route'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { Header } from '../components/Header'
import { routes } from '../constants/routes'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import './App.css'
import { createHashHistory } from 'history';

export const App = () => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        {/* @ts-ignore */}
        <Router history={createHashHistory()}>
          <NotFound default />
          <Home path={routes.home} />
          <AsyncRoute
            path={routes.borsch}
            getComponent={() => import('../pages/Borsch').then(module => module.Borsch)}
          />
          <AsyncRoute
            path={routes.frenchPotato}
            getComponent={() => import('../pages/FrenchPotato').then(module => module.FrenchPotato)}
          />
          <AsyncRoute
            path={routes.meatSoup}
            getComponent={() => import('../pages/MeatSoup').then(module => module.MeatSoup)}
          />
          <AsyncRoute
            path={routes.pancakes}
            getComponent={() => import('../pages/Pancakes').then(module => module.Pancakes)}
          />
          <AsyncRoute
            path={routes.potatoWithMeat}
            getComponent={() => import('../pages/PotatoWithMeat').then(module => module.PotatoWithMeat)}
          />
          <AsyncRoute
            path={routes.triangles}
            getComponent={() => import('../pages/Triangles').then(module => module.Triangles)}
          />
        </Router>
      </ErrorBoundary>
    </>
  )
}
