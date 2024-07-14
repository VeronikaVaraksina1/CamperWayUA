import css from "./App.module.css";

import { Header } from "../Header/Header.jsx";

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Loader } from "../Loader/Loader.jsx";
import { ScrollToTop } from "../ScrollToTop/ScrollToTop.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("../../pages/FavoritesPage/FavoritesPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <div className={css.app}>
      <ScrollToTop />
      <Header>
        <Suspense fallback={<Loader />}>
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
