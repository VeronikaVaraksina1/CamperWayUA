import css from "./Card.module.css";
import icons from "../../images/icons.svg";
import { Button } from "../Button/Button";
import { CatalogDetails } from "../CatalogDetails/CatalogDetails";

export const Card = ({ data }) => {
  const {name,
    price,
    rating,
    location,
    description,
    details,
    gallery,
    reviews,
  } = data;

  return (
    <div className={css.wrapper}>
      <img className={css.image} src={gallery[0]} />
      <div className={css.about}>
        <div>
        <div className={css.title}>
          <h2>{name}</h2>
          <div className={css.price}>
            <p>{`€${price}.00`}</p>
            <button>
              <svg width={18} height={18}>
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

        <CatalogDetails data={data} details={details} />

        <Button type="button">Show more</Button>
      </div>
    </div>
  );
};
