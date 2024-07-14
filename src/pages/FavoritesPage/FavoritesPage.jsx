import css from "./FavoritesPage.module.css";
import { FavoritesList } from "../../components/FavoritesList/FavoritesList";
import { selectFavoriteAdverts } from "../../redux/adverts/selectors";
import { CatalogLink } from "../../components/CatalogLink/CatalogLink";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavoriteAdverts);

  return (
    <div className={css.wrapper}>
      {favorites.length > 0 ? (
        <FavoritesList />
      ) : (
        <div className={css.container}>
          <p className={css.description}>No favorites yet.</p>
          <CatalogLink>
            Go to the Catalog
          </CatalogLink>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;