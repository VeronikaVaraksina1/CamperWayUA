import css from "./CardList.module.css";
import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/adverts/selectors";
import { Card } from "../Card/Card";

export const CardList = () => {
  const adverts = useSelector(selectAdverts);

  return (
    <>
      <ul className={css.list}>
        {adverts.map((advert, index) => (
          <li key={`${advert._id}-${index}`}>
            <Card data={advert} />
          </li>
        ))}
      </ul>
    </>
  );
};
