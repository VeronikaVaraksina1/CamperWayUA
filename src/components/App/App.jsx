import "./App.module.css";

import { Header } from "../Header/Header.jsx";
import { HomePage } from '../../pages/HomePage/HomePage.jsx'
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage.jsx'
import { FavoritesPage } from '../../pages/FavoritesPage/FavoritesPage.jsx'
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage.jsx'

import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { fetchAdverts } from "../../redux/adverts/operations.js";

// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
// const FavoritesPage = lazy(() => import("../../pages/FavoritesPage/FavoritesPage"));
// const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts()).unwrap().catch((error) => console.log(error.message));
  }, [dispatch]);

  return (
    <div>
      <Header>
        <Suspense fallback="...Loading">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/catalog" element={<CatalogPage />}></Route>
            <Route path="/favorites" element={<FavoritesPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </Suspense>
      </Header>
    </div>
  );
}

export default App;
