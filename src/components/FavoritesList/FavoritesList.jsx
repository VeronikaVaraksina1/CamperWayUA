import css from "./FavoritesList.module.css"
import { useSelector } from "react-redux";
import { selectFavoriteAdverts } from "../../redux/adverts/selectors";
import { Card } from "../Card/Card";

export const FavoritesList = () => {
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  return (
    <ul className={css.list}>
      {favoriteAdverts.map((advert) => (
        <li key={advert._id}>
          <Card data={advert}/>
        </li>
      ))}
    </ul>
  )
};
