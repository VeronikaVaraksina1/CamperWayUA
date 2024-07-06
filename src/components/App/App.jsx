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

// const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
// const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage.jsx"));
// const FavoritesPage = lazy(() => import("../../pages/FavoritesPage/FavoritesPage.jsx"));
// const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage.jsx"));

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
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Header>
    </div>
  );
}

export default App;
