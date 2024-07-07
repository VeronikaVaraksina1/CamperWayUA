import css from "./StarRating.module.css"
import icons from "../../images/icons.svg";
import clsx from "clsx";

export const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg key={i} className={clsx(css.noFilled, i <= rating ? css.filled : null)} width={16} height={16}>
        <use href={`${icons}#icon-rating`}></use>
      </svg>
    );
  }
  return <div className={css.container}>{stars}</div>;
};
