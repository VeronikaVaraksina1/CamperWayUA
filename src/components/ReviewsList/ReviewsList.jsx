import css from "./ReviewsList.module.css"
import { StarRating } from "../StarRating/StarRating";

export const ReviewsList = ({ data }) => {
  const { reviews } = data;

  return (
    <ul className={css.list}>
      {reviews.map((review, index) => (
        <li className={css.item} key={`${review}-${index}`}>
          <div className={css.userContainer}>
            <p className={css.avatar}>{review.reviewer_name.charAt(0)}</p>
            <div className={css.nameContainer}>
              <h5>{review.reviewer_name}</h5>
              <StarRating rating={review.reviewer_rating} />
            </div>
          </div>
            <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  )
};
