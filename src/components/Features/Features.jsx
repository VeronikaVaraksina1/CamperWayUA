import css from "./Features.module.css";
import { Details } from "../Details/Details";
import { OrderForm } from "../OrderForm/OrderForm";

export const Features = ({ data }) => {
  return (
    <div className={css.container}>
      <Details data={data} />
      <OrderForm />
    </div>
  );
};
