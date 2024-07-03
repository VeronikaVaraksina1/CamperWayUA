import './App.css'

import { Header } from '../Header/Header.jsx'
// import { HomePage } from '../../pages/HomePage/HomePage.jsx'
// import { CatalogPage } from '../../pages/CatalogPage/CatalogPage.jsx'
// import { FavoritesPage } from '../../pages/FavoritesPage/FavoritesPage.jsx'
// import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage.jsx'

import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router'

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage.jsx'));
const FavoritesPage = lazy(() => import('../../pages/FavoritesPage/FavoritesPage.jsx'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));

function App() {
  return (
    <>
      <Header>
        <Suspense fallback="...Loading">
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/catalog' element={<CatalogPage />}></Route>
            <Route path='/favorites' element={<FavoritesPage />}></Route>
            <Route path='*' element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      </Header>
    </>
  )
}

export default App
