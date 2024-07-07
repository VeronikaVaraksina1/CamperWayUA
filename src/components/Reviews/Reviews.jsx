import css from "./Reviews.module.css";
import { OrderForm } from "../OrderForm/OrderForm";
import { ReviewsList } from "../ReviewsList/ReviewsList";

export const Reviews = ({ data }) => {
  return (
    <div className={css.container}>
      <ReviewsList data={data} />
      <OrderForm />
    </div>
  );
};
