import css from "./Card.module.css";
import icons from "../../images/icons.svg";
import { Button } from "../Button/Button";
import { CatalogDetails } from "../CatalogDetails/CatalogDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteAdverts } from "../../redux/adverts/selectors";
import { addFavorite, deleteFavorite } from "../../redux/adverts/slice";
import clsx from "clsx";
import { useState } from "react";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export const Card = ({ data }) => {
  const { _id, name, price, rating, location, description, details, gallery, reviews } = data;

  const favoriteAdverts = useSelector(selectFavoriteAdverts);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(data);

  const isFavorite = favoriteAdverts.some(item => item._id === _id);

  const handleAddToFavorites = () => {
    if (isFavorite) {
      dispatch(deleteFavorite(_id));
    } else {
      dispatch(addFavorite(data));
    }
  }

  const openModal = (value) => {
    setContent(value);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={css.wrapper}>
      <img className={css.image} src={gallery[0]} />
      <div className={css.about}>
        <div>
        <div className={css.title}>
          <h2>{name}</h2>
          <div className={css.price}>
            <h3>{`€${price}.00`}</h3>
            <button className={clsx(css.button, isFavorite ? css.favorites : null)} onClick={handleAddToFavorites} type="button">
              <svg width={24} height={24}>
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.ratingContainer}>
          <p className={css.rating}>
              <svg className={css.icon} width={16} height={16}>
                <use href={`${icons}#icon-rating`}></use>
              </svg>
            {`${rating}(${reviews.length} Reviews)`}
          </p>
          <p className={css.location}>
            <svg className={css.icon} width={16} height={16}>
              <use href={`${icons}#icon-map-pin`}></use>
            </svg>
            {location}
          </p>
        </div>
        </div>
        <p className={css.description}>{description}</p>

        <CatalogDetails data={data} />

        <Button type={"button"} onClick={() => openModal(content)}>Show more</Button>

        <ModalWindow value={content} isOpen={isOpen} onClose={closeModal} />
      </div>
    </div>
  );
};
