import { useSelector } from "react-redux";
import { FavoritesList } from "../../components/FavoritesList/FavoritesList";
import { selectFavoriteAdverts } from "../../redux/adverts/selectors";
import { useEffect } from "react";

export const FavoritesPage = () => {
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteAdverts));
  }, [favoriteAdverts])

  return <FavoritesList />;
};
