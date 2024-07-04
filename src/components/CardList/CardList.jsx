import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import { Card } from "../Card/Card";

export const CardList = () => {
  const adverts = useSelector(selectAdverts);
  return (
    <ul>
      {adverts.map((advert) => (
        <li key={advert._id}>
          <Card data={advert} />
        </li>
      ))}
    </ul>
  );
};
