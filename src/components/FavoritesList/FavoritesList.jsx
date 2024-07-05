import { useSelector } from "react-redux";
import { selectFavoriteAdverts } from "../../redux/adverts/selectors";
import { Card } from "../Card/Card";

export const FavoritesList = () => {
  const favoriteAdverts = useSelector(selectFavoriteAdverts);

  return (
    <ul>
      {favoriteAdverts.map((advert) => (
        <li key={advert._id}>
          <Card data={advert}/>
        </li>
      ))}
    </ul>
  )
};
